import './Button.scss'

import React from 'react'

const CButton = ({ title, ...rest }) => {
  return (
    <>
      <button className="button" {...rest}>
        {title}
      </button>
    </>
  )
}

export default CButton
