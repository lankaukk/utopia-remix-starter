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
        position: 'absolute',
        width: 834,
        height: 1656,
        left: 4,
        top: -22,
        overflow: 'hidden',
      }}
      data-label='Mood Board'
    >
      <MoodBoard />
    </RemixScene>
    <Scene
      style={{
        position: 'absolute',
        left: -2904,
        width: 2756,
        height: 1656,
        top: 0,
      }}
      data-label='Mood Board'
    >
      <MoodBoard />
    </Scene>
  </Storyboard>
)
