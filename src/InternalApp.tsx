import React from 'react'

const InternalApp = (props: any) => {
  console.log('InternalApp props:', props)
  return props.authState === 'signedIn' ? <div>The App</div> : null
}

export default InternalApp
