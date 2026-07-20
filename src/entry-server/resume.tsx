import { renderToStaticMarkup } from 'react-dom/server'
import ResumePage from '../pages/ResumePage'

export function render() {
  return renderToStaticMarkup(<ResumePage />)
}
