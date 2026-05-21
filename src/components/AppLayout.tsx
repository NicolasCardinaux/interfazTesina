import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { ChatPanel } from './ChatPanel';
import { BrainCircuitIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface AppLayoutProps {
  children: React.ReactNode;
  breadcrumb: string;
  showChat?: boolean;
}

export function AppLayout({
  children,
  breadcrumb,
  showChat = false
}: AppLayoutProps) {
  const [isChatOpen, setIsChatOpen] = useState(showChat);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden relative">
      {/* Mobile Sidebar Backdrop */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <div className={`fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 md:relative md:translate-x-0 shrink-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative transition-all duration-300">
        <Topbar
          breadcrumb={breadcrumb}
          onToggleChat={() => setIsChatOpen(!isChatOpen)}
          isChatOpen={isChatOpen} 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 lg:p-8 max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>

      <AnimatePresence>
        {isChatOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40"
              onClick={() => setIsChatOpen(false)}
            />
            <ChatPanel onClose={() => setIsChatOpen(false)} />
          </>
        )}
      </AnimatePresence>

      {/* Floating Action Button (FAB) */}
      <AnimatePresence>
        {!isChatOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsChatOpen(true)}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl"
            title="Abrir Asistente IA"
          >
            <BrainCircuitIcon className="w-7 h-7" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}