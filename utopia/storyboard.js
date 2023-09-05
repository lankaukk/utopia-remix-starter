import * as React from 'react'
import { Scene, Storyboard, RemixScene } from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'
import Index from '/src/routes/_index'
import { Group } from 'utopia-api'

export var storyboard = (
  <Storyboard>
    <RemixScene
      style={{
        width: 386,
        height: 543,
        position: 'absolute',
        left: 469,
        top: 1,
      }}
    />
    <div
      style={{
        position: 'absolute',
        left: -216,
        top: 23,
        width: 288,
        height: 150,
      }}
    />
  </Storyboard>
)
