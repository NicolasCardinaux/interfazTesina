import React, { useState } from 'react';
import { AppLayout } from '../components/AppLayout';

const machines = ['Extrusora 01', 'Inyectora A', 'Inyectora B', 'Ensambladora', 'Empaquetadora'];
const hours = ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00'];

const ganttData = [
  [{ start: 0, width: 40, status: 'prod' }, { start: 40, width: 10, status: 'stop' }, { start: 50, width: 50, status: 'prod' }],
  [{ start: 0, width: 100, status: 'prod' }],
  [{ start: 0, width: 20, status: 'prod' }, { start: 20, width: 30, status: 'stop' }, { start: 50, width: 50, status: 'prod' }],
  [{ start: 0, width: 80, status: 'prod' }, { start: 80, width: 20, status: 'stop' }],
  [{ start: 0, width: 10, status: 'stop' }, { start: 10, width: 90, status: 'prod' }]
];

const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
const weeks = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];

const heatmapData = [
  [10, 15, 5, 20, 45, 80, 90],
  [12, 18, 8, 25, 50, 85, 95],
  [8, 10, 15, 30, 60, 75, 85],
  [15, 20, 10, 22, 55, 90, 100]
];

const getHeatmapColor = (value: number) => {
  const opacity = value / 100;
  return `rgba(239, 68, 68, ${opacity})`;
};

export function OperacionesPage() {
  const [hoveredGantt, setHoveredGantt] = useState<{ machine: string; block: any } | null>(null);
  const [hoveredHeatmap, setHoveredHeatmap] = useState<{ week: string; day: string; value: number } | null>(null);

  return (
    <AppLayout breadcrumb="Inicio / Operaciones" showChat={false}>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
        <h1 className="text-2xl font-bold text-textMain">
          Control de Piso de Planta y Mermas
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 bg-surface p-4 rounded-lg shadow-sm border border-slate-200">
          <select className="bg-slate-50 border border-slate-300 text-sm rounded-md px-3 py-2 outline-none focus:border-primary transition-colors cursor-pointer hover:bg-white">
            <option>Últimos 30 días</option>
            <option>Este mes</option>
            <option>Mes pasado</option>
          </select>
          <select className="bg-slate-50 border border-slate-300 text-sm rounded-md px-3 py-2 outline-none focus:border-primary transition-colors cursor-pointer hover:bg-white">
            <option>Todas las Máquinas</option>
            <option>Extrusoras</option>
            <option>Inyectoras</option>
          </select>
          <select className="bg-slate-50 border border-slate-300 text-sm rounded-md px-3 py-2 outline-none focus:border-primary transition-colors cursor-pointer hover:bg-white">
            <option>Turno Mañana</option>
            <option>Turno Tarde</option>
            <option>Turno Noche</option>
          </select>
        </div>

        {/* Gantt Chart */}
        <div className="bg-surface p-6 rounded-lg shadow-card border border-slate-100 relative">
          <h3 className="text-lg font-semibold text-textMain mb-6">
            Disponibilidad de Máquinas (Hoy)
          </h3>

          <div className="relative">
            {/* X-Axis (Hours) */}
            <div className="flex ml-32 mb-2 text-xs text-textMuted font-medium border-b border-slate-200 pb-2">
              {hours.map((h, i) => (
                <div key={i} className="flex-1 text-center">
                  {h}
                </div>
              ))}
            </div>

            {/* Rows */}
            <div className="space-y-4">
              {machines.map((machine, i) => (
                <div key={i} className="flex items-center group">
                  <div className="w-32 text-sm font-medium text-textMain shrink-0 group-hover:text-primary transition-colors">
                    {machine}
                  </div>
                  <div className="flex-1 h-8 bg-slate-100 rounded relative overflow-hidden ring-1 ring-slate-200 group-hover:ring-primary/30 transition-all">
                    {ganttData[i].map((block, j) => (
                      <div
                        key={j}
                        onMouseEnter={() => setHoveredGantt({ machine, block })}
                        onMouseLeave={() => setHoveredGantt(null)}
                        className={`absolute top-0 bottom-0 cursor-pointer transition-all hover:brightness-110 hover:z-10 ${
                          block.status === 'prod' ? 'bg-success' : 'bg-danger'
                        }`}
                        style={{
                          left: `${block.start}%`,
                          width: `${block.width}%`
                        }}
                      >
                        {/* Tooltip Gantt */}
                        {hoveredGantt?.machine === machine && hoveredGantt?.block === block && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-slate-800 text-white text-xs py-1.5 px-2.5 rounded shadow-xl z-50 pointer-events-none animate-in fade-in zoom-in duration-150">
                            <div className="font-bold mb-1">{machine}</div>
                            <div className="flex items-center gap-1.5">
                              <span className={`w-2 h-2 rounded-full ${block.status === 'prod' ? 'bg-success' : 'bg-danger'}`}></span>
                              {block.status === 'prod' ? 'Produciendo' : 'Máquina Parada'}
                            </div>
                            <div className="text-slate-300 mt-1">Representa el {block.width}% del tiempo</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6 mt-6 ml-32 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-success rounded-sm shadow-sm"></div>
                <span className="text-textMuted font-medium">Produciendo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-danger rounded-sm shadow-sm"></div>
                <span className="text-textMuted font-medium">Parada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Heatmap */}
        <div className="bg-surface p-6 rounded-lg shadow-card border border-slate-100">
          <h3 className="text-lg font-semibold text-textMain mb-6">
            Mapa de Calor: Porcentaje de Descarte de Materia Prima
          </h3>

          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Header */}
              <div className="flex ml-24 mb-2">
                {days.map((day, i) => (
                  <div key={i} className="flex-1 text-center text-sm font-medium text-textMuted">
                    {day}
                  </div>
                ))}
              </div>

              {/* Grid */}
              <div className="space-y-2">
                {weeks.map((week, i) => (
                  <div key={i} className="flex items-center group">
                    <div className="w-24 text-sm font-medium text-textMain shrink-0 group-hover:text-primary transition-colors">
                      {week}
                    </div>
                    <div className="flex-1 flex gap-2">
                      {heatmapData[i].map((val, j) => (
                        <div
                          key={j}
                          onMouseEnter={() => setHoveredHeatmap({ week, day: days[j], value: val })}
                          onMouseLeave={() => setHoveredHeatmap(null)}
                          className="flex-1 h-12 rounded flex items-center justify-center text-xs font-bold text-white shadow-sm transition-all hover:scale-[1.03] hover:ring-2 hover:ring-primary/50 cursor-crosshair relative"
                          style={{ backgroundColor: getHeatmapColor(val) }}
                        >
                          {val > 30 ? `${val}%` : ''}

                          {/* Tooltip Heatmap */}
                          {hoveredHeatmap?.week === week && hoveredHeatmap?.day === days[j] && (
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-slate-800 text-white text-xs py-1.5 px-3 rounded shadow-xl z-50 pointer-events-none animate-in fade-in zoom-in duration-150">
                              <div className="font-bold text-slate-200 mb-1">{week} - {days[j]}</div>
                              <div className="text-sm">Descarte: <span className={val > 50 ? 'text-danger font-bold' : 'text-white'}>{val}%</span></div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}