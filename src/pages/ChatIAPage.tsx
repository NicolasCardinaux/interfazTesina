import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrainIcon, ArrowLeftIcon, SendIcon, DatabaseIcon, FileTextIcon, BookmarkIcon, UserIcon } from 'lucide-react';

export function ChatIAPage() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  return (
    <div className="flex flex-col h-screen w-full bg-surface overflow-hidden">
      {/* Header */}
      <header className="h-16 border-b border-slate-200 flex items-center justify-between px-6 shrink-0 bg-white">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-700"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BrainIcon className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-textMain">Asistente Inteligente BizLens AI</h1>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* User Message */}
          <div className="flex gap-4 justify-end">
            <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] shadow-sm">
              <p className="text-sm">¿Cuál fue el costo total de producción de la semana pasada y hubo alguna desviación respecto a las mermas?</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 border border-primary/30">
              <UserIcon className="w-5 h-5" />
            </div>
          </div>

          {/* AI Message */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
              <BrainIcon className="w-5 h-5" />
            </div>
            <div className="max-w-[80%] space-y-3">
              <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm text-textMain">
                <p className="text-sm mb-3">
                  El costo total de producción de la semana pasada fue de <strong>$142,500 USD</strong>.
                </p>
                <p className="text-sm mb-3">
                  Se detectó una desviación del <strong>+6.2%</strong> en las mermas de la Línea B (Máquina 2), lo cual incrementó los costos operativos en $4,300 USD respecto al umbral esperado.
                </p>
                
                {/* Data Source Badge */}
                <div className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 text-slate-600 px-2.5 py-1 rounded text-xs font-medium mt-2">
                  <DatabaseIcon className="w-3 h-3" />
                  Fuente: fact_costos.csv - fila 233
                </div>
              </div>

              {/* AI Actions */}
              <div className="flex flex-wrap gap-2">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-textMain hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                  <FileTextIcon className="w-3.5 h-3.5 text-primary" />
                  Convertir a reporte
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-textMain hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                  <BookmarkIcon className="w-3.5 h-3.5 text-warning" />
                  Guardar insight
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white border-t border-slate-200 shrink-0">
        <div className="max-w-4xl mx-auto relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pregunte sobre costos, producción o alertas..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-4 pr-12 py-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-textMain placeholder:text-slate-400 shadow-sm"
          />
          <button 
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors"
          >
            <SendIcon className="w-4 h-4" />
          </button>
        </div>
        <p className="text-center text-[10px] text-slate-400 mt-2">
          BizLens AI puede cometer errores. Verifique siempre los insights generados.
        </p>
      </div>
    </div>
  );
}
