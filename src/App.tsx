import React from 'react'

import Amplify from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'

import '@aws-amplify/ui/dist/style.css'

import awsconfig from 'aws-exports'

Amplify.configure(awsconfig)

function App() {
  return <div>This is private!</div>
}

export default withAuthenticator(App)
