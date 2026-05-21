import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth, Role } from './AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: Role[];
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Si no está logueado, ir al login
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  if (!allowedRoles.includes(user.role)) {
    // Si no tiene el rol permitido, redirigir al dashboard u otra vista de error/acceso denegado
    // Como dice el req: "redirigir al Dashboard"
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
