import { renderToStaticMarkup } from 'react-dom/server'
import ContactPage from '../pages/ContactPage'

export function render() {
  return renderToStaticMarkup(<ContactPage />)
}
