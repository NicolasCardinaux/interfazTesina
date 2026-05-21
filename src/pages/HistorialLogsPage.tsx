import React, { useState } from 'react';
import { AppLayout } from '../components/AppLayout';
import { ListIcon, SearchIcon, FilterIcon, DownloadIcon } from 'lucide-react';

export function HistorialLogsPage() {
  const [logs] = useState([
    { id: 1, timestamp: '2023-10-25 14:32:01', user: 'ncardinaux', action: 'Login Exitoso', module: 'Auth', result: 'Success' },
    { id: 2, timestamp: '2023-10-25 14:35:12', user: 'ncardinaux', action: 'Subida de archivo (fact_costos_q3.csv)', module: 'Ingesta', result: 'Success' },
    { id: 3, timestamp: '2023-10-25 14:36:05', user: 'Sistema IA', action: 'Validación de estructura', module: 'Auditoría', result: 'Warning' },
    { id: 4, timestamp: '2023-10-25 14:40:22', user: 'admin', action: 'Cambio de parámetro (Umbral Merma -> 5.0)', module: 'Parámetros', result: 'Success' },
    { id: 5, timestamp: '2023-10-25 15:10:00', user: 'agomez', action: 'Intento de acceso no autorizado', module: 'Finanzas', result: 'Error' },
    { id: 6, timestamp: '2023-10-25 15:15:33', user: 'ncardinaux', action: 'Consulta al asistente', module: 'Chat IA', result: 'Success' },
    { id: 7, timestamp: '2023-10-25 16:01:45', user: 'Sistema API', action: 'Sincronización fallida', module: 'Integración ERP', result: 'Error' },
  ]);

  const getResultBadge = (result: string) => {
    switch (result) {
      case 'Success':
        return <span className="bg-success-bg text-success text-xs font-semibold px-2 py-0.5 rounded-full">Exitoso</span>;
      case 'Warning':
        return <span className="bg-warning/10 text-warning text-xs font-semibold px-2 py-0.5 rounded-full">Advertencia</span>;
      case 'Error':
        return <span className="bg-danger-bg text-danger text-xs font-semibold px-2 py-0.5 rounded-full">Fallido</span>;
      default:
        return <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-0.5 rounded-full">{result}</span>;
    }
  };

  return (
    <AppLayout breadcrumb="Historial de Logs">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <ListIcon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-textMain">Auditoría Global de Eventos</h1>
              <p className="text-sm text-textMuted">Registro inmutable de todas las acciones en el sistema.</p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 bg-white text-textMain rounded-md text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
            <DownloadIcon className="w-4 h-4" />
            Exportar CSV
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 items-center bg-white p-4 rounded-lg shadow-card border border-slate-100">
          <div className="relative w-full md:w-64">
            <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" />
            <input 
              type="text" 
              placeholder="Buscar por usuario o acción..." 
              className="w-full text-sm border border-slate-200 rounded-md pl-9 pr-3 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <select className="text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-textMain">
            <option value="todos">Todos los módulos</option>
            <option value="auth">Auth</option>
            <option value="ingesta">Ingesta</option>
            <option value="parametros">Parámetros</option>
          </select>
          <select className="text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-textMain">
            <option value="todos">Cualquier resultado</option>
            <option value="success">Exitosos</option>
            <option value="error">Fallidos</option>
          </select>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow-card border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs text-textMuted uppercase tracking-wider">
                  <th className="px-6 py-4 font-medium whitespace-nowrap">Timestamp</th>
                  <th className="px-6 py-4 font-medium">Usuario</th>
                  <th className="px-6 py-4 font-medium">Acción Realizada</th>
                  <th className="px-6 py-4 font-medium">Módulo Afectado</th>
                  <th className="px-6 py-4 font-medium">Resultado Final</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50 transition-colors font-mono">
                    <td className="px-6 py-3 text-textMuted whitespace-nowrap">{log.timestamp}</td>
                    <td className="px-6 py-3 font-semibold text-textMain">{log.user}</td>
                    <td className="px-6 py-3 text-textMain">{log.action}</td>
                    <td className="px-6 py-3">
                      <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-sans">{log.module}</span>
                    </td>
                    <td className="px-6 py-3 font-sans">
                      {getResultBadge(log.result)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination (Mocked) */}
          <div className="border-t border-slate-100 px-6 py-3 flex items-center justify-between text-sm text-textMuted bg-slate-50/50">
            <span>Mostrando 1 a 7 de 248 registros</span>
            <div className="flex items-center gap-1">
              <button className="px-3 py-1 border border-slate-200 rounded text-slate-400 bg-slate-50 cursor-not-allowed">Anterior</button>
              <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50 text-textMain transition-colors">Siguiente</button>
            </div>
          </div>
        </div>

      </div>
    </AppLayout>
  );
}
