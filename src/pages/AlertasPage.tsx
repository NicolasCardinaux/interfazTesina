import React from 'react';
import { AppLayout } from '../components/AppLayout';
import { AlertTriangleIcon, InfoIcon, SettingsIcon, CheckIcon, ArrowRightIcon, BellIcon, ClockIcon } from 'lucide-react';

export function AlertasPage() {
  return (
    <AppLayout breadcrumb="Alertas y Monitoreo">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-textMain">Centro de Alertas y Monitoreo en Tiempo Real</h1>
            <span className="bg-danger/10 text-danger text-sm font-semibold px-3 py-1 rounded-full border border-danger/20 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-danger animate-pulse"></span>
              3 Alertas Críticas Activas
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-textMain rounded-md text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
              <CheckIcon className="w-4 h-4 text-slate-400" />
              Marcar todo como leído
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary-hover transition-colors shadow-sm">
              <SettingsIcon className="w-4 h-4" />
              Configurar reglas
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tarjetas de Alerta Activas (Grid 2x2 styled inside a col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold text-textMain flex items-center gap-2">
              <BellIcon className="w-5 h-5 text-textMuted" />
              Alertas Recientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Tarjeta 1 - Crítica */}
              <div className="bg-white border-l-4 border-danger rounded-lg p-5 shadow-card hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <AlertTriangleIcon className="w-24 h-24 text-danger" />
                </div>
                <div className="flex items-start justify-between mb-3 relative z-10">
                  <div className="flex items-center gap-2 text-danger font-semibold text-sm">
                    <AlertTriangleIcon className="w-4 h-4" />
                    Crítico
                  </div>
                  <span className="text-xs text-textMuted bg-slate-100 px-2 py-1 rounded">Hace 2 min</span>
                </div>
                <h3 className="text-lg font-bold text-textMain mb-1">Merma Excesiva</h3>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-2xl font-bold text-danger">6.2%</span>
                  <span className="text-sm text-textMuted mb-1">Supera umbral (5.0%)</span>
                </div>
                <p className="text-sm text-textMuted mb-4">Se ha detectado un aumento anómalo en la máquina 2 de la línea de ensamblaje.</p>
                <button className="text-sm font-medium text-danger hover:text-danger/80 flex items-center gap-1 group">
                  Ver detalle completo <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Tarjeta 2 - Advertencia */}
              <div className="bg-white border-l-4 border-warning rounded-lg p-5 shadow-card hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 text-warning font-semibold text-sm">
                    <AlertTriangleIcon className="w-4 h-4" />
                    Advertencia
                  </div>
                  <span className="text-xs text-textMuted bg-slate-100 px-2 py-1 rounded">Hace 15 min</span>
                </div>
                <h3 className="text-lg font-bold text-textMain mb-1">Datos Incompletos</h3>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-sm text-textMuted mb-1">Faltan registros de producción del turno mañana.</span>
                </div>
                <p className="text-sm text-textMuted mb-4">Posible fallo en el sensor de ingesta de la zona B.</p>
                <button className="text-sm font-medium text-warning hover:text-warning/80 flex items-center gap-1 group">
                  Ir a ingesta <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Tarjeta 3 - Info */}
              <div className="bg-white border-l-4 border-primary rounded-lg p-5 shadow-card hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <InfoIcon className="w-4 h-4" />
                    Informativo
                  </div>
                  <span className="text-xs text-textMuted bg-slate-100 px-2 py-1 rounded">Hace 1 hora</span>
                </div>
                <h3 className="text-lg font-bold text-textMain mb-1">Nuevo informe IA</h3>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-sm text-textMuted mb-1">El modelo RAG ha generado un resumen de costos.</span>
                </div>
                <p className="text-sm text-textMuted mb-4">Disponible en la sección de reportes financieros.</p>
                <button className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 group">
                  Ver reporte <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>

          {/* Timeline Vertical */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-textMain flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-textMuted" />
              Historial de Eventos
            </h2>
            <div className="bg-white rounded-lg shadow-card p-5 border border-slate-100 h-[calc(100%-2.5rem)]">
              <div className="relative border-l border-slate-200 ml-3 space-y-8 py-2">
                
                {/* Event 1 */}
                <div className="relative pl-6">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-danger rounded-full ring-4 ring-white"></div>
                  <div className="text-xs text-textMuted mb-1">10:45 AM - Hoy</div>
                  <div className="font-semibold text-sm text-textMain">Pico de consumo eléctrico</div>
                  <div className="text-xs text-textMuted mt-1 mb-2">Se registró un sobreconsumo del 15% en el sector 4.</div>
                  <button className="text-xs font-medium text-primary hover:underline">Auditar sector</button>
                </div>

                {/* Event 2 */}
                <div className="relative pl-6">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-success rounded-full ring-4 ring-white"></div>
                  <div className="text-xs text-textMuted mb-1">09:30 AM - Hoy</div>
                  <div className="font-semibold text-sm text-textMain">Validación completada</div>
                  <div className="text-xs text-textMuted mt-1 mb-2">Lote de datos L-9883 validado correctamente por IA.</div>
                  <button className="text-xs font-medium text-primary hover:underline">Ver lote</button>
                </div>

                {/* Event 3 */}
                <div className="relative pl-6">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-slate-300 rounded-full ring-4 ring-white"></div>
                  <div className="text-xs text-textMuted mb-1">Ayer, 18:20 PM</div>
                  <div className="font-semibold text-sm text-textMain">Actualización de parámetros</div>
                  <div className="text-xs text-textMuted mt-1">El usuario admin modificó los umbrales de tolerancia de merma.</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
