import React from 'react'

import Amplify from 'aws-amplify'
import { Authenticator } from 'aws-amplify-react'

import SignIn from 'SignIn'
import awsconfig from 'aws-exports'
import InternalApp from 'InternalApp'

Amplify.configure(awsconfig)

const AlwaysOn = (props: any) => {
  return (
    <div>
      <div>I am always here to show current auth state: {props.authState}</div>
    </div>
  )
}

const App = () => {
  return (
    <Authenticator hideDefault={true} amplifyConfig={awsconfig}>
      <SignIn />
      <InternalApp />
      <AlwaysOn />
    </Authenticator>
  )
}

export default App
