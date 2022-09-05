import { Route, Navigate, Outlet } from 'react-router-dom'
import { useUser } from "../context/UserContext";

function ProtectedRouteForAuth() {
  const { isLoggedIn } = useUser();

  return (
    !isLoggedIn ? <Outlet /> : <Navigate to="/" />
  )
}

export default ProtectedRouteForAuth;