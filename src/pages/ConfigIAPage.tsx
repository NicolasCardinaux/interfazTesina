import React, { useState } from 'react';
import { AppLayout } from '../components/AppLayout';
import { DatabaseIcon, CheckCircle2Icon, SaveIcon, ActivityIcon, XCircleIcon } from 'lucide-react';

export function ConfigIAPage() {
  const [apiStatus, setApiStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');

  const testApi = () => {
    setApiStatus('testing');
    // Simulate API test delay
    setTimeout(() => {
      setApiStatus('success');
    }, 1500);
  };

  return (
    <AppLayout breadcrumb="Administración / Configuración IA" showChat={false}>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto pb-10">
        <h1 className="text-2xl font-bold text-textMain">
          Gestión del Motor de Inteligencia Artificial
        </h1>

        {/* Card 1: Model Selection */}
        <div className="bg-surface p-6 rounded-lg shadow-card border border-slate-100">
          <h3 className="text-lg font-semibold text-textMain mb-4">
            Selección de Modelo (Enrutador)
          </h3>

          <div className="space-y-4 mb-6">
            <label className="flex items-start gap-3 p-4 border border-primary bg-primary/5 rounded-lg cursor-pointer">
              <input type="radio" name="model" className="mt-1 w-4 h-4 text-primary focus:ring-primary" defaultChecked />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-textMain">Nube (API OpenAI GPT-4o)</span>
                  <span className="bg-primary/20 text-primary text-[10px] uppercase font-bold px-2 py-0.5 rounded">Recomendado</span>
                </div>
                <p className="text-sm text-textMuted mt-1">Máxima velocidad y capacidad de razonamiento complejo.</p>
              </div>
            </label>

            <label className="flex items-start gap-3 p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
              <input type="radio" name="model" className="mt-1 w-4 h-4 text-primary focus:ring-primary" />
              <div>
                <span className="font-semibold text-textMain">Local (Ollama Llama-3 8B)</span>
                <p className="text-sm text-textMuted mt-1">Máxima Privacidad On-Premise. Los datos no salen de su infraestructura.</p>
              </div>
            </label>
          </div>

          <div className="space-y-2 border-t border-slate-100 pt-6">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-textMain">API Key (OpenAI)</label>
              {apiStatus === 'success' && <span className="flex items-center gap-1 text-xs font-bold text-success bg-success-bg px-2 py-0.5 rounded-full"><CheckCircle2Icon className="w-3.5 h-3.5"/> Conexión Exitosa</span>}
              {apiStatus === 'error' && <span className="flex items-center gap-1 text-xs font-bold text-danger bg-danger-bg px-2 py-0.5 rounded-full"><XCircleIcon className="w-3.5 h-3.5"/> Error de Conexión</span>}
            </div>
            <div className="flex gap-3">
              <input
                type="password"
                defaultValue="sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                className="flex-1 px-4 py-2 bg-slate-50 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-mono" 
              />
              <button 
                onClick={testApi}
                disabled={apiStatus === 'testing'}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-md text-sm font-medium transition-colors disabled:opacity-50"
              >
                {apiStatus === 'testing' ? (
                  <ActivityIcon className="w-4 h-4 animate-spin" />
                ) : (
                  <ActivityIcon className="w-4 h-4" />
                )}
                Test API
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Vector DB */}
        <div className="bg-surface p-6 rounded-lg shadow-card border border-slate-100">
          <h3 className="text-lg font-semibold text-textMain mb-4">
            Base de Datos Vectorial
          </h3>

          <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center shadow-sm">
                <DatabaseIcon className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span className="font-medium text-textMain">
                    PGVector Conectado correctamente a PostgreSQL
                  </span>
                </div>
                <p className="text-sm text-textMuted mt-0.5">Host: db.bizlens.internal:5432</p>
              </div>
            </div>

            <div className="text-right">
              <div className="text-2xl font-bold text-textMain">14,502</div>
              <div className="text-xs text-textMuted uppercase tracking-wide font-semibold">Embeddings Indexados</div>
            </div>
          </div>
        </div>

        {/* Card 3: Prompts */}
        <div className="bg-surface p-6 rounded-lg shadow-card border border-slate-100">
          <h3 className="text-lg font-semibold text-textMain mb-4">
            Gestión de Prompts de Sistema
          </h3>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-textMain">Rol Operativo</label>
              <textarea
                rows={4}
                defaultValue="Actúa como un gerente de planta experto en manufactura. Tu objetivo es analizar datos de producción, identificar cuellos de botella y proponer soluciones para reducir mermas y mejorar el OEE. Sé directo y usa terminología industrial."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-textMain">Rol Financiero</label>
              <textarea
                rows={4}
                defaultValue="Actúa como un auditor financiero especializado en costos industriales. Tu objetivo es cruzar datos de producción con costos fijos y variables para determinar la rentabilidad real por SKU. Alerta sobre desviaciones presupuestarias."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none" 
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-md font-medium transition-colors shadow-sm">
              <SaveIcon className="w-4 h-4" />
              Guardar Configuración IA
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}