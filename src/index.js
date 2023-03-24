import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Helmet } from 'react-helmet'

import App from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Helmet>
      <title>Gratin</title>
    </Helmet>
    <App />
  </StrictMode>
)
