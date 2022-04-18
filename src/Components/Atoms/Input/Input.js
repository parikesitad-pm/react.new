import './Input.scss'

import React from 'react'

const CInput = ({ label, placeholder, onChange }) => {
  return (
    <>
      <div className="inputWrapper">
        <p className="label">{label}</p>
        <input
          className="input"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export default CInput
