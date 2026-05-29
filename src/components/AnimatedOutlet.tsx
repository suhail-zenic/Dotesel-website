import { Outlet, useLocation } from 'react-router-dom'

export function AnimatedOutlet() {
  const { pathname } = useLocation()

  return (
    <div key={pathname} className="page-enter relative z-[1]">
      <Outlet />
    </div>
  )
}
