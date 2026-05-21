import React from 'react';
import { motion } from 'framer-motion';
interface KPICardProps {
  title: string;
  value: string | number;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  badge?: {
    value: string | number;
    color: 'red' | 'green' | 'yellow';
  };
  icon?: React.ReactNode;
}
export function KPICard({ title, value, trend, badge, icon }: KPICardProps) {
  return (
    <motion.div
      whileHover={{
        y: -2
      }}
      className="bg-surface rounded-lg p-5 shadow-card border border-slate-100 flex flex-col justify-between">
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-textMuted font-semibold text-sm">{title}</h3>
        {icon && <div className="text-slate-400">{icon}</div>}
        {badge &&
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-bold ${badge.color === 'red' ? 'bg-danger-bg text-danger' : badge.color === 'green' ? 'bg-success-bg text-success' : 'bg-warning/20 text-warning'}`}>
          
            {badge.value}
          </span>
        }
      </div>
      <div className="flex items-end gap-3 mt-2">
        <div className="text-2xl font-bold text-textMain">{value}</div>
        {trend &&
        <div
          className={`text-sm font-medium mb-1 ${trend.isPositive ? 'text-success' : 'text-danger'}`}>
          
            {trend.isPositive ? '+' : ''}
            {trend.value}
          </div>
        }
      </div>
    </motion.div>);

}