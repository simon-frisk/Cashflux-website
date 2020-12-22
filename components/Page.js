import React from 'react'

export default ({ children }) => {
  return (
    <div
      style={{
        margin: 'auto',
        maxWidth: 750,
        width: '92%',
      }}
    >
      {children}
    </div>
  )
}
