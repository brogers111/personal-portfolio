import { renderToStaticMarkup } from 'react-dom/server'
import Training from '../components/Training'

export function render() {
  return renderToStaticMarkup(<Training />)
}
