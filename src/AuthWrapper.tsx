import React from 'react'

import SignIn from 'SignIn'
import InternalApp from 'InternalApp'

const AuthWrapper = (props: any) => {
  return (
    <div>
      <SignIn authState={props.authState} />
      <InternalApp authState={props.authState} />
    </div>
  )
}

export default AuthWrapper
