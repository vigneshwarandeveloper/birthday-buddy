import React from 'react'

export const Person = ({name,age,image}) => {
  return (
    <article className='person'>
    <img src={image} alt='noimg' />
    <div>
    <h4>{name}</h4>
    <p>{age} years</p>
    </div>
    </article>
  )
}
