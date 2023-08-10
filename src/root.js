import * as React from 'react'
import { Outlet } from '@remix-run/react'

export default function App() {
  return (
    <div
      style={{
        backgroundColor: '#a5c0db',
        position: 'absolute',
        left: 3,
        top: 111,
        width: 177,
        height: 291,
      }}
      data-uid='bf5'
    >
      <div>Root.js</div>
      <Outlet />
    </div>
  )
}
