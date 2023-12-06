import Headers from './components/Headers/Headers'
import Footers from './components/Footers/Footers'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footers />
    </>
  )
}
