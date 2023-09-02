import * as React from 'react'
import {
  Scene,
  Storyboard,
  RemixScene,
} from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'
import Index from '/src/routes/_index'
import { Group } from 'utopia-api'

export var storyboard = (
  <Storyboard data-uid='0cd'>
    <Scene
      style={{
        width: 386,
        height: 543,
        position: 'absolute',
        left: 771,
        top: 334,
      }}
      data-label='Remix App'
      data-uid='2ad'
    >
      <RemixScene
        data-uid='597'
        style={{ height: '100%' }}
      />
    </Scene>
    <div
      style={{
        position: 'absolute',
        left: -216,
        top: 23,
        width: 288,
        height: 150,
      }}
      data-uid='cc0'
    />
  </Storyboard>
)
