import Headers from './components/Headers/Headers'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Headers />
      <Outlet />
    </>
  )
}
