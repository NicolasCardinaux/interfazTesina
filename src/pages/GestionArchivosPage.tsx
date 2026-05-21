import React, { useState } from 'react';
import { AppLayout } from '../components/AppLayout';
import { FileIcon, UploadCloudIcon, EyeIcon, RefreshCwIcon, Trash2Icon, FileTextIcon, FileSpreadsheetIcon } from 'lucide-react';

export function GestionArchivosPage() {
  const [archivos, setArchivos] = useState([
    { id: 1, nombre: 'fact_costos_q3.csv', tipo: 'CSV', fecha: '25 Oct, 2023', usuario: 'Nicolás C.', estado: 'Completo' },
    { id: 2, nombre: 'nomina_septiembre.xlsx', tipo: 'Excel', fecha: '24 Oct, 2023', usuario: 'Ana G.', estado: 'Error' },
    { id: 3, nombre: 'produccion_lote_99.json', tipo: 'JSON', fecha: '24 Oct, 2023', usuario: 'Sistema API', estado: 'Procesando' },
    { id: 4, nombre: 'parametros_maq2.xml', tipo: 'XML', fecha: '22 Oct, 2023', usuario: 'Juan P.', estado: 'Completo' },
  ]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setSelectedFile(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedFile !== null) {
      setArchivos(archivos.filter(a => a.id !== selectedFile));
    }
    setShowDeleteModal(false);
    setSelectedFile(null);
  };

  const getTipoIcon = (tipo: string) => {
    switch(tipo) {
      case 'CSV': return <FileTextIcon className="w-4 h-4 text-slate-500" />;
      case 'Excel': return <FileSpreadsheetIcon className="w-4 h-4 text-success" />;
      default: return <FileIcon className="w-4 h-4 text-primary" />;
    }
  };

  const getEstadoBadge = (estado: string) => {
    switch(estado) {
      case 'Completo': return <span className="bg-success-bg text-success text-xs font-semibold px-2.5 py-0.5 rounded-full">Completo</span>;
      case 'Error': return <span className="bg-danger-bg text-danger text-xs font-semibold px-2.5 py-0.5 rounded-full">Error de formato</span>;
      case 'Procesando': return <span className="bg-warning/10 text-warning text-xs font-semibold px-2.5 py-0.5 rounded-full animate-pulse">Procesando...</span>;
      default: return null;
    }
  };

  return (
    <AppLayout breadcrumb="Gestión de Archivos">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-textMain">Gestión de Archivos de Ingesta</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary-hover transition-colors shadow-sm">
            <UploadCloudIcon className="w-4 h-4" />
            Subir Nuevo Archivo
          </button>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow-card border border-slate-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs text-textMuted uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Nombre del Archivo</th>
                <th className="px-6 py-4 font-medium">Tipo</th>
                <th className="px-6 py-4 font-medium">Fecha de Subida</th>
                <th className="px-6 py-4 font-medium">Usuario</th>
                <th className="px-6 py-4 font-medium">Estado</th>
                <th className="px-6 py-4 font-medium text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {archivos.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-textMuted">
                    <div className="flex flex-col items-center justify-center">
                      <FileIcon className="w-12 h-12 text-slate-300 mb-3" />
                      <p className="text-sm font-medium">No hay archivos subidos</p>
                    </div>
                  </td>
                </tr>
              ) : archivos.map((archivo) => (
                <tr key={archivo.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-textMain flex items-center gap-3">
                    {getTipoIcon(archivo.tipo)}
                    {archivo.nombre}
                  </td>
                  <td className="px-6 py-4 text-sm text-textMuted">
                    <span className="bg-slate-100 px-2 py-1 rounded text-xs font-medium text-slate-600">{archivo.tipo}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-textMuted">{archivo.fecha}</td>
                  <td className="px-6 py-4 text-sm text-textMuted">{archivo.usuario}</td>
                  <td className="px-6 py-4">
                    {getEstadoBadge(archivo.estado)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        className="p-1.5 text-textMuted hover:text-primary hover:bg-primary/10 rounded transition-colors"
                        title="Ver detalle"
                      >
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button 
                        className="p-1.5 text-textMuted hover:text-warning hover:bg-warning/10 rounded transition-colors"
                        title="Reprocesar"
                      >
                        <RefreshCwIcon className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeleteClick(archivo.id)}
                        className="p-1.5 text-textMuted hover:text-danger hover:bg-danger-bg rounded transition-colors"
                        title="Eliminar"
                      >
                        <Trash2Icon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 animate-in fade-in zoom-in duration-200">
            <h3 className="text-lg font-bold text-textMain mb-2">¿Seguro desea eliminar este archivo?</h3>
            <p className="text-sm text-textMuted mb-6">
              Esta acción es permanente y los datos contenidos en el archivo se removerán del modelo de IA y de los reportes.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button 
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 text-sm font-medium text-textMain hover:bg-slate-100 rounded-md transition-colors"
              >
                Cancelar
              </button>
              <button 
                onClick={confirmDelete}
                className="px-4 py-2 text-sm font-medium text-white bg-danger hover:bg-danger/90 rounded-md transition-colors"
              >
                Eliminar Archivo
              </button>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}
