import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MailIcon,
  EyeIcon,
  BrainIcon,
  BriefcaseIcon,
  SettingsIcon,
  UserIcon } from
'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { ParticleBackground } from '../components/ParticleBackground';

export function RegistroPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [selectedRole, setSelectedRole] = useState<'gerencia' | 'operario'>('gerencia');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const role = selectedRole === 'gerencia' ? 'gerente' : 'operario';
    login(name || 'Nuevo Usuario', role);
    navigate('/dashboard');
  };
  return (
    <div className="flex min-h-screen w-full bg-surface">
      {/* Left Side - Abstract Graphic */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#0F52BA] to-[#1976D2] relative overflow-hidden items-center justify-center p-12 group">
        <ParticleBackground />
        <div className="absolute inset-0 opacity-15 transition-all duration-1000 ease-out group-hover:scale-105 group-hover:opacity-25">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="reg-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse">
                
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5" />
                
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#reg-grid)" />
            {/* Abstract industrial/tech shapes */}
            <circle
              cx="20%"
              cy="30%"
              r="80"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              opacity="0.4" />
            
            <circle
              cx="20%"
              cy="30%"
              r="120"
              fill="none"
              stroke="white"
              strokeWidth="1"
              opacity="0.2" />
            
            <rect
              x="55%"
              y="15%"
              width="200"
              height="200"
              rx="16"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              opacity="0.3"
              transform="rotate(15, 650, 250)" />
            
            <path
              d="M150,500 Q350,400 550,500 T950,450"
              fill="none"
              stroke="white"
              strokeWidth="2"
              opacity="0.3" />
            
            <path
              d="M100,600 Q300,500 500,600 T900,550"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              opacity="0.2" />
            
            {/* Nodes */}
            <circle cx="25%" cy="55%" r="5" fill="white" opacity="0.6" />
            <circle cx="45%" cy="40%" r="5" fill="white" opacity="0.6" />
            <circle cx="65%" cy="60%" r="5" fill="white" opacity="0.6" />
            <circle cx="75%" cy="35%" r="5" fill="white" opacity="0.6" />
            <line
              x1="25%"
              y1="55%"
              x2="45%"
              y2="40%"
              stroke="white"
              strokeWidth="1"
              opacity="0.3" />
            
            <line
              x1="45%"
              y1="40%"
              x2="65%"
              y2="60%"
              stroke="white"
              strokeWidth="1"
              opacity="0.3" />
            
            <line
              x1="65%"
              y1="60%"
              x2="75%"
              y2="35%"
              stroke="white"
              strokeWidth="1"
              opacity="0.3" />
            
          </svg>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.2,
            duration: 0.8
          }}
          className="relative z-10 text-center max-w-lg">
          
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/30">
            <BrainIcon className="w-9 h-9 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Únete a la revolución industrial inteligente.
          </h1>
          <p className="text-blue-200 text-lg">
            Datos operativos y financieros unificados con IA.
          </p>
        </motion.div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
        <motion.div
          initial={{
            opacity: 0,
            x: 20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.5
          }}
          className="w-full max-w-[440px] py-4 sm:py-8">
          
          {/* Logo */}
          <div className="flex items-center gap-2 text-primary font-bold text-2xl mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <BrainIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-textMain">
              BizLens <span className="text-primary">AI</span>
            </span>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-textMain mb-1">
            Crear cuenta corporativa
          </h1>
          <p className="text-sm text-textMuted mb-6">
            Complete sus datos y seleccione su nivel de acceso.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-textMuted block">
                Nombre Completo
              </label>
              <div className="relative">
                <UserIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nicolás Cardinaux"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-textMuted block">
                Correo Electrónico
              </label>
              <div className="relative">
                <MailIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="usuario@empresa.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-textMuted block">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-4 pr-10 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-textMain transition-colors">
                  
                  <EyeIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Role Selection - Radio Cards */}
            <div className="space-y-2 pt-1">
              <label className="text-sm font-medium text-textMuted block">
                Seleccione su perfil de acceso
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Gerencia Card */}
                <button
                  type="button"
                  onClick={() => setSelectedRole('gerencia')}
                  className={`relative p-4 rounded-lg border-2 text-left transition-all ${selectedRole === 'gerencia' ? 'border-primary bg-primary/5 shadow-[0_0_0_1px_#1976D2]' : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'}`}>
                  
                  {selectedRole === 'gerencia' &&
                  <div className="absolute top-2.5 right-2.5 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}>
                      
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7" />
                      
                      </svg>
                    </div>
                  }
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${selectedRole === 'gerencia' ? 'bg-primary/15' : 'bg-slate-100'}`}>
                    
                    <BriefcaseIcon
                      className={`w-5 h-5 ${selectedRole === 'gerencia' ? 'text-primary' : 'text-slate-500'}`} />
                    
                  </div>
                  <h4
                    className={`font-semibold text-sm mb-1 ${selectedRole === 'gerencia' ? 'text-primary' : 'text-textMain'}`}>
                    
                    Perfil Gerencial
                  </h4>
                  <p className="text-xs text-textMuted leading-relaxed">
                    Acceso total a finanzas, operaciones, subida de archivos y
                    configuración de IA.
                  </p>
                </button>

                {/* Operario Card */}
                <button
                  type="button"
                  onClick={() => setSelectedRole('operario')}
                  className={`relative p-4 rounded-lg border-2 text-left transition-all ${selectedRole === 'operario' ? 'border-primary bg-primary/5 shadow-[0_0_0_1px_#1976D2]' : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'}`}>
                  
                  {selectedRole === 'operario' &&
                  <div className="absolute top-2.5 right-2.5 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}>
                      
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7" />
                      
                      </svg>
                    </div>
                  }
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${selectedRole === 'operario' ? 'bg-primary/15' : 'bg-slate-100'}`}>
                    
                    <SettingsIcon
                      className={`w-5 h-5 ${selectedRole === 'operario' ? 'text-primary' : 'text-slate-500'}`} />
                    
                  </div>
                  <h4
                    className={`font-semibold text-sm mb-1 ${selectedRole === 'operario' ? 'text-primary' : 'text-textMain'}`}>
                    
                    Perfil Operario
                  </h4>
                  <p className="text-xs text-textMuted leading-relaxed">
                    Acceso de solo lectura a métricas de planta y control de
                    calidad.
                  </p>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-2.5 rounded-lg transition-colors shadow-sm mt-4">
              Crear cuenta
            </button>
          </form>

          <p className="text-center text-sm text-textMuted mt-8">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Inicia sesión
            </Link>
          </p>
        </motion.div>
      </div>
    </div>);
}