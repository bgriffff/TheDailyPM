"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DinoGameProps {
  onClose: () => void
}

export function DinoGame({ onClose }: DinoGameProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Close on ESC key
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  useEffect(() => {
    if (!containerRef.current) return

    // Inject the game HTML
    const gameHTML = `
      <style>
        .dino-wrap { display: grid; place-items: center; padding: 16px; gap: 10px; }
        .dino-canvas { background: #ffffff; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,.08); touch-action: manipulation; }
        .dino-hud { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; justify-content: center; }
        .dino-pill { background: #fff; border: 1px solid #e9e9ef; color: #111; padding: 8px 12px; border-radius: 999px; font-size: 14px; box-shadow: 0 4px 16px rgba(0,0,0,.06); }
        .dino-btn { cursor: pointer; user-select: none; }
        .dino-legend { font-size: 12px; color: #555; background: #fff; border: 1px solid #eee; padding: 6px 10px; border-radius: 999px; }
        .dino-kbd { background: #fff; border: 1px solid #ccd; border-bottom-width: 2px; padding: 2px 6px; border-radius: 6px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      </style>
      <div class="dino-wrap">
        <div class="dino-legend">Press <span class="dino-kbd">Space</span> / Tap to jump · <span class="dino-kbd">P</span> to pause</div>
        <canvas id="dino-game-canvas" width="880" height="320" aria-label="Dino Dash canvas" class="dino-canvas"></canvas>
        <div class="dino-hud">
          <div id="dino-score" class="dino-pill">Score: 00000</div>
          <div id="dino-hi" class="dino-pill">Best: 00000</div>
          <button id="dino-restart" class="dino-pill dino-btn">Restart</button>
        </div>
      </div>
    `
    containerRef.current.innerHTML = gameHTML

    // Game logic
    const DPR = Math.max(1, Math.floor(window.devicePixelRatio || 1))
    const canvas = document.getElementById("dino-game-canvas") as HTMLCanvasElement
    const ctx = canvas.getContext("2d")!

    const BASE_W = 880,
      BASE_H = 320
    let scaleX = DPR,
      scaleY = DPR

    function fitCanvas() {
      const cssW = Math.min(880, Math.floor(window.innerWidth - 64))
      const cssH = Math.min(320, Math.floor(window.innerHeight - 300))
      const aspect = BASE_W / BASE_H
      let w = cssW,
        h = Math.round(cssW / aspect)
      if (h > cssH) {
        h = cssH
        w = Math.round(cssH * aspect)
      }
      canvas.style.width = w + "px"
      canvas.style.height = h + "px"
      canvas.width = w * DPR
      canvas.height = h * DPR
      scaleX = canvas.width / BASE_W
      scaleY = canvas.height / BASE_H
    }
    fitCanvas()

    const scoreEl = document.getElementById("dino-score")!
    const hiEl = document.getElementById("dino-hi")!
    const restartBtn = document.getElementById("dino-restart")!

    const GROUND_Y = BASE_H - 62
    const GRAVITY = 0.58
    const JUMP_VEL = -10.6
    const INIT_SPEED = 5.2
    const MAX_SPEED = 15.5
    const SPAWN_MIN = 580,
      SPAWN_MAX = 920

    let running = false,
      paused = false,
      gameOver = false
    let speed = INIT_SPEED
    let distance = 0
    let nextSpawnAt = 400
    let score = 0,
      hiscore = Number(localStorage.getItem("dino_pm_best") || 0)

    const player = { x: 90, y: GROUND_Y - 42, w: 32, h: 42, vy: 0, jumping: false }
    const ground = { x: 0 }
    const obstacles: any[] = []
    const clouds: any[] = []
    const particles: any[] = []

    const rand = (a: number, b: number) => a + Math.random() * (b - a)

    function reset() {
      running = true
      paused = false
      gameOver = false
      player.y = GROUND_Y - player.h
      player.vy = 0
      player.jumping = false
      obstacles.length = 0
      clouds.length = 0
      particles.length = 0
      speed = INIT_SPEED
      distance = 0
      nextSpawnAt = rand(SPAWN_MIN, SPAWN_MAX)
      score = 0
      updateScore()
      for (let i = 0; i < 5; i++) clouds.push(makeCloud(rand(0, BASE_W)))
    }

    function updateScore() {
      scoreEl.textContent = "Score: " + String(Math.floor(score)).padStart(5, "0")
      hiEl.textContent = "Best: " + String(Math.floor(hiscore)).padStart(5, "0")
    }

    function makeCloud(x: number) {
      return { x, y: rand(40, 140), w: rand(40, 110), h: rand(16, 28), vx: rand(0.2, 0.6) }
    }

    function spawnObstacle() {
      const type = Math.random() < 0.5 ? "rock" : "log"
      const w = type === "rock" ? rand(22, 36) : rand(40, 70)
      const h = type === "rock" ? rand(26, 38) : rand(20, 24)
      obstacles.push({ x: BASE_W + 30, y: GROUND_Y - h, w, h, type })
    }

    function jump() {
      if (!running || paused) return
      if (!player.jumping) {
        player.vy = JUMP_VEL * (1 + Math.min(0.25, (speed / MAX_SPEED) * 0.15))
        player.jumping = true
        for (let i = 0; i < 8; i++)
          particles.push({
            x: player.x + player.w * 0.4,
            y: GROUND_Y - 2,
            vx: rand(-1, 1),
            vy: rand(-2, -1),
            r: rand(1, 2.4),
            life: rand(14, 24),
          })
      }
    }

    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        e.preventDefault()
        if (gameOver) {
          reset()
        } else jump()
      }
      if (e.key === "p" || e.key === "P") {
        if (running && !gameOver) paused = !paused
      }
    })
    canvas.addEventListener("pointerdown", () => {
      if (gameOver) {
        reset()
      } else jump()
    })
    restartBtn.addEventListener("click", reset)

    function rect(x: number, y: number, w: number, h: number) {
      ctx.fillRect(x * scaleX, y * scaleY, w * scaleX, h * scaleY)
    }

    function drawGround() {
      ctx.fillStyle = "#c8ccd7"
      rect(0, GROUND_Y, BASE_W, 2)
      ctx.fillStyle = "#d9dde6"
      const seg = 22,
        gap = 16
      let gx = -(ground.x % (seg + gap))
      while (gx < BASE_W) {
        rect(gx, GROUND_Y + 8, seg, 2)
        gx += seg + gap
      }
    }

    function drawClouds() {
      ctx.fillStyle = "#c9d7ff"
      clouds.forEach((c) => {
        rect(c.x, c.y, c.w, c.h)
        rect(c.x - c.w * 0.2, c.y + 4, c.w * 0.6, c.h * 0.8)
      })
    }

    function drawPlayer() {
      ctx.fillStyle = "#6366f1"
      rect(player.x, player.y, player.w, player.h)
    }

    function drawObstacles() {
      obstacles.forEach((o) => {
        ctx.fillStyle = o.type === "rock" ? "#8892a6" : "#a07a3b"
        rect(o.x, o.y, o.w, o.h)
      })
    }

    function drawParticles() {
      ctx.fillStyle = "#b0b6c6"
      particles.forEach((p) => {
        rect(p.x, p.y, p.r, p.r)
      })
    }

    function aabb(a: any, b: any) {
      return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
    }

    let last = performance.now()
    function loop(now: number) {
      requestAnimationFrame(loop)
      if (!running || paused) {
        drawFrame()
        return
      }
      const dt = Math.min(32, now - last)
      last = now
      const t = dt / 16.6667

      speed = Math.min(MAX_SPEED, INIT_SPEED + score / 600)

      player.vy += GRAVITY * t
      player.y += player.vy * t
      if (player.y >= GROUND_Y - player.h) {
        player.y = GROUND_Y - player.h
        player.vy = 0
        player.jumping = false
      }

      ground.x += speed * t
      distance += speed * t
      score += 0.1 * speed * t

      if (distance > nextSpawnAt) {
        spawnObstacle()
        nextSpawnAt += rand(SPAWN_MIN, SPAWN_MAX) * (0.94 - Math.min(0.4, score / 4000))
      }

      for (let i = obstacles.length - 1; i >= 0; i--) {
        const o = obstacles[i]
        o.x -= speed * t
        if (o.x + o.w < -10) obstacles.splice(i, 1)
        if (aabb(player, o)) {
          running = false
          gameOver = true
          hiscore = Math.max(hiscore, Math.floor(score))
          localStorage.setItem("dino_pm_best", String(hiscore))
        }
      }

      clouds.forEach((c) => {
        c.x -= c.vx * t
        if (c.x + c.w < -20) {
          c.x = BASE_W + rand(10, 80)
          c.y = rand(40, 140)
          c.w = rand(40, 110)
          c.h = rand(16, 28)
          c.vx = rand(0.2, 0.6)
        }
      })
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx * t
        p.y += p.vy * t
        p.vy += 0.25 * t
        p.life -= t
        if (p.life <= 0) particles.splice(i, 1)
      }

      updateScore()
      drawFrame()
    }

    function drawFrame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.scale(scaleX, scaleY)
      ctx.fillStyle = "#eef2ff"
      ctx.fillRect(0, 0, BASE_W, BASE_H)
      drawClouds()
      drawGround()
      drawObstacles()
      drawParticles()
      drawPlayer()
      if (!running && !gameOver) {
        drawCenteredText("DINO DASH", 112, 36)
        drawCenteredText("Press Space / Tap to Start", 170, 16)
      }
      if (gameOver) {
        drawCenteredText("GAME OVER", 140, 32)
        drawCenteredText("Press Space / Tap to Restart", 170, 16)
      }
      ctx.restore()
    }

    function drawCenteredText(text: string, y: number, size = 24) {
      ctx.fillStyle = "#111"
      ctx.font = `bold ${size}px system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial`
      ctx.textAlign = "center"
      ctx.fillText(text, BASE_W / 2, y)
    }

    requestAnimationFrame(loop)

    function beginOnFirst() {
      if (!running && !gameOver) {
        reset()
        detach()
      }
    }
    function beginOnFirstKey(e: KeyboardEvent) {
      if (e.code === "Space") {
        e.preventDefault()
        beginOnFirst()
      }
    }
    function detach() {
      window.removeEventListener("pointerdown", beginOnFirst)
      window.removeEventListener("keydown", beginOnFirstKey)
    }
    window.addEventListener("pointerdown", beginOnFirst)
    window.addEventListener("keydown", beginOnFirstKey)
  }, [])

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 rounded-3xl shadow-2xl max-w-5xl w-full p-8">
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 rounded-full hover:bg-white/50"
        >
          <X className="w-6 h-6" />
        </Button>

        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            You found the secret PM game!
          </h2>
          <p className="text-gray-600 mt-2">Take a break and test your reflexes</p>
        </div>

        <div ref={containerRef} />
      </div>
    </div>
  )
}
