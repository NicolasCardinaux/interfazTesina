import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboardIcon,
  UploadCloudIcon,
  ShieldCheckIcon,
  FactoryIcon,
  DollarSignIcon,
  BrainIcon,
  SlidersHorizontalIcon,
  LogOutIcon,
  UsersIcon,
  BellIcon,
  FileTextIcon,
  FolderOpenIcon,
  ListIcon,
  MessageSquareIcon
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const principalItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboardIcon, roles: ['gerente', 'operario'] },
  { path: '/alertas', label: 'Alertas y Monitoreo', icon: BellIcon, roles: ['gerente'] },
  { path: '/operaciones', label: 'Operaciones', icon: FactoryIcon, roles: ['gerente', 'operario'] },
  { path: '/ingesta', label: 'Ingesta de Datos', icon: UploadCloudIcon, roles: ['gerente'] },
  { path: '/validacion', label: 'Auditoría', icon: ShieldCheckIcon, roles: ['gerente'] },
  { path: '/finanzas', label: 'Finanzas', icon: DollarSignIcon, roles: ['gerente'] },
  { path: '/reportes', label: 'Reportes', icon: FileTextIcon, roles: ['gerente'] },
  { path: '/archivos', label: 'Archivos', icon: FolderOpenIcon, roles: ['gerente'] },
];

const settingsItems = [
  { path: '/chat-ia', label: 'Chat IA', icon: MessageSquareIcon, roles: ['gerente'] },
  { path: '/config-ia', label: 'Configuración IA', icon: BrainIcon, roles: ['gerente'] },
  { path: '/parametros', label: 'Parámetros', icon: SlidersHorizontalIcon, roles: ['gerente'] },
  { path: '/gestion-usuarios', label: 'Gestión de Usuarios', icon: UsersIcon, roles: ['gerente'] },
  { path: '/logs', label: 'Historial de Logs', icon: ListIcon, roles: ['gerente'] },
];

export function Sidebar() {
  const { user, logout } = useAuth();
  const currentRole = user?.role || 'gerente'; // Default a gerente para mostrar todas las vistas

  const filteredPrincipal = principalItems.filter(item => item.roles.includes(currentRole));
  const filteredSettings = settingsItems.filter(item => item.roles.includes(currentRole));

  return (
    <aside className="w-[240px] bg-surface border-r border-slate-200 flex flex-col h-full shrink-0 z-20">
      <div className="h-16 flex items-center px-6 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2 text-primary font-bold text-xl">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <BrainIcon className="w-5 h-5 text-white" />
          </div>
          BizLens AI
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-1 px-3">
        <div className="text-xs font-semibold text-textMuted uppercase tracking-wider mb-2 px-3">
          Principal
        </div>
        {filteredPrincipal.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium mb-1.5
              ${isActive ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-textMuted hover:bg-slate-100 hover:text-textMain'}
            `}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}

        {filteredSettings.length > 0 && (
          <>
            <div className="mt-6 mb-4 px-3">
              <div className="h-px bg-slate-200 w-full"></div>
            </div>
            <div className="text-xs font-semibold text-textMuted uppercase tracking-wider mb-2 px-3">
              Administración e IA
            </div>
            {filteredSettings.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 text-sm font-medium mb-1.5
                  ${isActive ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-textMuted hover:bg-slate-100 hover:text-textMain'}
                `}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </NavLink>
            ))}
          </>
        )}
      </div>

      <div className="p-4 border-t border-slate-200 shrink-0">
        <NavLink
          to="/"
          onClick={() => logout()}
          className="flex items-center gap-3 px-3 py-2 rounded-md text-textMuted hover:bg-slate-50 hover:text-danger transition-colors text-sm font-medium"
        >
          <LogOutIcon className="w-5 h-5" />
          Cerrar Sesión
        </NavLink>
      </div>
    </aside>
  );
}