import React, { ReactNode } from 'react'

// styles
import './List.css'
type Props = {}

const color = "magenta"

// creating a list using generic funtions

function List<ListItem>({items, render}: {items: ListItem[], render: (item: ListItem) => ReactNode}) {
  return (
      <ul>
          {items.map((item, idx) => (
              <li key={idx} className='listItems'>
                  {render(item)}
             </li>
         ))}
      </ul>
  )
}

export default List