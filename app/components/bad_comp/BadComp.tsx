import React from 'react'

// styles
import './BadComp.css'

type Props = {
    title: string,
    cls: string,
}

const BadComp = (props: Props): any => {
  return (
      <div className={props.cls}>
          {props.title}
    </div>
  )
}

export default BadComp