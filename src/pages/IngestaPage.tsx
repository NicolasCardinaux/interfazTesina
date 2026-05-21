import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from '../components/AppLayout';
import {
  UploadCloudIcon,
  FileSpreadsheetIcon,
  CheckCircle2Icon,
  FolderOpenIcon,
  AlertCircleIcon,
  RefreshCwIcon
} from 'lucide-react';

export function IngestaPage() {
  const navigate = useNavigate();

  return (
    <AppLayout breadcrumb="Inicio / Ingesta de Datos" showChat={false}>
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-textMain mb-2">
              Carga de Datos al Sistema
            </h1>
            <p className="text-textMuted">
              Suba sus archivos operativos o financieros. El sistema los clasificará automáticamente.
            </p>
          </div>
          <button 
            onClick={() => navigate('/gestion-archivos')}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 text-textMain rounded-md text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm"
          >
            <FolderOpenIcon className="w-4 h-4 text-primary" />
            Gestión de Archivos
          </button>
        </div>

        {/* Dropzone */}
        <div className="border-2 border-dashed border-slate-300 bg-slate-50 rounded-xl p-12 flex flex-col items-center justify-center text-center hover:bg-slate-100 hover:border-primary/50 transition-all cursor-pointer group">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <UploadCloudIcon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-textMain mb-1">
            Arrastre sus archivos Excel o CSV aquí
          </h3>
          <p className="text-sm text-textMuted mb-6 max-w-md">
            El sistema enrutará automáticamente a Operaciones o Finanzas dependiendo de la estructura detectada.
          </p>
          <button className="bg-white border border-slate-300 text-textMain font-medium px-6 py-2.5 rounded-md hover:bg-slate-50 shadow-sm transition-colors">
            Explorar archivos
          </button>
        </div>

        {/* Processed Files */}
        <div>
          <h3 className="text-lg font-semibold text-textMain mb-4 flex items-center justify-between">
            <span>Archivos Procesados Hoy</span>
            <span className="text-xs font-normal text-textMuted bg-slate-100 px-2.5 py-1 rounded-full">3 archivos</span>
          </h3>

          <div className="space-y-4">
            {/* File 1 - Success */}
            <div className="bg-surface border border-slate-200 rounded-lg p-4 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 bg-success-bg rounded-lg flex items-center justify-center shrink-0">
                <FileSpreadsheetIcon className="w-6 h-6 text-success" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium text-textMain truncate">
                    reporte_costos_Q3.xlsx
                  </h4>
                  <span className="text-xs font-semibold text-success flex items-center gap-1 bg-success-bg px-2 py-0.5 rounded-full">
                    <CheckCircle2Icon className="w-3.5 h-3.5" /> 100% Completo
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2">
                  <div className="bg-success h-1.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-xs text-textMuted">
                  Clasificado como: <span className="font-medium text-slate-700">Plantilla Financiera (Template Match: 95%)</span>
                </p>
              </div>
            </div>

            {/* File 2 - Processing */}
            <div className="bg-surface border border-slate-200 rounded-lg p-4 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center shrink-0">
                <RefreshCwIcon className="w-5 h-5 text-warning animate-spin" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium text-textMain truncate">
                    produccion_lote_99.csv
                  </h4>
                  <span className="text-xs font-semibold text-warning flex items-center gap-1 bg-warning/10 px-2 py-0.5 rounded-full">
                    Procesando 45%
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2">
                  <div className="bg-warning h-1.5 rounded-full transition-all duration-500" style={{ width: '45%' }}></div>
                </div>
                <p className="text-xs text-textMuted">
                  Analizando estructura y mapeando columnas...
                </p>
              </div>
            </div>

            {/* File 3 - Error */}
            <div className="bg-surface border border-slate-200 rounded-lg p-4 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 bg-danger-bg rounded-lg flex items-center justify-center shrink-0">
                <AlertCircleIcon className="w-6 h-6 text-danger" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium text-textMain truncate">
                    nomina_septiembre_corrupto.xlsx
                  </h4>
                  <span className="text-xs font-semibold text-danger flex items-center gap-1 bg-danger-bg px-2 py-0.5 rounded-full">
                    <AlertCircleIcon className="w-3.5 h-3.5" /> Error
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2">
                  <div className="bg-danger h-1.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-xs text-danger">
                  Error de formato: Falta columna obligatoria "Salario_Bruto".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}