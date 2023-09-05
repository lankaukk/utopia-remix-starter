// import * as React from 'react'
import '../public/globals.css'
import {
  CategoryItem,
  ClearCategoriesButton,
} from './category-item.js'
// import { categories } from '../public/data.js'

export var CategoryFilters = () => {
  const categories = [
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
  return (
    <div
      className='category-container'
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0px 0px 0px 20px',
        gap: 20,
        width: '100%',
        height: '69.5px',
        overflowX: 'scroll',
      }}
    >
      <ClearCategoriesButton
        style={{
          borderRadizus: '50px',
          padding: '0px 18px',
          borderRadius: 22,
        }}
      />
      {categories.map((category) => (
        <CategoryItem
          selected={false}
          name={category}
          style={{
            padding: '13px 27px',
            borderRadius: 50,
          }}
        />
      ))}
    </div>
  )
}
