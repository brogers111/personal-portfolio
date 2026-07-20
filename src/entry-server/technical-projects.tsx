import { renderToStaticMarkup } from 'react-dom/server'
import ProjectsPage from '../pages/ProjectsPage'

export function render() {
  return renderToStaticMarkup(<ProjectsPage />)
}
