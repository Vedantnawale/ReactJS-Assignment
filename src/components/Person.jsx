import React from 'react'

const Person = (props) => {
  return (
    <div>
        <p> Person Name :- {props.name}</p>
        <p>Person Age :- {props.age}</p>
    </div>
  )
}

export default Person