import React from 'react';
import { AppLayout } from '../components/AppLayout';
import { KPICard } from '../components/KPICard';
import {
  DollarSignIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  PieChartIcon
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer 
} from 'recharts';

// Waterfall data simulation using stacked bars
const waterfallData = [
  { name: 'May', transparent: 0, fijos: 300, variables: 400, mermas: 50, margen: 200 },
  { name: 'Jun', transparent: 0, fijos: 300, variables: 420, mermas: 60, margen: 240 },
  { name: 'Jul', transparent: 0, fijos: 300, variables: 450, mermas: 40, margen: 310 },
  { name: 'Ago', transparent: 0, fijos: 300, variables: 430, mermas: 70, margen: 250 },
  { name: 'Sep', transparent: 0, fijos: 300, variables: 460, mermas: 55, margen: 335 },
  { name: 'Oct', transparent: 0, fijos: 300, variables: 480, mermas: 80, margen: 340 }
];

export function FinanzasPage() {
  return (
    <AppLayout breadcrumb="Inicio / Finanzas" showChat={false}>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
        <h1 className="text-2xl font-bold text-textMain">
          Análisis de Rentabilidad y Costos
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 bg-surface p-4 rounded-lg shadow-sm border border-slate-200">
          <select className="bg-slate-50 border border-slate-300 text-sm rounded-md px-3 py-2 outline-none focus:border-primary transition-colors cursor-pointer hover:bg-white">
            <option>Últimos 6 meses</option>
            <option>Este año</option>
            <option>Año pasado</option>
          </select>
          <select className="bg-slate-50 border border-slate-300 text-sm rounded-md px-3 py-2 outline-none focus:border-primary transition-colors cursor-pointer hover:bg-white">
            <option>Todas las Plantas</option>
            <option>Planta Norte</option>
            <option>Planta Sur</option>
          </select>
        </div>

        {/* KPIs Comparación Mensual */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard
            title="Ingresos Brutos"
            value="$1,200k"
            trend={{ value: '4.3%', isPositive: true }}
            icon={<DollarSignIcon className="w-5 h-5" />} 
          />
          <KPICard
            title="Margen Neto"
            value="$340k"
            trend={{ value: '1.5%', isPositive: true }}
            icon={<TrendingUpIcon className="w-5 h-5" />} 
          />
          <KPICard
            title="Costos Operativos"
            value="$780k"
            trend={{ value: '4.3%', isPositive: false }}
            icon={<TrendingDownIcon className="w-5 h-5" />} 
          />
          <KPICard
            title="Pérdida por Mermas"
            value="$80k"
            trend={{ value: '45.4%', isPositive: false }}
            icon={<PieChartIcon className="w-5 h-5" />} 
          />
        </div>

        {/* Waterfall Chart */}
        <div className="bg-surface p-6 rounded-lg shadow-card border border-slate-100">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-textMain">
              Composición de Ingresos y Márgenes (Miles USD)
            </h3>
            <p className="text-sm text-textMuted">
              Visualización de cómo los costos fijos, variables y mermas reducen el ingreso total hasta el margen neto.
            </p>
          </div>

          <div className="h-[500px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={waterfallData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} cursor={{ fill: '#F8FAFC' }} />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />

                <Bar dataKey="transparent" stackId="a" fill="transparent" />
                <Bar dataKey="margen" name="Margen Neto" stackId="a" fill="#10B981" radius={[0, 0, 4, 4]} />
                <Bar dataKey="mermas" name="Mermas Operativas" stackId="a" fill="#EF4444" />
                <Bar dataKey="variables" name="Costos Variables" stackId="a" fill="#F59E0B" />
                <Bar dataKey="fijos" name="Costos Fijos" stackId="a" fill="#1976D2" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}