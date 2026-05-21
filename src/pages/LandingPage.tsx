import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  BrainIcon,
  BarChart3Icon,
  ShieldCheckIcon,
  ZapIcon,
  ClockIcon,
  TrendingUpIcon,
  MessageSquareIcon,
  FileSpreadsheetIcon,
  UsersIcon,
  CheckCircle2Icon,
  ArrowRightIcon,
  LineChartIcon,
  LayoutDashboardIcon,
  LockIcon,
  SparklesIcon,
  PlayCircleIcon,
  StarIcon,
  MenuIcon,
  XIcon,
  Linkedin,
  Instagram
} from 'lucide-react';
import { ParticleBackground } from '../components/ParticleBackground';

const XTwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050B14] font-sans text-slate-300 overflow-x-hidden selection:bg-primary/30 selection:text-white">
      
      {/* 1. FLOATING NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2 sm:py-4' : 'py-4 sm:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-500 ${scrolled ? 'bg-[#0A1121]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : 'bg-transparent border border-transparent'}`}>
            <div 
              className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
                <BrainIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-white font-bold text-lg sm:text-xl tracking-tight">
                BizLens <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#problema" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">El Problema</a>
              <a href="#solucion" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">La Solución</a>
              <a href="#beneficios" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Beneficios</a>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-4 border-r border-white/10 pr-6">
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><XTwitterIcon className="w-4 h-4" /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
              </div>
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  Iniciar sesión
                </Link>
                <Link to="/registro" className="relative group overflow-hidden bg-primary hover:bg-blue-600 text-white text-sm font-medium px-6 py-2.5 rounded-xl transition-all shadow-[0_0_20px_rgba(25,118,210,0.3)] hover:shadow-[0_0_30px_rgba(25,118,210,0.5)]">
                  <span className="relative z-10 flex items-center gap-2">Comenzar gratis <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <Link to="/registro" className="sm:hidden bg-primary text-white text-xs font-medium px-4 py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(25,118,210,0.4)]">
                Probar
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
              >
                {mobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-4 right-4 mt-2 bg-[#0A1121]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-5 lg:hidden flex flex-col gap-4 z-50"
              >
                <a onClick={() => setMobileMenuOpen(false)} href="#problema" className="text-base font-medium text-slate-300 hover:text-white transition-colors border-b border-white/5 pb-2">El Problema</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#solucion" className="text-base font-medium text-slate-300 hover:text-white transition-colors border-b border-white/5 pb-2">La Solución</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#beneficios" className="text-base font-medium text-slate-300 hover:text-white transition-colors border-b border-white/5 pb-2">Beneficios</a>
                <div className="flex items-center gap-4 py-2 border-b border-white/5">
                  <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors"><XTwitterIcon className="w-5 h-5" /></a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                </div>
                <div className="flex flex-col gap-3 mt-2">
                  <Link onClick={() => setMobileMenuOpen(false)} to="/login" className="w-full text-center text-sm font-medium text-slate-300 hover:text-white transition-colors py-3 bg-white/5 rounded-xl">
                    Iniciar sesión
                  </Link>
                  <Link onClick={() => setMobileMenuOpen(false)} to="/registro" className="w-full text-center bg-primary hover:bg-blue-600 text-white text-sm font-medium py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(25,118,210,0.3)]">
                    Comenzar gratis
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-52 lg:pb-32 overflow-hidden min-h-[100svh] lg:min-h-[90vh] flex items-center">
        {/* Background glow effects */}
        <div className="absolute top-0 md:top-1/4 left-0 md:left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 md:bottom-1/4 right-0 md:right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-indigo-600/20 rounded-full blur-[80px] md:blur-[100px] mix-blend-screen pointer-events-none"></div>
        
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            
            {/* Left Content */}
            <motion.div 
              className="w-full lg:w-[55%] text-center lg:text-left mt-10 md:mt-0"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-slate-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-6 sm:mb-8 shadow-inner shadow-white/5 hover:bg-white/10 transition-colors cursor-default">
                <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" /> 
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">El futuro de las PyMEs</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] sm:leading-[1.1] tracking-tight mb-4 sm:mb-6 text-white">
                Tus datos dispersos, <br className="hidden sm:block"/> convertidos en <br className="hidden sm:block"/>
                <span className="relative inline-block mt-1 sm:mt-2">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-indigo-400">decisiones claras.</span>
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-primary/30 blur-md rounded-full"></div>
                </span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-base sm:text-lg lg:text-xl text-slate-400 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light px-2 sm:px-0">
                Centraliza tu información operativa y financiera en segundos. Chatea con tus datos y obtén respuestas instantáneas sin necesidad de ser un experto en tecnología.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
                <Link to="/registro" className="w-full sm:w-auto bg-white text-[#050B14] hover:bg-slate-200 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:-translate-y-1 flex items-center justify-center gap-2">
                  Empezar ahora <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link to="/login" className="w-full sm:w-auto bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
                  <PlayCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" /> Ver demostración
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10 sm:mt-12 flex items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-500">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#050B14] bg-slate-800 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover opacity-80" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-amber-400">
                    <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 fill-current" /><StarIcon className="w-3 h-3 sm:w-4 sm:h-4 fill-current" /><StarIcon className="w-3 h-3 sm:w-4 sm:h-4 fill-current" /><StarIcon className="w-3 h-3 sm:w-4 sm:h-4 fill-current" /><StarIcon className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                  </div>
                  <span>+500 PyMEs ya lo usan</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Graphic - Interactive IA Visual */}
            <motion.div 
              className="w-full lg:w-[45%] relative h-[350px] sm:h-[450px] lg:h-[600px] rounded-3xl sm:rounded-[2rem] overflow-hidden group border border-white/10 bg-[#0A1121] shadow-[0_0_30px_rgba(0,0,0,0.3)] lg:shadow-[0_0_50px_rgba(0,0,0,0.5)] mt-8 lg:mt-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F52BA]/20 to-[#1976D2]/10 z-0"></div>
              
              <div className="absolute inset-0 z-10 pointer-events-none hidden sm:block">
                <ParticleBackground />
              </div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none p-4 sm:p-8">
                
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-primary to-indigo-600 rounded-2xl sm:rounded-[2rem] flex items-center justify-center mb-6 sm:mb-8 border border-white/20 shadow-[0_0_30px_rgba(25,118,210,0.4)] sm:shadow-[0_0_40px_rgba(25,118,210,0.5)] rotate-3"
                >
                  <BrainIcon className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </motion.div>

                <div className="bg-[#111A2D]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 w-[90%] sm:w-full max-w-sm shadow-2xl transform transition-transform group-hover:scale-105 duration-700">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 border-b border-white/5 pb-2 sm:pb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <MessageSquareIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-xs sm:text-sm">Asistente BizLens</div>
                      <div className="text-green-400 text-[10px] sm:text-xs flex items-center gap-1"><div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse"></div> En línea</div>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-white/5 rounded-2xl rounded-tl-none p-2 sm:p-3 text-xs sm:text-sm text-slate-300 w-4/5">
                      Analizando tus finanzas...
                    </div>
                    <div className="bg-primary/20 border border-primary/30 rounded-2xl rounded-tr-none p-2 sm:p-3 text-xs sm:text-sm text-white w-[90%] sm:w-[85%] ml-auto shadow-inner">
                      Tus costos subieron un 12% este mes. ¿Quieres ver el desglose?
                    </div>
                  </div>
                </div>

                <motion.div 
                   animate={{ y: [0, 8, 0] }}
                   transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                   className="hidden sm:flex absolute bottom-6 right-6 lg:bottom-10 lg:right-10 bg-white/10 backdrop-blur-lg border border-white/10 p-3 sm:p-4 rounded-2xl items-center gap-3 sm:gap-4 shadow-xl"
                >
                   <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                     <TrendingUpIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                   </div>
                   <div>
                     <div className="text-[10px] sm:text-xs text-slate-400">Eficiencia</div>
                     <div className="text-base sm:text-lg font-bold text-white">+24.5%</div>
                   </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEMA (DARK BENTO GRID) */}
      <section id="problema" className="py-20 sm:py-32 bg-[#0A1121] text-white relative rounded-t-3xl sm:rounded-t-[3rem] -mt-6 sm:-mt-10 z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 tracking-tight">El caos de los datos <span className="text-slate-500 line-through">era</span> normal</h2>
            <p className="text-base sm:text-xl text-slate-400 font-light px-2 sm:px-0">La mayoría de las empresas generan muchísimos datos, pero pocas logran aprovecharlos. Identificar el problema es el primer paso hacia la claridad.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <FileSpreadsheetIcon className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400" />,
                bgIcon: "bg-rose-500/10",
                title: "Caos de planillas",
                desc: "Información operativa y financiera separada en múltiples archivos Excel que no se comunican entre sí."
              },
              {
                icon: <ClockIcon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />,
                bgIcon: "bg-amber-500/10",
                title: "Reportes lentos",
                desc: "Pierdes horas o días armando informes, y para cuando los tienes, la información ya es vieja."
              },
              {
                icon: <LayoutDashboardIcon className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400" />,
                bgIcon: "bg-white/5",
                title: "Decisiones a ciegas",
                desc: "Es difícil saber dónde estás perdiendo dinero o qué proceso falla por falta de visión global."
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="group bg-[#111A2D] border border-white/5 p-6 sm:p-10 rounded-2xl sm:rounded-[2rem] hover:bg-[#162137] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-[3rem] sm:rounded-bl-[4rem] -z-10 group-hover:from-primary/20 transition-colors duration-500"></div>
                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${item.bgIcon} rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. SOLUCIÓN (DARK THEME) */}
      <section id="solucion" className="py-20 sm:py-32 bg-[#050B14] relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-20">
            <motion.div 
              className="w-full lg:w-1/2 text-center lg:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-primary font-bold tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4">La Solución</motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 tracking-tight text-white">
                Ordenamos tu negocio para que tú solo lo dirijas.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-base sm:text-xl text-slate-400 mb-8 sm:mb-10 leading-relaxed font-light px-2 sm:px-0">
                BizLens AI actúa como el cerebro central de tu empresa. Conectamos tus documentos, los procesamos con IA avanzada y te entregamos respuestas listas para usar.
              </motion.p>
              
              <div className="space-y-6 sm:space-y-8 text-left">
                {[
                  { icon: <LayoutDashboardIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />, title: "Centralización Automática", desc: "Sube tus archivos y nosotros los unificamos en paneles visuales ultra rápidos." },
                  { icon: <MessageSquareIcon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />, title: "Asistente Inteligente", desc: "Pregúntale al sistema en lenguaje natural y obtén respuestas al instante." },
                  { icon: <TrendingUpIcon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />, title: "Claridad Inmediata", desc: "Detecta ineficiencias, cuellos de botella y oportunidades con un solo clic." }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex gap-4 sm:gap-6 items-start group cursor-default">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#0A1121] border border-white/10 shadow-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(25,118,210,0.3)] transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 text-white">{item.title}</h4>
                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2 relative perspective-1000 mt-10 lg:mt-0"
              initial={{ opacity: 0, rotateY: 10, x: 20 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Abstract decorative shapes */}
              <div className="absolute -top-5 sm:-top-10 -right-5 sm:-right-10 w-40 sm:w-64 h-40 sm:h-64 bg-primary/20 rounded-full blur-[60px] sm:blur-[100px]"></div>
              <div className="absolute -bottom-5 sm:-bottom-10 -left-5 sm:-left-10 w-40 sm:w-64 h-40 sm:h-64 bg-indigo-500/20 rounded-full blur-[60px] sm:blur-[100px]"></div>

              <div className="bg-[#0A1121]/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] sm:shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10 p-2 sm:p-3 transform transition-transform duration-700 lg:hover:-translate-y-2">
                <div className="bg-[#050B14] rounded-xl sm:rounded-2xl border border-white/5 overflow-hidden relative">
                  {/* Mac style header */}
                  <div className="h-8 sm:h-12 bg-[#0A1121] border-b border-white/5 flex items-center px-3 sm:px-5 gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500"></div>
                    <div className="ml-2 sm:ml-4 h-4 sm:h-6 bg-white/5 rounded-md w-1/3 border border-white/5"></div>
                  </div>
                  
                  {/* Dashboard Mockup (Dark Mode) */}
                  <div className="p-4 sm:p-8">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-8">
                      <div className="flex-1 h-24 sm:h-32 bg-[#111A2D] rounded-xl sm:rounded-2xl border border-white/5 shadow-inner p-4 sm:p-5 relative overflow-hidden group">
                         <div className="text-slate-400 text-xs sm:text-sm mb-1 sm:mb-2">Ingresos Totales</div>
                         <div className="text-xl sm:text-3xl font-bold text-white">$124,500</div>
                         <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-500"></div>
                         <LineChartIcon className="absolute right-3 top-3 sm:right-4 sm:top-4 w-10 h-10 sm:w-16 sm:h-16 text-white/5 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-1 h-24 sm:h-32 bg-[#111A2D] rounded-xl sm:rounded-2xl border border-white/5 shadow-inner p-4 sm:p-5 relative overflow-hidden group">
                         <div className="text-slate-400 text-xs sm:text-sm mb-1 sm:mb-2">Eficiencia</div>
                         <div className="text-xl sm:text-3xl font-bold text-white">92.4%</div>
                         <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-indigo-500"></div>
                         <ZapIcon className="absolute right-3 top-3 sm:right-4 sm:top-4 w-10 h-10 sm:w-16 sm:h-16 text-white/5 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    
                    <div className="h-32 sm:h-48 bg-[#111A2D] border border-white/5 shadow-inner rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col justify-end gap-2 sm:gap-3 relative">
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-sm sm:text-base text-white font-bold">Rendimiento</div>
                      <div className="flex items-end h-full gap-2 sm:gap-3 mt-6 sm:mt-8">
                        {[40, 70, 45, 90, 60, 85, 100].map((h, i) => (
                          <motion.div 
                            key={i} 
                            className="flex-1 bg-gradient-to-t from-primary/30 to-primary/10 rounded-t-sm sm:rounded-t-lg relative group cursor-pointer" 
                            style={{ height: `${h}%` }}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary rounded-t-sm sm:rounded-t-lg group-hover:h-full transition-all duration-300 opacity-80 group-hover:opacity-40"></div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. DIFERENCIAL (BENEFICIOS) */}
      <section id="beneficios" className="py-20 sm:py-32 relative overflow-hidden bg-[#0A1121] border-t border-white/5">
        <div className="absolute inset-0 z-0 hidden sm:block">
           <ParticleBackground />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-white tracking-tight">Privado. Seguro. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Inteligente.</span></h2>
            <p className="text-base sm:text-xl text-slate-400 font-light px-2 sm:px-0">No somos una herramienta genérica. BizLens AI está construida con la realidad y la seguridad de las PyMEs en mente.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-10 rounded-2xl sm:rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors duration-500">
              <div className="absolute -right-5 -top-5 sm:-right-10 sm:-top-10 w-32 h-32 sm:w-40 sm:h-40 bg-primary/20 rounded-full blur-2xl sm:blur-3xl group-hover:bg-primary/30 transition-colors duration-500"></div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 shadow-lg shadow-primary/20">
                <LockIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Privacidad Absoluta</h3>
              <p className="text-sm sm:text-lg text-slate-400 leading-relaxed">Tus datos nunca se comparten ni se usan para entrenar modelos públicos. Tienes el control total sobre la información de tu empresa dentro de una bóveda digital segura.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-10 rounded-2xl sm:rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors duration-500">
              <div className="absolute -left-5 -top-5 sm:-left-10 sm:-top-10 w-32 h-32 sm:w-40 sm:h-40 bg-emerald-500/20 rounded-full blur-2xl sm:blur-3xl group-hover:bg-emerald-500/30 transition-colors duration-500"></div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 shadow-lg shadow-emerald-500/20">
                <CheckCircle2Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Simplicidad Extrema</h3>
              <p className="text-sm sm:text-lg text-slate-400 leading-relaxed">Olvídate de configuraciones complejas o lenguajes técnicos. Si sabes escribir una pregunta en un chat o subir un archivo, ya eres un experto usando nuestra plataforma.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. CÓMO FUNCIONA */}
      <section className="py-20 sm:py-32 bg-[#050B14] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-16 sm:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-white tracking-tight">4 pasos para el control</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              { num: "01", title: "Sube", desc: "Tus planillas Excel y archivos CSV históricos." },
              { num: "02", title: "Procesa", desc: "Nuestra IA clasifica y organiza todo." },
              { num: "03", title: "Visualiza", desc: "Dashboards generados en tiempo real." },
              { num: "04", title: "Consulta", desc: "Chatea con tus datos para decidir mejor." }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeInUp} className="relative group text-center sm:text-left bg-white/5 sm:bg-transparent p-6 sm:p-0 rounded-2xl sm:rounded-none border border-white/5 sm:border-none hover:-translate-y-1 transition-transform duration-300">
                <div className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent mb-4 sm:mb-6 transition-colors duration-500 group-hover:from-primary/40">{step.num}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{step.title}</h3>
                <p className="text-sm sm:text-lg text-slate-400">{step.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute top-12 right-[-20%] w-[40%] h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. CTA FINAL (REFINED & COMPACT) */}
      <section className="py-20 sm:py-32 bg-[#050B14] relative overflow-hidden">
        {/* Background ambient light for CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden group bg-gradient-to-b from-white/5 to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Subtle grid pattern inside CTA */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0 mix-blend-overlay"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-[0_0_20px_rgba(25,118,210,0.4)] border border-white/20">
                <ZapIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-white tracking-tight leading-tight">
                Pasa de reaccionar tarde a <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-purple-400">anticiparte al mercado.</span>
              </h2>
              <p className="text-sm sm:text-lg text-slate-300 mb-8 sm:mb-10 max-w-xl mx-auto font-light leading-relaxed">
                Únete a cientos de empresas que ya toman decisiones inteligentes y rápidas utilizando sus propios datos.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <Link to="/registro" className="w-full sm:w-auto bg-primary hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-[0_10px_20px_rgba(25,118,210,0.2)] hover:shadow-[0_20px_40px_rgba(25,118,210,0.5)] hover:-translate-y-1 text-base sm:text-lg flex items-center justify-center gap-2 group/btn mx-auto">
                  Crear cuenta gratis <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#03060A] border-t border-white/5 pt-12 sm:pt-20 pb-8 sm:pb-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div 
                className="flex items-center gap-2 sm:gap-3 text-white font-bold text-xl sm:text-2xl cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-indigo-600 rounded-lg flex items-center justify-center">
                  <BrainIcon className="w-5 h-5 text-white" />
                </div>
                <span>BizLens <span className="text-primary">AI</span></span>
              </div>
              <p className="text-slate-400 text-sm max-w-xs leading-relaxed">Transformando el caos de datos en decisiones claras y rentables para tu negocio.</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-4 sm:gap-6">
                <Link to="/login" className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors font-medium">Iniciar Sesión</Link>
                <Link to="/registro" className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors font-medium">Registrarse</Link>
                <a href="#" className="text-sm sm:text-base text-slate-400 hover:text-white transition-colors font-medium">Contacto</a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all">
                  <XTwitterIcon className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-600 text-center md:text-left">
            <div>&copy; {new Date().getFullYear()} BizLens AI. Todos los derechos reservados.</div>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-slate-400 transition-colors">Términos de servicio</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Política de privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
