import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MailIcon, EyeIcon, BrainIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { ParticleBackground } from '../components/ParticleBackground';

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate role derivation from email for demo
    const role = email.toLowerCase().includes('gerente') ? 'gerente' : 'operario';
    login(email.split('@')[0] || 'Usuario', role);
    navigate('/dashboard');
  };
  return (
    <div className="flex h-screen w-full bg-surface">
      {/* Left Side - Abstract Graphic */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#0F52BA] to-[#1976D2] relative overflow-hidden items-center justify-center p-12 group">
        <ParticleBackground />
        {/* Abstract Pattern overlay */}
        <div className="absolute inset-0 opacity-20 transition-all duration-1000 ease-out group-hover:scale-105 group-hover:opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse">
                
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1" />
                
              </pattern>
              <pattern
                id="dots"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse">
                
                <circle cx="2" cy="2" r="2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#dots)" />

            {/* Neural network abstract lines */}
            <path
              d="M100,100 L300,200 L500,150 L700,300"
              fill="none"
              stroke="white"
              strokeWidth="2"
              opacity="0.5" />
            
            <path
              d="M200,400 L400,300 L600,450 L800,200"
              fill="none"
              stroke="white"
              strokeWidth="2"
              opacity="0.5" />
            
            <circle cx="300" cy="200" r="6" fill="white" />
            <circle cx="500" cy="150" r="6" fill="white" />
            <circle cx="400" cy="300" r="6" fill="white" />
            <circle cx="600" cy="450" r="6" fill="white" />
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
          
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Inteligencia Artificial para tu fábrica.
            <br />
            <span className="text-blue-200">Centraliza. Analiza. Decide.</span>
          </h1>
        </motion.div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
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
          className="w-full max-w-[400px]">
          
          <div className="flex items-center gap-2 text-primary font-bold text-2xl mb-10">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <BrainIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-textMain">
              BizLens <span className="text-primary">AI</span>
            </span>
          </div>

          <h1 className="text-2xl font-bold text-textMain mb-8">
            Iniciar Sesión en su cuenta
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-textMuted block">
                Correo corporativo
              </label>
              <div className="relative">
                <MailIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="gerente@empresa.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-md text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-textMuted block">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-4 pr-10 py-2.5 bg-white border border-slate-300 rounded-md text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-textMain">
                  
                  <EyeIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                
                <span className="text-sm text-textMuted">Recordar sesión</span>
              </label>
              <a
                href="#"
                className="text-sm text-primary font-medium hover:underline">
                
                ¿Olvidó su contraseña?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-2.5 rounded-md transition-colors mt-4 shadow-sm">
              
              Ingresar al Panel
            </button>
          </form>

          <p className="text-center text-sm text-textMuted mt-10">
            ¿Necesita acceso?{' '}
            <Link
              to="/registro"
              className="text-primary font-medium hover:underline">
              Crear cuenta corporativa
            </Link>
          </p>
        </motion.div>
      </div>
    </div>);
}