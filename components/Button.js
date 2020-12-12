import React from 'react'

export default ({ children, ...props }) => (
  <span
    {...props}
    style={{
      padding: '8px 15px',
      backgroundColor: '#47f',
      color: 'white',
      borderRadius: '5px',
      cursor: 'pointer',
    }}
  >
    {children}
  </span>
)
