// import * as React from 'react'
import { Outlet } from '@remix-run/react'

export default function App() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        contain: 'layout',
      }}
    >
      <Outlet />
    </div>
  )
}
