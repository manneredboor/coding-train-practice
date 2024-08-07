import { ComponentProps, useCallback, useEffect, useRef, useState } from 'react'
import { RenderArgs, CanvasAnimFrame } from 'modules/canvas/CanvasAnimFrame'
import { DemoLayoutControls } from 'modules/ui/layout/DemoLayoutControls'
import { Vector } from 'modules/math/vectors/VectorMutable'
import type { CanvasUtil } from 'modules/canvas/canvas-util'

type ControlsProps = ComponentProps<typeof DemoLayoutControls>

export type StateWithDefaults<S> = S & {
  mouse?: Vector
  isMousePressed: boolean
  keyboard: { [key: string]: boolean }
}

export type CanvasComponentProps = Partial<
  ComponentProps<typeof CanvasAnimFrame>
>

export type GetCanvasProps<S> = (args: {
  canvasUtil: CanvasUtil
  drawState: S
}) => CanvasComponentProps

type Props<SP, S = StateWithDefaults<SP>> = ControlsProps & {
  canvasProps?: GetCanvasProps<S>
  render: (args: RenderArgs & { drawState: S }) => void
  setup: (args: RenderArgs) => SP
  afterSetup?: (args: RenderArgs & { drawState: S }) => void
  removeMouseOnOut?: boolean
}

export function PageDemo<SP extends object = object>({
  canvasProps: canvasPropsProp = () => ({}),
  render: renderProp,
  setup: setupProp,
  afterSetup,
  removeMouseOnOut,
  ...controlProps
}: Props<SP>) {
  type S = StateWithDefaults<SP>

  const drawStateRef = useRef<S | null>(null)
  const [restartIndex, setRestartIndex] = useState<number>(0)
  const [canvasProps, setCanvasProps] = useState<CanvasComponentProps>({})

  const setup = useCallback(
    ({ canvasUtil }: RenderArgs) => {
      if (drawStateRef.current === null) {
        drawStateRef.current = {
          mouse: undefined,
          isMousePressed: false,
          keyboard: {},
          ...setupProp({ canvasUtil }),
        }
      }

      const drawState = drawStateRef.current

      const gotenProps = canvasPropsProp({
        canvasUtil,
        drawState: drawStateRef.current,
      })
      const defaultProps = {
        onMouseMove: (e: React.MouseEvent<HTMLCanvasElement>) => {
          if (drawState.mouse) {
            drawState.mouse.x = e.pageX
            drawState.mouse.y = e.pageY
          } else {
            drawState.mouse = new Vector(e.pageX, e.pageY)
          }
          gotenProps.onMouseMove?.(e)
        },
        onMouseOut: (e: React.MouseEvent<HTMLCanvasElement>) => {
          if (removeMouseOnOut) {
            drawState.mouse = undefined
          }
          gotenProps.onMouseOut?.(e)
        },
        onMouseDown: (e: React.MouseEvent<HTMLCanvasElement>) => {
          if (e.button === 0) drawState.isMousePressed = true
          gotenProps.onMouseDown?.(e)
        },
        onMouseUp: (e: React.MouseEvent<HTMLCanvasElement>) => {
          if (e.button === 0) drawState.isMousePressed = false
          gotenProps.onMouseUp?.(e)
        },
      }

      setCanvasProps({
        ...gotenProps,
        ...defaultProps,
      })

      afterSetup?.({ canvasUtil, drawState })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const handleClickRestart = useCallback(() => {
    drawStateRef.current = null
    setRestartIndex(curr => curr + 1)
  }, [])

  const render = useCallback(
    (args: RenderArgs) => {
      renderProp({
        ...args,
        drawState: drawStateRef.current!,
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!drawStateRef.current) return
      drawStateRef.current.keyboard[e.code] = true
    }
    const onKeyUp = (e: KeyboardEvent) => {
      if (!drawStateRef.current) return
      delete drawStateRef.current.keyboard[e.code]
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
    }
  }, [])

  return (
    <>
      <DemoLayoutControls
        {...controlProps}
        onClickRestart={handleClickRestart}
      />
      <CanvasAnimFrame
        key={restartIndex}
        {...canvasProps}
        setup={setup}
        render={render}
        style={{
          height: '100vh',
        }}
      />
    </>
  )
}
