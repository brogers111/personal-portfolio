import { renderToStaticMarkup } from 'react-dom/server'
import NotFoundPage from '../pages/NotFoundPage'

export function render() {
  return renderToStaticMarkup(<NotFoundPage />)
}
