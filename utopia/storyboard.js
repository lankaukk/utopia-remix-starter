import * as React from 'react'
import {
  Scene,
  Storyboard,
  RemixContainer,
} from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'
import Index from '/src/routes/_index'
import { Group } from 'utopia-api'

export var storyboard = (
  <Storyboard data-uid='0cd'>
    <Scene
      style={{
        width: 264,
        height: 541,
        position: 'absolute',
        left: -169,
        top: 280,
      }}
      data-label='Remix App'
      data-uid='aad'
    >
      <RemixContainer data-uid='597' />
    </Scene>
    <div
      style={{
        position: 'absolute',
        left: -216,
        top: 23,
        width: 288,
        height: 150,
      }}
      data-uid='bdc'
    />
  </Storyboard>
)
