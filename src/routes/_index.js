import * as React from 'react'
import { Link } from '@remix-run/react'
import { Title } from '/src/title.js'
import { Card } from '/src/card.js'
// import { activities } from '/src/data.js'
import { CategoryFilters } from '/src/category-filters.js'
// import '.../public/globals.css'

export const activities = [
  {
    id: 0,
    name: 'Attend The Floating Lantern Festival',
    imageUrl: './assets/lanterns.png',
    rating: 3,
    date: '06 05 2022',
    description:
      'In the warmth of the moonlight, thousands of glowing lanterns drift gracefully into the sky, creating the magic and serenity of Thailands enchanting floating lantern festival.',
    categories: ['aquatic', 'colorful'],
  },
  {
    id: 1,
    name: 'Feed a Wild Deer',
    imageUrl: './assets/deer.JPG',
    rating: 4,
    date: '07 17 2019',
    description:
      'With a polite nudge, the wild deer of Nara nibbled treats from an outstretched hand, forging an unforgettable moment of connection in the magical city of Nara, Japan.',
    categories: ['nearby', 'risky'],
  },
  {
    id: 2,
    name: 'Drink Curaçao in Curaçao ',
    imageUrl: './assets/Curaçao.png',
    rating: 5,
    date: '04 19 2011',
    description:
      'Sipping a vibrant blue cocktail on sun-kissed shores in the Caribbean, I felt the islands warmth and spirit infuse every delicious, refreshing sip.',
    categories: ['mixological', 'tropical', 'aquatic'],
  },
  {
    id: 3,
    name: 'See The Pyramids of Giza',
    imageUrl: './assets/pyramids.png',
    rating: 2,
    date: '08 28 2021',
    description:
      'Standing before the awe-inspiring Pyramids of Giza, I felt humbled by their sheer scale and the magnificent history they represented.',
    categories: ['wonderous', 'rare'],
  },
]

export const categories = [
  'rare',
  'colorful',
  'odd',
  'trending',
  'risky',
  'snowy',
  'mixological',
  'aquatic',
  'wonderous',
  'tropical',
]

export default function Index() {
  return (
    <div
      style={{
        width: '100%',
        background: 'var(--off-white)',
        zIndex: '100',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px 0px 25px',
        gap: 5,
        boxShadow: '0px 2px 33px var(--yellow)',
      }}
    >
      <Title />
      {/* <CategoryFilters /> */}
      <div
        style={{
          background: '#dd4a76',
          width: '80%',
          height: 80,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
        }}
      >
        <Link
          style={{
            wordBreak: 'break-word',
            color: 'var(--off-white)',
            contain: 'layout',
            width: 'max-content',
            height: 'max-content',
            fontWeight: 700,
            fontFamily: 'var(--secondary)',
            fontSize: '28px',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
          to='/posts'
        >
          See The Things I've Done
        </Link>
      </div>
    </div>
  )
}
