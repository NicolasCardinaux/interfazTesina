import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './contexts/ProtectedRoute';

// Existing Pages
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegistroPage } from './pages/RegistroPage';
import { DashboardPage } from './pages/DashboardPage';
import { IngestaPage } from './pages/IngestaPage';
import { ValidacionPage } from './pages/ValidacionPage';
import { OperacionesPage } from './pages/OperacionesPage';
import { FinanzasPage } from './pages/FinanzasPage';
import { ConfigIAPage } from './pages/ConfigIAPage';
import { ParametrosPage } from './pages/ParametrosPage';
import { GestionUsuariosPage } from './pages/GestionUsuariosPage';

// New Pages
import { AlertasPage } from './pages/AlertasPage';
import { ReportesPage } from './pages/ReportesPage';
import { ChatIAPage } from './pages/ChatIAPage';
import { GestionArchivosPage } from './pages/GestionArchivosPage';
import { PerfilPage } from './pages/PerfilPage';
import { HistorialLogsPage } from './pages/HistorialLogsPage';

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegistroPage />} />
          
          {/* Rutas accesibles por Gerente y Operario */}
          <Route path="/dashboard" element={
            <ProtectedRoute allowedRoles={['gerente', 'operario']}>
              <DashboardPage />
            </ProtectedRoute>
          } />
          <Route path="/operaciones" element={
            <ProtectedRoute allowedRoles={['gerente', 'operario']}>
              <OperacionesPage />
            </ProtectedRoute>
          } />
          <Route path="/perfil" element={
            <ProtectedRoute allowedRoles={['gerente', 'operario']}>
              <PerfilPage />
            </ProtectedRoute>
          } />

          {/* Rutas accesibles SOLO por Gerente */}
          <Route path="/alertas" element={
            <ProtectedRoute allowedRoles={['gerente']}>
              <AlertasPage />
            </ProtectedRoute>
          } />
          <Route path="/ingesta" element={
            <ProtectedRoute allowedRoles={['gerente']}>
              <IngestaPage />
            </ProtectedRoute>
          } />
          <Route path="/validacion" element={
            <ProtectedRoute allowedRoles={['gerente']}>
              <ValidacionPage />
            </ProtectedRoute>
          } />
          <Route path="/finanzas" element={
            <ProtectedRoute allowedRoles={['gerente']}>
              <FinanzasPage />
            </ProtectedRoute>
          } />
          <Route path="/reportes" element={
            <ProtectedRoute allowedRoles={['gerente']}>
              <ReportesPage />
            </ProtectedRoute>
          } />
          <Route path="/chat-ia" element={
            <ProtectedRoute allowedRoles={['gerente']}>
              <ChatIAPage />
            </ProtectedRoute>
          } />
          <Route path="/archivos" element={
            <ProtectedRoute allowedRoles={['gerente']}>
              <GestionArchivosPage />
            </ProtectedRoute>
          } />
          <Route path="/config-ia" element={
            <ProtectedRoute allowedRoles={['gerente']}>
              <ConfigIAPage />
            </ProtectedRoute>
          } />
          <Route path="/parametros" element={
            <ProtectedRoute allowedRoles={['gerente']}>
              <ParametrosPage />
            </ProtectedRoute>
          } />
          <Route path="/gestion-usuarios" element={
            <ProtectedRoute allowedRoles={['gerente']}>
              <GestionUsuariosPage />
            </ProtectedRoute>
          } />
          <Route path="/logs" element={
            <ProtectedRoute allowedRoles={['gerente']}>
              <HistorialLogsPage />
            </ProtectedRoute>
          } />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}