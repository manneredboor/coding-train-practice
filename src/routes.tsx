import { links } from 'utils/links'
import { RouteConfig } from 'react-router-config'
import { AppContainer } from 'components/Layout/AppContainer'
import { DragResistance } from 'components/Forces/DragResistance'
import { Forces } from 'components/Forces/Forces'
import { GravityAttraction } from 'components/Forces/GravityAttraction'
import { HarmonicMotion } from 'components/HarmonicMotion/HarmonicMotion'
import { Home } from 'components/Home'
import { MutalAttraction } from 'components/Forces/MutalAttraction'
import { Pendulum } from 'components/Pendulum/Pendulum'
import { PortDefender } from 'components/PortDefender/PortDefender'
import { Spring } from 'components/Pendulum/Spring'
import { Vectors } from 'components/Vectors/Vectors'

export const routes: RouteConfig[] = [
  {
    component: AppContainer,
    routes: [
      {
        component: Home,
        exact: true,
        path: links.home.link,
      },
      {
        component: Vectors,
        exact: true,
        path: links.vectors.link,
      },
      {
        component: Forces,
        exact: true,
        path: links.forces.link,
      },
      {
        component: Forces,
        exact: true,
        path: links.forces.link,
      },
      {
        component: DragResistance,
        exact: true,
        path: links.dragResistance.link,
      },
      {
        component: GravityAttraction,
        exact: true,
        path: links.gravityAttraction.link,
      },
      {
        component: MutalAttraction,
        exact: true,
        path: links.mutalAttraction.link,
      },
      {
        component: PortDefender,
        exact: true,
        path: links.portDefender.link,
      },
      {
        component: HarmonicMotion,
        exact: true,
        path: links.harmonicMotion.link,
      },
      {
        component: Pendulum,
        exact: true,
        path: links.pendulum.link,
      },
      {
        component: Spring,
        exact: true,
        path: links.spring.link,
      },
    ],
  },
]
