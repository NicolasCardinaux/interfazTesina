import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BellIcon,
  MessageSquareIcon,
  SearchIcon,
  AlertTriangleIcon,
  CheckCircle2Icon,
  BrainIcon,
  UserIcon,
  ShieldIcon,
  LogOutIcon,
  XIcon,
  ArrowRightIcon,
  InfoIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

interface TopbarProps {
  breadcrumb: string;
  onToggleChat?: () => void;
  isChatOpen?: boolean;
}

// ── Notification Dropdown ──
function NotificationDropdown({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className="absolute right-0 top-full mt-2 w-[380px] bg-surface rounded-lg z-50 border border-slate-100"
      style={{
        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-textMain text-sm">Notificaciones</h3>
          <span className="bg-danger text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            3 Nuevas
          </span>
        </div>
        <button className="text-xs text-primary font-medium hover:underline">
          Marcar leídas
        </button>
      </div>

      {/* Items */}
      <div className="divide-y divide-slate-100 max-h-[400px] overflow-y-auto">
        {/* Item 1 - Critical Alert (Red) */}
        <div className="flex gap-3 px-4 py-4 hover:bg-slate-50 transition-colors relative group">
          <div className="absolute top-4 left-2 w-2 h-2 bg-danger rounded-full"></div>
          <div className="w-10 h-10 rounded-full bg-danger/10 flex items-center justify-center shrink-0">
            <AlertTriangleIcon className="w-5 h-5 text-danger" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-1">
              <p className="text-sm font-semibold text-textMain leading-tight">Merma Crítica Máquina 2</p>
              <span className="text-[10px] text-textMuted whitespace-nowrap ml-2">Hace 2m</span>
            </div>
            <p className="text-xs text-textMuted mb-2">El descarte superó el umbral del 5%. Se requiere acción inmediata.</p>
            <button 
              onClick={() => { onClose(); navigate('/alertas'); }}
              className="text-xs font-medium text-danger hover:text-danger/80 flex items-center gap-1 transition-colors"
            >
              Ir al módulo <ArrowRightIcon className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Item 2 - Warning (Yellow) */}
        <div className="flex gap-3 px-4 py-4 hover:bg-slate-50 transition-colors relative group">
          <div className="absolute top-4 left-2 w-2 h-2 bg-warning rounded-full"></div>
          <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center shrink-0">
            <AlertTriangleIcon className="w-5 h-5 text-warning" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-1">
              <p className="text-sm font-semibold text-textMain leading-tight">Datos Incompletos</p>
              <span className="text-[10px] text-textMuted whitespace-nowrap ml-2">Hace 15m</span>
            </div>
            <p className="text-xs text-textMuted mb-2">Faltan registros en el lote de producción matutino.</p>
            <button 
              onClick={() => { onClose(); navigate('/ingesta'); }}
              className="text-xs font-medium text-warning hover:text-warning/80 flex items-center gap-1 transition-colors"
            >
              Revisar ingesta <ArrowRightIcon className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Item 3 - Info (Blue) */}
        <div className="flex gap-3 px-4 py-4 hover:bg-slate-50 transition-colors relative group">
          <div className="absolute top-4 left-2 w-2 h-2 bg-primary rounded-full"></div>
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <InfoIcon className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-1">
              <p className="text-sm font-semibold text-textMain leading-tight">Nuevo Informe IA</p>
              <span className="text-[10px] text-textMuted whitespace-nowrap ml-2">Hace 1h</span>
            </div>
            <p className="text-xs text-textMuted mb-2">El resumen financiero semanal ya está disponible.</p>
            <button 
              onClick={() => { onClose(); navigate('/reportes'); }}
              className="text-xs font-medium text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
            >
              Ver reporte <ArrowRightIcon className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 p-2">
        <button 
          onClick={() => { onClose(); navigate('/alertas'); }}
          className="w-full text-center text-sm font-medium text-primary hover:bg-primary/5 py-2 rounded-md transition-colors"
        >
          Ver todo el historial de alertas
        </button>
      </div>
    </motion.div>
  );
}

// ── Profile Dropdown ──
function ProfileDropdown({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  const initials = user?.name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase() || 'U';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className="absolute right-0 top-full mt-2 w-[250px] bg-surface rounded-lg z-50 border border-slate-100"
      style={{
        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)'
      }}
    >
      {/* User Info */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-100">
        <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm shrink-0">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-textMain text-sm truncate">
            {user?.name || 'Usuario'}
          </p>
          <p className="text-xs text-textMuted capitalize">{user?.role || 'Operario'}</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-1.5">
        <button 
          onClick={() => { onClose(); navigate('/perfil'); }}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-textMain hover:bg-slate-50 transition-colors"
        >
          <UserIcon className="w-4 h-4 text-textMuted" />
          Mi Perfil y Preferencias
        </button>
        
        {user?.role === 'gerente' && (
          <button
            onClick={() => { onClose(); navigate('/gestion-usuarios'); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-textMain hover:bg-slate-50 transition-colors"
          >
            <ShieldIcon className="w-4 h-4 text-primary" />
            <span className="flex-1 text-left">Gestión de Usuarios</span>
          </button>
        )}
      </div>

      <div className="border-t border-slate-200 mx-3"></div>

      <div className="py-1.5">
        <button
          onClick={() => {
            onClose();
            logout();
            navigate('/login');
          }}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-danger hover:bg-danger/5 transition-colors"
        >
          <LogOutIcon className="w-4 h-4" />
          Cerrar Sesión
        </button>
      </div>
    </motion.div>
  );
}

// ── Main Topbar ──
export function Topbar({ breadcrumb, onToggleChat, isChatOpen }: TopbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { user } = useAuth();
  
  const initials = user?.name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase() || 'U';

  return (
    <header className="h-16 bg-surface/80 backdrop-blur-md border-b border-slate-200/60 flex items-center justify-between px-6 shrink-0 z-30 sticky top-0 transition-all">
      <div className="flex items-center text-sm text-textMuted font-medium">
        {breadcrumb}
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" />
          <input
            type="text"
            placeholder="Buscar..."
            className="pl-9 pr-4 py-1.5 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all w-64"
          />
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfile(false);
            }}
            className={`relative p-2 transition-colors rounded-full ${
              showNotifications ? 'bg-primary/10 text-primary' : 'text-textMuted hover:text-textMain hover:bg-slate-100'
            }`}
          >
            <BellIcon className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border-2 border-surface"></span>
          </button>
          <AnimatePresence>
            {showNotifications && <NotificationDropdown onClose={() => setShowNotifications(false)} />}
          </AnimatePresence>
        </div>

        {/* Chat Toggle */}
        {onToggleChat && (
          <button
            onClick={onToggleChat}
            className={`p-2 transition-colors rounded-full ${
              isChatOpen ? 'bg-primary/10 text-primary' : 'text-textMuted hover:text-textMain hover:bg-slate-100'
            }`}
            title="Toggle AI Assistant"
          >
            <MessageSquareIcon className="w-5 h-5" />
          </button>
        )}

        {/* Profile Avatar */}
        <div className="relative">
          <button
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
            }}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ml-1 cursor-pointer transition-all ${
              showProfile ? 'bg-primary text-white ring-2 ring-primary/30' : 'bg-primary/20 border border-primary/30 text-primary hover:ring-2 hover:ring-primary/20'
            }`}
          >
            {initials}
          </button>
          <AnimatePresence>
            {showProfile && <ProfileDropdown onClose={() => setShowProfile(false)} />}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}