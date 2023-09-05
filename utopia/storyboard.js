import * as React from 'react'
import { Scene, Storyboard, RemixScene } from 'utopia-api'
import { App } from '/src/app.js'
import { Playground } from '/src/playground.js'
import Index from '/src/routes/_index'
import { Group } from 'utopia-api'
import { MoodBoard } from '/src/mood-board.js'

export var storyboard = (
  <Storyboard>
    <RemixScene
      style={{
        width: 386,
        height: 543,
        position: 'absolute',
        left: 467,
        top: 3,
        background: 'lime',
      }}
    />
    <Scene
      style={{
        width: 386,
        height: 543,
        position: 'absolute',
        left: 967,
        top: 3,
        background: 'lime',
      }}
    />
    <Scene
      style={{
        position: 'absolute',
        left: -1288,
        top: 4,
        width: 1600,
        height: 1656,
      }}
      data-label='Mood Board'
    >
      <MoodBoard />
    </Scene>
  </Storyboard>
)
