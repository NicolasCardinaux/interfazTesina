import React, { useState } from 'react';
import { AppLayout } from '../components/AppLayout';
import { AlertTriangleIcon, XIcon, CheckIcon, AlertCircleIcon } from 'lucide-react';

const tableData = [
{ id: 1, fecha: '2026-10-01', producto: 'PRD-001', cant: 1200, costo: '$4,500.00', extra: '{"lote": "A1"}' },
{ id: 2, fecha: '2026-10-01', producto: 'PRD-042', cant: 850, costo: '$2,100.00', extra: '{"lote": "A1"}' },
{ id: 3, fecha: '2026-10-02', producto: 'PRD-105', cant: 500, costo: '$1,800.00', extra: '{"lote": "B2"}' },
{ id: 4, fecha: '2026-10-02', producto: 'PRD-088', cant: 420, costo: null, extra: '{"lote": "B2", "obs": "revisar"}', isWarning: true },
{ id: 5, fecha: '2026-10-03', producto: 'PRD-210', cant: 300, costo: '$950.00', extra: '{"lote": "C1"}' },
{ id: 6, fecha: '2026-10-03', producto: 'PRD-001', cant: 1100, costo: '$4,100.00', extra: '{"lote": "C1"}' },
{ id: 7, fecha: '2026-10-04', producto: 'PRD-042', cant: 900, costo: '$2,250.00', extra: '{"lote": "C2"}' },
{ id: 8, fecha: '2026-10-04', producto: 'PRD-105', cant: 550, costo: '$1,980.00', extra: '{"lote": "C2"}', isWarning: true }
];

export function ValidacionPage() {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  
  const totalWarnings = tableData.filter(r => r.isWarning).length;
  const totalSuccess = tableData.length - totalWarnings;

  return (
    <AppLayout breadcrumb="Inicio / Auditoría de Ingesta" showChat={false}>
      <div className="flex flex-col h-full gap-6">
        <div className="flex items-center gap-4 shrink-0">
          <h1 className="text-2xl font-bold text-textMain">
            Auditoría de Ingesta
          </h1>
          <span className="bg-warning/20 text-warning px-3 py-1 rounded-full text-xs font-bold tracking-wide">
            ESTADO: BORRADOR
          </span>
        </div>

        {/* Data Table */}
        <div className="flex-1 bg-surface border border-slate-200 rounded-lg shadow-sm flex flex-col overflow-hidden min-h-[400px]">
          <div className="overflow-auto flex-1">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-100 text-textMuted font-semibold sticky top-0 z-10 shadow-sm">
                <tr>
                  <th className="px-4 py-3 w-10">
                    <input type="checkbox" className="rounded border-slate-300" defaultChecked />
                  </th>
                  <th className="px-4 py-3 border-l border-slate-200">Fecha</th>
                  <th className="px-4 py-3 border-l border-slate-200">Producto</th>
                  <th className="px-4 py-3 border-l border-slate-200">Cantidad_Producida</th>
                  <th className="px-4 py-3 border-l border-slate-200">Costo</th>
                  <th className="px-4 py-3 border-l border-slate-200 font-mono text-xs">Atributos Extra detectados (JSONB)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {tableData.map((row) =>
                <tr key={row.id} className="hover:bg-slate-50">
                    <td className="px-4 py-2.5">
                      <input type="checkbox" className="rounded border-slate-300" defaultChecked />
                    </td>
                    <td className="px-4 py-2.5 border-l border-slate-100 text-textMuted">{row.fecha}</td>
                    <td className="px-4 py-2.5 border-l border-slate-100 font-medium text-textMain">{row.producto}</td>
                    <td className="px-4 py-2.5 border-l border-slate-100 text-right">{row.cant}</td>
                    <td className={`px-4 py-2.5 border-l border-slate-100 text-right ${row.isWarning ? 'bg-warning/10' : ''}`}>
                      {row.isWarning ?
                        <div className="flex items-center justify-end gap-2 text-warning font-medium group relative cursor-help">
                          <AlertTriangleIcon className="w-4 h-4" />
                          <span>$0.00</span>
                          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-max max-w-xs bg-slate-800 text-white text-xs py-1.5 px-2.5 rounded shadow-lg z-20">
                            <strong>Warning (Pandas):</strong> Valor nulo detectado en columna numérica. Imputado a 0 automáticamente.
                          </div>
                        </div> :
                        row.costo
                      }
                    </td>
                    <td className="px-4 py-2.5 border-l border-slate-100 font-mono text-xs text-slate-500">{row.extra}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer Actions */}
          <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between shrink-0 flex-wrap gap-4">
            <div className="text-sm text-textMuted font-medium flex items-center gap-2">
              Se detectaron 
              <span className="text-success font-bold flex items-center gap-1"><CheckIcon className="w-4 h-4"/> {totalSuccess} correctas</span> 
              y 
              <span className="text-warning font-bold flex items-center gap-1"><AlertTriangleIcon className="w-4 h-4"/> {totalWarnings} advertencias</span>.
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-6 py-2.5 border-2 border-danger text-danger font-semibold rounded-md hover:bg-danger-bg transition-colors">
                <XIcon className="w-5 h-5" />
                Rechazar Lote
              </button>
              <button 
                onClick={() => setShowConfirmModal(true)}
                className="flex items-center gap-2 px-6 py-2.5 bg-success hover:bg-emerald-600 text-white font-semibold rounded-md shadow-sm transition-colors"
              >
                <CheckIcon className="w-5 h-5" />
                Validar y Mover a Producción Oficial
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Confirmación */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6">
              <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center mb-4">
                <CheckIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-textMain mb-2">¿Confirmar paso a producción?</h3>
              <p className="text-sm text-textMuted mb-4">
                Al confirmar, los datos de este lote modificarán los dashboards oficiales y reportes. Esta acción dejará un registro en la auditoría.
              </p>
              
              {totalWarnings > 0 && (
                <div className="bg-warning/10 border border-warning/20 rounded-md p-3 mb-6 flex gap-3 text-sm text-warning">
                  <AlertCircleIcon className="w-5 h-5 shrink-0" />
                  <p>Atención: Está aprobando <strong>{totalWarnings} advertencias</strong> no resueltas. El sistema asumirá los valores imputados.</p>
                </div>
              )}
              
            </div>
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button 
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-sm font-medium text-textMain hover:bg-slate-200 bg-slate-100 rounded-md transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-success hover:bg-emerald-600 rounded-md transition-colors shadow-sm"
              >
                Confirmar e Ingestar
              </button>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}