import React from 'react'

const List = (prop) => {

    const listItems = prop.items.map((item) => 
        <li key={item}>{item}</li>
    )

  return (
    <ul>{listItems}</ul>
  )
}

export default List