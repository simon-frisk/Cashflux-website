import React from 'react'

export default ({ children }) => {
  return (
    <div
      style={{
        maxWidth: 750,
        width: '90%',
        margin: '5% auto'
      }}
    >
      {children}
    </div>
  )
}
