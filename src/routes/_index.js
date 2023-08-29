import React from 'react'
import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        padding: '0px 8px',
      }}
      data-path='0cd/add/597:rrr'
    >
      <span
        style={{
          fontSize: '40px',
          fontWeight: 700,
          fontStyle: 'normal',
          color: 'rgb(0, 0, 0, 1)',
        }}
        data-path='0cd/add/597:rrr/ttt'
        data-uid='ttt'
      >
        Beaches
      </span>
      <div
        style={{
          backgroundColor: '#e6e6e6',
          width: '100%',
          height: 79,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 26,
        }}
        data-path='0cd/add/597:rrr/419'
        data-uid='419'
      >
        <Link
          style={{
            wordBreak: 'break-word',
            color: 'rgb(255, 251, 251, 1)',
            contain: 'layout',
            fontSize: '20px',
            width: 'max-content',
            height: 'max-content',
            fontWeight: 700,
          }}
          to='/posts'
        >
          Check avaliable beaches
        </Link>
      </div>
    </div>
  )
}
