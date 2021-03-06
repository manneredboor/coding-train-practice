import * as React from 'react'
import { DemoPage } from 'components/Layout/DemoPage'
import { Vector } from 'components/Vectors/VectorMutable'
import { Mover } from './Mover'
import { random } from 'utils'
import { links } from 'utils/links'

const windForce = new Vector(0.5, 0)

interface DrawState {
  guys: Mover[]
  isWind?: boolean
}

const Page = DemoPage as new () => DemoPage<DrawState>

export const Forces = () => (
  <Page
    hint="click for wind"
    next={links.dragResistance}
    srcLink="Forces/Forces.tsx"
    canvasProps={({ drawState }) => ({
      onMouseDown: () => (drawState.isWind = true),
      onMouseUp: () => (drawState.isWind = false),
    })}
    setup={({ width, height }) => ({
      guys: Array.from(Array(6)).map(
        () => new Mover(random(90, width - 90), height / 2),
      ),
    })}
    render={({ ctx, width, height, drawState }) => {
      drawState.guys.forEach(guy => {
        // Wind
        if (drawState.isWind) guy.applyForce(windForce)

        // Gravity
        guy.gravity()

        guy.edges(width, height)
        guy.update()
        guy.render(ctx)
      })
    }}
  />
)
