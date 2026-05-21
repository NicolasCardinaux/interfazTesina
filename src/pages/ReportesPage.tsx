import React, { useState } from 'react';
import { AppLayout } from '../components/AppLayout';
import { PlusIcon, FilterIcon, FileTextIcon, FileDownIcon, EyeIcon, SearchIcon } from 'lucide-react';

export function ReportesPage() {
  const [filterTipo, setFilterTipo] = useState('todos');

  return (
    <AppLayout breadcrumb="Reportes Empresariales">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-textMain">Centro de Reportes Empresariales</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary-hover transition-colors shadow-sm">
            <PlusIcon className="w-4 h-4" />
            Generar Nuevo Reporte
          </button>
        </div>

        {/* Controles y Filtros */}
        <div className="flex flex-wrap gap-4 items-center bg-white p-4 rounded-lg shadow-card border border-slate-100">
          <div className="flex items-center gap-2">
            <FilterIcon className="w-4 h-4 text-textMuted" />
            <span className="text-sm font-medium text-textMain">Filtros:</span>
          </div>
          
          <select 
            value={filterTipo}
            onChange={(e) => setFilterTipo(e.target.value)}
            className="text-sm border border-slate-200 rounded-md px-3 py-1.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          >
            <option value="todos">Todos los tipos</option>
            <option value="financiero">Financiero</option>
            <option value="operativo">Operativo</option>
            <option value="ia">Insights IA</option>
          </select>

          <input 
            type="date" 
            className="text-sm border border-slate-200 rounded-md px-3 py-1.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-textMuted"
          />

          <div className="relative ml-auto">
            <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" />
            <input 
              type="text" 
              placeholder="Buscar reporte..." 
              className="text-sm border border-slate-200 rounded-md pl-9 pr-3 py-1.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64"
            />
          </div>
        </div>

        {/* Tarjetas de Reportes Recientes */}
        <div>
          <h2 className="text-sm font-bold text-textMuted uppercase tracking-wider mb-3">Generados Recientemente</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg p-5 shadow-card border border-slate-100 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileTextIcon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-success bg-success-bg px-2 py-0.5 rounded">Completado</span>
                </div>
                <h3 className="text-sm font-bold text-textMain mb-1">
                  {item === 1 ? 'Reporte Financiero Mensual' : item === 2 ? 'Análisis de Merma Semanal' : 'Proyección de Costos IA'}
                </h3>
                <p className="text-xs text-textMuted mb-4">Generado hoy, 08:30 AM</p>
                <div className="mt-auto grid grid-cols-3 gap-2">
                  <button className="flex items-center justify-center gap-1 py-1.5 text-xs font-medium text-textMain border border-slate-200 rounded hover:bg-slate-50 transition-colors">
                    <EyeIcon className="w-3 h-3" /> Ver
                  </button>
                  <button className="flex items-center justify-center gap-1 py-1.5 text-xs font-medium text-danger border border-danger/20 rounded hover:bg-danger/5 transition-colors">
                    <FileDownIcon className="w-3 h-3" /> PDF
                  </button>
                  <button className="flex items-center justify-center gap-1 py-1.5 text-xs font-medium text-success border border-success/20 rounded hover:bg-success/5 transition-colors">
                    <FileDownIcon className="w-3 h-3" /> Excel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabla de Historial */}
        <div>
          <h2 className="text-sm font-bold text-textMuted uppercase tracking-wider mb-3 mt-6">Historial Completo</h2>
          <div className="bg-white rounded-lg shadow-card border border-slate-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs text-textMuted uppercase tracking-wider">
                  <th className="px-6 py-3 font-medium">Nombre del Reporte</th>
                  <th className="px-6 py-3 font-medium">Fecha de Creación</th>
                  <th className="px-6 py-3 font-medium">Usuario</th>
                  <th className="px-6 py-3 font-medium">Estado</th>
                  <th className="px-6 py-3 font-medium text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Cierre Operativo Q3', date: '25 Oct, 2023', user: 'Nicolás C.', status: 'Completado' },
                  { name: 'Auditoría Lote 992', date: '24 Oct, 2023', user: 'Ana G.', status: 'Completado' },
                  { name: 'Predicción Demanda', date: '24 Oct, 2023', user: 'Sistema IA', status: 'En Proceso' },
                  { name: 'Balance General', date: '20 Oct, 2023', user: 'Nicolás C.', status: 'Error' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-3 text-sm font-medium text-textMain flex items-center gap-2">
                      <FileTextIcon className="w-4 h-4 text-textMuted" />
                      {row.name}
                    </td>
                    <td className="px-6 py-3 text-sm text-textMuted">{row.date}</td>
                    <td className="px-6 py-3 text-sm text-textMuted flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">
                        {row.user.charAt(0)}
                      </div>
                      {row.user}
                    </td>
                    <td className="px-6 py-3">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        row.status === 'Completado' ? 'bg-success-bg text-success' : 
                        row.status === 'En Proceso' ? 'bg-warning/10 text-warning' : 
                        'bg-danger-bg text-danger'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-right">
                      <button className="text-primary hover:text-primary-hover text-sm font-medium transition-colors">
                        Descargar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AppLayout>
  );
}
