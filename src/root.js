import * as React from 'react'
import { Outlet } from '@remix-run/react'

export default function App() {
  return (
    <div
      style={{
        backgroundColor: '#a5c0db',
        width: '100%',
        height: '100%',
        contain: 'layout',
      }}
      data-uid='bf5'
    >
      <div
        data-uid='d4d'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          fontSize: '8px',
          fontWeight: 700,
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0,
        }}
      >
        Root.js
      </div>
      <Outlet data-uid='11c' />
    </div>
  )
}
