import React from 'react'
import { Link } from '@remix-run/react'
import { json, useLoaderData } from 'react-router'
import { Title } from '/src/title.js'
import { CategoryFilters } from '/src/category-filters.js'
import { activities } from '/public/data.js'
import { Card } from '/src/card.js'

export function loader() {
  return json({
    activities: activities,
  })
}

export default function Posts() {
  const { activities } = useLoaderData()
  return (
    <div
      style={{
        padding: '10px',
        backgroundColor: 'var(--off-white)',
        height: '100%',
      }}
    >
      <Title />
      {/* <CategoryFilters /> */}
      {activities.map(
        ({
          id,
          name,
          imageUrl,
          rating,
          date,
          description,
          categories,
        }) => (
          <div
            style={{
              width: '100%',
              background: 'var(--orange)',
              overflowY: 'scroll',
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
              flexWrap: 'nowrap',
              padding: '0px 0px',
            }}
          >
            {/* <img
              style={{
                backgroundColor: '#aaaaaa33',
                width: 77,
                height: 75,
                contain: 'layout',
                borderRadius: 20,
              }}
              src={imageUrl}
            /> */}
            <span
              style={{
                wordBreak: 'break-word',
                width: 110,
                height: 33,
                contain: 'layout',
              }}
            >
              <Link to={`${id}`}>
                <Card
                  id={id}
                  name={name}
                  imageUrl={imageUrl}
                  rating={rating}
                  date={date}
                  description={description}
                  categories={categories}
                />
              </Link>
            </span>
          </div>
        ),
      )}
    </div>
  )
}
