import { Link, Outlet } from 'react-router-dom'
import { getAllIdeasRoute, getNewIdeaRoute } from '../../lib/routes.ts'
import css from './index.module.scss'

console.log(css)


export const Layout = () =>{
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>Ideanick</div>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link to={getAllIdeasRoute()} className={css.link}>All Ideas</Link>
          </li>
          <li className={css.item}>
            <Link to={getNewIdeaRoute()} className={css.link}>Add Idea</Link>
          </li>
        </ul>
      </div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  )
}