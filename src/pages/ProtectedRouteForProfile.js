import { Route, Navigate, Outlet } from 'react-router-dom'
import { useUser } from "../context/UserContext";

function ProtectedRouteForProfile() {
  const { isLoggedIn } = useUser();

  return (
    isLoggedIn ? <Outlet /> : <Navigate to="/" />
  )
}

export default ProtectedRouteForProfile;