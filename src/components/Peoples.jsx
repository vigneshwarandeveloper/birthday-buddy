import React from 'react'
import { Person } from './Person'

export const Peoples = ({people,setpeople}) => {

    const handleclear=()=>{
        setpeople([])
    }

  return (
    <section>
        {people.map((person)=>{
            const{id,name,age,image}=person
            return <Person key={id} name={name} age={age} image={image}/>
        })}
        <button onClick={handleclear} className='btn btn-block'>Clear All</button>
    </section>
  )
}
