import React, { useState } from 'react';
import { AppLayout } from '../components/AppLayout';
import { SaveIcon, CheckIcon } from 'lucide-react';

export function ParametrosPage() {
  const [merma, setMerma] = useState(4);
  const [margen, setMargen] = useState(20);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <AppLayout breadcrumb="Administración / Parámetros" showChat={false}>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-textMain">
          Definición de Objetivos y Umbrales (KPIs)
        </h1>

        <div className="bg-surface rounded-lg shadow-card border border-slate-100 overflow-hidden">
          <div className="p-6 space-y-8">
            {/* Row 1 */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <div>
                  <label className="text-base font-semibold text-textMain block">
                    Límite de Mermas Tolerables
                  </label>
                  <p className="text-sm text-textMuted mt-1">
                    Alertar si el descarte de materia prima supera este porcentaje.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={merma}
                    onChange={(e) => setMerma(parseFloat(e.target.value))}
                    className="w-20 px-3 py-1.5 text-right border border-slate-300 rounded-md text-lg font-bold text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  <span className="text-lg font-bold text-slate-400">%</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                step="0.5"
                value={merma}
                onChange={(e) => setMerma(parseFloat(e.target.value))}
                className="w-full h-2 mt-4 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" 
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                <span>0%</span>
                <span>5%</span>
                <span>10%</span>
                <span>15%</span>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Row 2 */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <div>
                  <label className="text-base font-semibold text-textMain block">
                    Margen de Rentabilidad Objetivo
                  </label>
                  <p className="text-sm text-textMuted mt-1">
                    Objetivo mínimo de margen neto por producto.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={margen}
                    onChange={(e) => setMargen(parseInt(e.target.value))}
                    className="w-20 px-3 py-1.5 text-right border border-slate-300 rounded-md text-lg font-bold text-success focus:outline-none focus:border-success focus:ring-1 focus:ring-success"
                  />
                  <span className="text-lg font-bold text-slate-400">%</span>
                </div>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="1"
                value={margen}
                onChange={(e) => setMargen(parseInt(e.target.value))}
                className="w-full h-2 mt-4 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-success" 
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                <span>5%</span>
                <span>20%</span>
                <span>35%</span>
                <span>50%</span>
              </div>
            </div>

            <hr className="border-slate-100" />

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-base font-semibold text-textMain block mb-1">
                  Tiempo máximo de inactividad (Horas)
                </label>
                <p className="text-sm text-textMuted mb-3">
                  Alerta crítica si una máquina supera este tiempo inactiva.
                </p>
                <input
                  type="number"
                  defaultValue={2}
                  min={1}
                  max={24}
                  className="w-32 px-4 py-2 bg-slate-50 border border-slate-300 rounded-md text-base font-semibold text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                />
              </div>
              
              <div>
                <label className="text-base font-semibold text-textMain block mb-1">
                  Costo Estándar de Energía (USD/kWh)
                </label>
                <p className="text-sm text-textMuted mb-3">
                  Valor base para calcular desviaciones financieras.
                </p>
                <div className="relative w-32">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-semibold">$</span>
                  <input
                    type="number"
                    defaultValue={0.12}
                    step={0.01}
                    className="w-full pl-8 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-md text-base font-semibold text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-end items-center gap-4">
            {isSaved && (
              <span className="text-sm font-medium text-success flex items-center gap-1.5 animate-in fade-in">
                <CheckIcon className="w-4 h-4" />
                Reglas actualizadas
              </span>
            )}
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-md font-medium transition-colors shadow-sm"
            >
              <SaveIcon className="w-4 h-4" />
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}