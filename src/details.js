import * as React from 'react'
export var Details = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
      }}
    >
      {props.categories.map((category) => (
        <div
          style={{
            backgroundColor: 'var(--purple)',
            color:
              props.id % 2
                ? 'var(--yellow)'
                : 'var(--orange)',
            padding: '2px 6px',
            borderRadius: 3,
          }}
        >
          {category}
        </div>
      ))}
    </div>
  )
}
