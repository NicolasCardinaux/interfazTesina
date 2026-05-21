import React, { useState } from 'react';
import { AppLayout } from '../components/AppLayout';
import { UserIcon, MoonIcon, BellIcon, ShieldIcon, KeyIcon, SmartphoneIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function PerfilPage() {
  const { user } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [notifEnabled, setNotifEnabled] = useState(true);

  const initials = user?.name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase() || 'U';

  return (
    <AppLayout breadcrumb="Mi Perfil">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-textMain">Mi Perfil y Preferencias</h1>
          <p className="text-sm text-textMuted mt-1">Administre su información personal y configure su experiencia en BizLens AI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Left Column: Basic Info */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-card border border-slate-100 p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-primary/20 border-4 border-white shadow-sm flex items-center justify-center text-primary font-bold text-3xl mb-4">
                {initials}
              </div>
              <h2 className="text-xl font-bold text-textMain">{user?.name || 'Usuario'}</h2>
              <p className="text-sm text-textMuted capitalize mb-4">{user?.role || 'Operario'}</p>
              <button className="w-full py-2 bg-slate-100 text-textMain rounded-md text-sm font-medium hover:bg-slate-200 transition-colors">
                Cambiar Foto
              </button>
            </div>
          </div>

          {/* Right Column: Settings */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Datos Personales */}
            <div className="bg-white rounded-lg shadow-card border border-slate-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
                <UserIcon className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-textMain">Datos Personales</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-textMuted">Nombre Completo</label>
                    <input type="text" defaultValue={user?.name} className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-textMuted">Correo Electrónico</label>
                    <input type="email" defaultValue={`${user?.name?.split(' ')[0].toLowerCase() || 'usuario'}@empresa.com`} className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-textMuted">Teléfono</label>
                    <input type="tel" defaultValue="+54 9 11 1234-5678" className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-textMuted">Rol Asignado</label>
                    <input type="text" value={user?.role.toUpperCase()} disabled className="w-full bg-slate-100 border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-500 cursor-not-allowed font-semibold" />
                  </div>
                </div>
                <div className="pt-2 flex justify-end">
                  <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary-hover transition-colors shadow-sm">
                    Guardar Cambios
                  </button>
                </div>
              </div>
            </div>

            {/* Preferencias */}
            <div className="bg-white rounded-lg shadow-card border border-slate-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
                <SettingsIcon className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-textMain">Preferencias Visuales</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                      <MoonIcon className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-medium text-textMain text-sm">Modo Oscuro</p>
                      <p className="text-xs text-textMuted">Cambiar la interfaz a tonos oscuros.</p>
                    </div>
                  </div>
                  {/* Toggle */}
                  <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className={`w-11 h-6 rounded-full transition-colors relative ${darkMode ? 'bg-primary' : 'bg-slate-300'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-sm ${darkMode ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
                  </button>
                </div>

                <div className="h-px w-full bg-slate-100"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                      <BellIcon className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="font-medium text-textMain text-sm">Notificaciones Push</p>
                      <p className="text-xs text-textMuted">Recibir alertas críticas en el navegador.</p>
                    </div>
                  </div>
                  {/* Toggle */}
                  <button 
                    onClick={() => setNotifEnabled(!notifEnabled)}
                    className={`w-11 h-6 rounded-full transition-colors relative ${notifEnabled ? 'bg-primary' : 'bg-slate-300'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-sm ${notifEnabled ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Seguridad */}
            <div className="bg-white rounded-lg shadow-card border border-slate-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
                <ShieldIcon className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-textMain">Seguridad de la Cuenta</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-danger/10 flex items-center justify-center">
                      <KeyIcon className="w-5 h-5 text-danger" />
                    </div>
                    <div>
                      <p className="font-medium text-textMain text-sm">Contraseña</p>
                      <p className="text-xs text-textMuted">Última actualización: hace 3 meses</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-slate-200 text-textMain rounded-md text-sm font-medium hover:bg-slate-50 transition-colors">
                    Cambiar
                  </button>
                </div>

                <div className="h-px w-full bg-slate-100"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <SmartphoneIcon className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <p className="font-medium text-textMain text-sm">Autenticación en 2 Pasos (2FA)</p>
                      <p className="text-xs text-textMuted">Añade una capa extra de seguridad.</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-slate-100 text-primary rounded-md text-sm font-medium hover:bg-slate-200 transition-colors">
                    Habilitar
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </AppLayout>
  );
}
// Import fix for SettingsIcon
import { SettingsIcon } from 'lucide-react';
