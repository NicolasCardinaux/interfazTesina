import React, { useState } from 'react';
import { AppLayout } from '../components/AppLayout';
import {
  SearchIcon,
  PlusIcon,
  PencilIcon,
  Trash2Icon,
  ChevronDownIcon
} from 'lucide-react';

interface UserRow {
  id: number;
  name: string;
  email: string;
  role: 'Gerente' | 'Operario' | 'Analista IT';
  modules: string;
  active: boolean;
}

const usersData: UserRow[] = [
{ id: 1, name: 'Carlos Gómez', email: 'cgomez@planta.com', role: 'Gerente', modules: 'Todo el sistema (Lectura/Escritura)', active: true },
{ id: 2, name: 'María López', email: 'mlopez@planta.com', role: 'Operario', modules: 'Solo Ingesta y Operaciones', active: true },
{ id: 3, name: 'Nicolás Cardinaux', email: 'ncardinaux@planta.com', role: 'Gerente', modules: 'Todo el sistema (Lectura/Escritura)', active: true },
{ id: 4, name: 'Laura Fernández', email: 'lfernandez@planta.com', role: 'Analista IT', modules: 'Configuración IA, Parámetros, Ingesta', active: true },
{ id: 5, name: 'Pedro Ramírez', email: 'pramirez@planta.com', role: 'Operario', modules: 'Solo Ingesta y Operaciones', active: false },
{ id: 6, name: 'Ana Martínez', email: 'amartinez@planta.com', role: 'Operario', modules: 'Solo Ingesta y Operaciones', active: true }
];

const roleBadgeStyles: Record<string, string> = {
  Gerente: 'bg-primary/10 text-primary',
  Operario: 'bg-slate-100 text-slate-600',
  'Analista IT': 'bg-purple-100 text-purple-700'
};

export function GestionUsuariosPage() {
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('Todos');

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === 'Todos' || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const toggleActive = (id: number) => {
    setUsers(
      users.map((u) =>
      u.id === id ? { ...u, active: !u.active } : u
      )
    );
  };

  return (
    <AppLayout breadcrumb="Administración / Gestión de Usuarios y Roles" showChat={false}>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-textMain">
            Administración de Accesos y Roles
          </h1>
          <button className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-md font-medium transition-colors shadow-sm text-sm">
            <PlusIcon className="w-4 h-4" />
            Nuevo Usuario
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1 max-w-md">
            <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nombre o email..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" 
            />
          </div>
          <div className="relative">
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="appearance-none bg-white border border-slate-300 rounded-lg pl-4 pr-10 py-2.5 text-sm text-textMain focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer">
              <option value="Todos">Todos los roles</option>
              <option value="Gerente">Gerencia</option>
              <option value="Operario">Operario</option>
              <option value="Analista IT">Analista IT</option>
            </select>
            <ChevronDownIcon className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-textMuted pointer-events-none" />
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-surface border border-slate-200 rounded-lg shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3.5 font-semibold text-textMuted text-xs uppercase tracking-wider">Usuario</th>
                  <th className="px-6 py-3.5 font-semibold text-textMuted text-xs uppercase tracking-wider">Correo</th>
                  <th className="px-6 py-3.5 font-semibold text-textMuted text-xs uppercase tracking-wider">Rol Asignado</th>
                  <th className="px-6 py-3.5 font-semibold text-textMuted text-xs uppercase tracking-wider">Módulos Habilitados</th>
                  <th className="px-6 py-3.5 font-semibold text-textMuted text-xs uppercase tracking-wider text-center">Estado</th>
                  <th className="px-6 py-3.5 font-semibold text-textMuted text-xs uppercase tracking-wider text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredUsers.map((user) =>
                <tr key={user.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                          {user.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <span className="font-medium text-textMain">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-textMuted">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${roleBadgeStyles[user.role]}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-textMuted text-xs max-w-[240px]">
                      {user.modules}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <button
                          onClick={() => toggleActive(user.id)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${user.active ? 'bg-success' : 'bg-slate-300'}`}
                        >
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${user.active ? 'translate-x-6' : 'translate-x-1'}`} />
                        </button>
                        <span className={`text-[10px] font-bold uppercase ${user.active ? 'text-success' : 'text-slate-400'}`}>
                          {user.active ? 'Activo' : 'Inactivo'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-1">
                        <button className="p-2 text-textMuted hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Editar">
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-textMuted hover:text-danger hover:bg-danger-bg rounded-lg transition-colors" title="Eliminar">
                          <Trash2Icon className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-sm text-textMuted">
            <span>
              Mostrando {filteredUsers.length} de {users.length} usuarios
            </span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border border-slate-300 rounded-md hover:bg-white transition-colors text-xs font-medium">Anterior</button>
              <span className="px-3 py-1 bg-primary text-white rounded-md text-xs font-medium">1</span>
              <button className="px-3 py-1 border border-slate-300 rounded-md hover:bg-white transition-colors text-xs font-medium">Siguiente</button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}