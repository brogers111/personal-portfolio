import { renderToStaticMarkup } from 'react-dom/server'
import HomePage from '../pages/HomePage'

export function render() {
  return renderToStaticMarkup(<HomePage />)
}
