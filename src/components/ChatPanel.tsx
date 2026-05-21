import React, { useState } from 'react';
import { XIcon, PaperclipIcon, SendIcon, BotIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export function ChatPanel({ onClose }: {onClose: () => void;}) {
  const [input, setInput] = useState('');
  return (
    <motion.aside
      initial={{
        x: 350,
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 1
      }}
      exit={{
        x: 350,
        opacity: 0
      }}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 200
      }}
      className="fixed right-0 top-0 bottom-0 w-[350px] bg-surface/95 backdrop-blur-xl border-l border-slate-200/50 shadow-drawer flex flex-col h-full z-50">
      
      <div className="p-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <BotIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Asistente RAG BizLens</h3>
            <p className="text-[10px] text-slate-300 flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
              Conectado a Base Documental Oficial
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors p-1">
          
          <XIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-5 bg-slate-50">
        <div className="flex flex-col gap-1 items-end">
          <div className="bg-slate-200 text-textMain px-3 py-2.5 rounded-xl rounded-tr-sm text-sm max-w-[85%] shadow-sm">
            Resumen de las alertas de este mes
          </div>
          <span className="text-[10px] text-textMuted px-1">10:42 AM</span>
        </div>

        <div className="flex flex-col gap-1 items-start">
          <div className="bg-primary/10 text-textMain px-3 py-2.5 rounded-xl rounded-tl-sm text-sm max-w-[90%] border border-primary/20 shadow-sm">
            Se detectaron 3 alertas críticas. El costo de mermas en la Línea de
            Extrusión superó el umbral del 5%. Recomiendo revisar el
            mantenimiento del equipo 04.
            <div className="mt-3 text-[10px] bg-white px-2 py-1.5 rounded border border-slate-200 text-textMuted inline-block shadow-sm">
              <span className="font-semibold text-slate-600">Fuente:</span>{' '}
              fact_produccion_oct.csv, fila 112
            </div>
          </div>
          <span className="text-[10px] text-textMuted px-1">10:43 AM</span>
        </div>
      </div>

      <div className="p-4 bg-surface border-t border-slate-200 shrink-0">
        <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1.5 border border-slate-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
          <button className="p-1.5 text-textMuted hover:text-primary transition-colors">
            <PaperclipIcon className="w-4 h-4" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Consulte sus datos..."
            className="flex-1 bg-transparent text-sm outline-none py-1" />
          
          <button className="p-1.5 bg-primary text-white rounded-md hover:bg-primary-hover transition-colors">
            <SendIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.aside>);

}