import { PageDemo } from 'modules/pages/PageDemo'
import { Vector } from 'modules/math/vectors/VectorMutable'
import { colors } from 'modules/styles/styles'
import { links } from 'modules/appCore/links'
import type { CanvasUtil } from 'modules/canvas/canvas-util'

const G = 0.0009

type PendulumMoverArgs = {
  canvasUtil: CanvasUtil
  angle: number
  mass: number
  len: number
  origin: Vector
}

class PendulumMover {
  canvasUtil: CanvasUtil
  aAcc: number
  aVel: number
  angle: number
  mass: number
  bob: Vector
  len: number
  origin: Vector

  constructor(args: PendulumMoverArgs) {
    this.canvasUtil = args.canvasUtil
    this.aAcc = 0
    this.aVel = 0
    this.angle = args.angle
    this.bob = new Vector(0, 0)
    this.len = args.len
    this.mass = args.mass
    this.origin = args.origin
  }

  update() {
    this.aAcc =
      -G * this.mass * Math.sin(this.angle) * this.canvasUtil.fpsAdjust(1)
    this.aVel += this.aAcc
    this.angle += this.aVel
    this.aVel *= 0.999

    this.bob.x = this.origin.x + this.len * Math.sin(this.angle)
    this.bob.y = this.origin.y + this.len * Math.cos(this.angle)
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save()

    ctx.beginPath()
    ctx.moveTo(this.origin.x, this.origin.y)
    ctx.lineTo(this.bob.x, this.bob.y)

    ctx.strokeStyle = '#ccc'
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(this.bob.x, this.bob.y, 20 * Math.pow(this.mass, 2), 0, 360)
    ctx.fillStyle = colors.brand
    ctx.fill()

    ctx.restore()
  }
}

type DrawState = {
  pendulums: PendulumMover[]
}

export const Pendulum = () => (
  <PageDemo<DrawState>
    next={links.spring}
    srcLink="05-Pendulum/Pendulum.tsx"
    setup={({ canvasUtil }) => {
      const { width, height } = canvasUtil
      return {
        pendulums: [
          new PendulumMover({
            canvasUtil,
            angle: Math.PI / 4,
            len: height * 0.5,
            mass: 0.9,
            origin: new Vector(width * 0.25, 0),
          }),
          new PendulumMover({
            canvasUtil,
            angle: Math.PI / 4,
            len: height * 0.5,
            mass: 1,
            origin: new Vector(width * 0.5, 0),
          }),
          new PendulumMover({
            canvasUtil,
            angle: Math.PI / 4,
            len: height * 0.5,
            mass: 1.1,
            origin: new Vector(width * 0.75, 0),
          }),
        ],
      }
    }}
    render={({ canvasUtil, drawState }) => {
      const { ctx } = canvasUtil
      drawState.pendulums.forEach(p => {
        p.update()
        p.draw(ctx)
      })
    }}
  />
)
