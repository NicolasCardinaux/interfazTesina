import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from '../components/AppLayout';
import { KPICard } from '../components/KPICard';
import {
  DownloadIcon,
  DollarSignIcon,
  AlertTriangleIcon,
  ActivityIcon,
  TrendingDownIcon,
  BrainIcon,
  InfoIcon
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  PieChart,
  Pie,
  Cell } from
'recharts';

const chartData = [
{ name: 'May', ingresos: 950, costos: 420 },
{ name: 'Jun', ingresos: 1020, costos: 450 },
{ name: 'Jul', ingresos: 1100, costos: 480 },
{ name: 'Ago', ingresos: 1050, costos: 460 },
{ name: 'Sep', ingresos: 1150, costos: 490 },
{ name: 'Oct', ingresos: 1200, costos: 510 }
];

const pieData = [
{ name: 'Materia Prima', value: 45, color: '#1976D2' },
{ name: 'RRHH', value: 30, color: '#64748B' },
{ name: 'Energía', value: 25, color: '#F59E0B' }
];

const tableData = [
{ sku: 'PRD-001', name: 'Tubo Extruido PVC 110mm', margin: '32%', units: '12,450' },
{ sku: 'PRD-042', name: 'Codo Inyección 90°', margin: '28%', units: '8,320' },
{ sku: 'PRD-105', name: 'Lámina Acrílica 3mm', margin: '25%', units: '5,100' },
{ sku: 'PRD-088', name: 'Perfil Aluminio Estructural', margin: '22%', units: '4,800' },
{ sku: 'PRD-210', name: 'Malla Ciclónica Galv.', margin: '19%', units: '3,200' }
];

export function DashboardPage() {
  const navigate = useNavigate();

  return (
    <AppLayout breadcrumb="Inicio / Dashboard General" showChat={true}>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-textMain">
            Resumen Operativo y Financiero - Octubre 2026
          </h1>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-slate-300 text-textMain px-4 py-2 rounded-md hover:bg-slate-50 transition-colors text-sm font-medium shadow-sm">
              <DownloadIcon className="w-4 h-4" />
              Descargar (PDF)
            </button>
            <button 
              onClick={() => navigate('/reportes')}
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-colors text-sm font-medium shadow-sm"
            >
              <BrainIcon className="w-4 h-4" />
              Generar reporte desde IA
            </button>
          </div>
        </div>

        {/* Row 1: KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative group">
            <KPICard
              title="Ingresos Totales"
              value="$1.2M"
              trend={{ value: '5%', isPositive: true }}
              icon={<DollarSignIcon className="w-5 h-5" />} 
            />
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 flex items-center gap-1.5 shadow-lg">
              <InfoIcon className="w-3 h-3" />
              Ingresos brutos acumulados del mes actual
            </div>
          </div>
          
          <div className="relative group">
            <KPICard
              title="Costo de Mermas"
              value="$150k"
              trend={{ value: '2%', isPositive: true }}
              icon={<TrendingDownIcon className="w-5 h-5" />} 
            />
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 flex items-center gap-1.5 shadow-lg">
              <InfoIcon className="w-3 h-3" />
              Valorización de materiales descartados
            </div>
          </div>
          
          <div className="relative group">
            <KPICard
              title="OEE General"
              value="82%"
              trend={{ value: '1%', isPositive: true }}
              icon={<ActivityIcon className="w-5 h-5" />} 
            />
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 flex items-center gap-1.5 shadow-lg">
              <InfoIcon className="w-3 h-3" />
              Eficiencia General de los Equipos (Disponibilidad x Rendimiento x Calidad)
            </div>
          </div>
          
          <div 
            onClick={() => navigate('/alertas')} 
            className="cursor-pointer transition-transform hover:-translate-y-1 relative group"
          >
            <KPICard
              title="Alertas Activas"
              value="3"
              badge={{ value: 'Crítico', color: 'red' }}
              icon={<AlertTriangleIcon className="w-5 h-5" />} 
            />
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 flex items-center gap-1.5 shadow-lg">
              <InfoIcon className="w-3 h-3" />
              Clic para ir al Centro de Alertas
            </div>
          </div>
        </div>

        {/* Row 2: Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 bg-surface p-5 rounded-lg shadow-card border border-slate-100 relative group">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-textMain">
                Evolución Ingresos vs Costos (Miles USD)
              </h3>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={chartData}
                  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} cursor={{ fill: '#F8FAFC' }} />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar dataKey="costos" name="Costos Operativos" fill="#EF4444" radius={[4, 4, 0, 0]} maxBarSize={40} />
                  <Line type="monotone" dataKey="ingresos" name="Ingresos" stroke="#1976D2" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-2 bg-surface p-5 rounded-lg shadow-card border border-slate-100 flex flex-col relative group">
            <h3 className="text-lg font-semibold text-textMain mb-2">
              Distribución de Costos
            </h3>
            <div className="flex-1 min-h-[250px] relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none">
                    {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                <span className="text-3xl font-bold text-textMain">Oct</span>
                <span className="text-xs text-textMuted uppercase tracking-wider">
                  2026
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-2 flex-wrap">
              {pieData.map((item, i) =>
              <div key={i} className="flex items-center gap-1.5 text-sm text-textMuted">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  {item.name} ({item.value}%)
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Row 3: Table */}
        <div className="bg-surface rounded-lg shadow-card border border-slate-100 overflow-hidden">
          <div className="p-5 border-b border-slate-100">
            <h3 className="text-lg font-semibold text-textMain">
              Top 5 Productos más rentables
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-textMuted font-medium border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3">SKU</th>
                  <th className="px-6 py-3">Nombre del Producto</th>
                  <th className="px-6 py-3">Margen</th>
                  <th className="px-6 py-3">Unidades Vendidas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tableData.map((row, i) =>
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-3.5 font-medium text-textMain">
                      {row.sku}
                    </td>
                    <td className="px-6 py-3.5 text-textMuted">{row.name}</td>
                    <td className="px-6 py-3.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-success-bg text-success">
                        {row.margin}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-textMuted">{row.units}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}