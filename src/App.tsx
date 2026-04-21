/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  AlertTriangle,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  PencilLine,
  TestTube2,
  UserSquare2,
  X
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-500/50 flex items-center justify-center p-4 lg:p-8 font-sans">
      {/* Modal Container */}
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-7xl h-[90vh] max-h-[900px] flex flex-col overflow-hidden border border-gray-200">
        
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 shrink-0">
          <h2 className="text-[#00a9e2] text-xl font-bold">Datos del usuario</h2>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* Sidebar (Left Column) */}
          <div className="w-[300px] shrink-0 border-r border-gray-200 p-6 overflow-y-auto flex flex-col gap-6">
            
            {/* User Profile Info Header */}
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <div className="w-12 h-12 rounded bg-purple-50 flex items-center justify-center border border-[#8a3395] shrink-0 overflow-hidden text-[#8a3395]">
                {/* Proxy icon for the child, customizing generic user icon */}
                <UserSquare2 size={32} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 mb-0.5">Niño</span>
                <span className="text-[#8a3395] font-bold text-sm leading-tight uppercase">BRAYAN ALEXIS ARENAS ANTICONA</span>
              </div>
            </div>

            {/* User Details List */}
            <div className="flex flex-col gap-3">
              <DetailRow label="Edad" value="16 Meses" />
              <DetailRow label="DNI" value="94069838" />
              <DetailRow label="Ingreso" value="03/03/2025" />
              <DetailRow label="Unidad Territorial" value="LA LIBERTAD" />
              <DetailRow label="Ciai" value="LOS ANGELITOS" />
              <DetailRow label="Seguro de salud" value="SUBSIDIADO (SIS GRATUITO)" />
              <DetailRow label="Establecimiento" value="SANAGORAN" />
            </div>
          </div>

          {/* Main Content (Right Column) */}
          <div className="flex-1 bg-gray-50/30 overflow-y-auto relative container-scrollbar">
             {/* Custom scrollbar track for the right side matching image mostly */}
             <div className="absolute right-0 top-0 bottom-0 w-3 bg-gray-200/50 border-l border-gray-200 flex flex-col justify-between py-1 items-center opacity-0"></div>

             <div className="p-6 md:p-8 flex flex-col gap-8 max-w-5xl mx-auto">
                
                {/* Section Header: Anemia */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <TestTube2 className="text-[#e7305b] rotate-45" size={24} />
                    <h3 className="text-lg font-medium">Anemia</h3>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <ChevronUp size={20} />
                  </button>
                </div>

                {/* Subtitle */}
                <h4 className="text-[#3b4754] font-semibold">Evolución de tratamiento y dosajes</h4>

                {/* Cards Container */}
                <div className="flex flex-col xl:flex-row gap-6">
                  
                  {/* Card 1: Diagnóstico Actual (Cyan) */}
                  <div className="flex-1 flex flex-col items-center">
                    <div className="border border-[#00a9e2] rounded-xl w-full max-w-[500px] p-5 flex flex-col relative bg-white shadow-sm">
                      
                      {/* Header & Badges */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex flex-col">
                          <span className="text-[#00a9e2] font-semibold text-lg">Diagnóstico actual</span>
                          <span className="text-gray-400 text-xs mt-0.5">31/12/2025</span>
                        </div>
                        
                        <div className="flex gap-2">
                           <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-lg px-2.5 py-1 flex flex-col items-center shadow-sm">
                             <span className="text-[10px] text-[#00a9e2] uppercase mb-0.5 font-bold tracking-wider">Referido</span>
                             <span className="text-xs font-bold text-[#0369a1]">No</span>
                           </div>
                           <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-lg px-2.5 py-1 flex flex-col items-center shadow-sm">
                             <span className="text-[10px] text-[#00a9e2] uppercase mb-0.5 font-bold tracking-wider">Recuperado</span>
                             <span className="text-xs font-bold text-[#0369a1]">No</span>
                           </div>
                        </div>
                      </div>

                      {/* Hb Value Header */}
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-bold text-[#3b4754] mb-1">Hemoglobina (Hb)</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-[2.5rem] leading-none font-black tracking-tight text-[#1e293b]">6.1</span>
                          <span className="text-sm font-medium text-gray-400">mg/dL</span>
                        </div>
                      </div>
                      
                      {/* Bar Chart Section */}
                      <div className="relative pb-5 pt-1">
                        {/* Progress Bar Container */}
                        <div className="h-2.5 w-full flex rounded-full overflow-hidden shadow-inner bg-gray-100">
                          <div className="bg-[#f03e3e] h-full" style={{ width: '38%' }}></div>
                          <div className="bg-[#f59f00] h-full" style={{ width: '24%' }}></div>
                          <div className="bg-[#2b8a3e] h-full" style={{ width: '38%' }}></div>
                        </div>
                        
                        {/* Tooltip Marker */}
                        <div className="absolute top-[8px] left-[32%] flex flex-col items-center -translate-x-1/2 drop-shadow-md z-10 transition-transform hover:scale-105">
                          <div className="w-2 h-2 bg-[#1e293b] rotate-45 mb-[-5px]"></div>
                          <div className="bg-[#1e293b] text-white text-[8px] font-bold px-2 py-[2px] rounded tracking-wider relative z-10 w-max shadow-sm">
                            ACTUAL
                          </div>
                        </div>

                        {/* Labels underneath */}
                        <div className="flex w-full mt-[10px] text-[9px] font-bold tracking-wider text-gray-400">
                           <div className="w-[38%] text-left">SEVERA (&lt;&nbsp;7)</div>
                           <div className="w-[24%] text-center">MODERADA (7-10.9)</div>
                           <div className="w-[38%] text-right">NORMAL (&gt;&nbsp;12)</div>
                        </div>
                      </div>

                      {/* Diagnosis Result (Anemia severa) */}
                      <div className="w-full bg-gray-100 h-[1px] my-1"></div>
                      <div className="flex items-center justify-center pt-3 pb-1">
                         <div className="flex items-center gap-2 bg-[#fee2e2] px-4 py-1.5 rounded-full border border-[#fca5a5] shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse"></span>
                            <span className="font-bold text-[#b91c1c] text-sm uppercase tracking-wide">Anemia severa</span>
                         </div>
                      </div>

                    </div>
                    {/* Floating Button under Card 1 */}
                    <button className="flex items-center gap-2 pl-3 pr-4 py-1.5 bg-white border border-[#00a9e2] rounded-full text-[#00a9e2] text-sm font-medium -mt-[14px] z-10 shadow-sm hover:bg-[#00a9e2] hover:text-white transition-colors">
                      <Building2 size={16} />
                      MINSA 31/12/2025
                    </button>
                  </div>

                  {/* Spacer for layout balancing if needed in row, but flex-1 handles it. Can cap width of second card. */}

                  {/* Card 2: Datos del Carnet (Purple) */}
                  <div className="flex-1 flex flex-col items-center xl:items-start max-w-[400px]">
                    <div className="border border-[#8a3395] rounded-xl w-full p-5 flex flex-col bg-white shadow-sm pb-8">
                       <div className="text-[#8a3395] font-semibold mb-4">Datos del Carnet</div>
                       
                       <div className="flex gap-8 px-2 items-end mb-4">
                          <div className="flex items-baseline gap-1">
                            <span className="text-[#8a3395] text-4xl font-bold">0</span>
                            <span className="text-gray-400 text-sm font-medium">mg/dL</span>
                          </div>
                          
                          <div className="flex flex-col">
                            <span className="text-[#8a3395] text-xs mb-1">Ajuste de altitud:</span>
                            <div className="flex items-baseline gap-1">
                              <span className="text-[#8a3395] text-xl font-bold">0</span>
                              <span className="text-gray-400 text-sm font-medium">mg/dL</span>
                            </div>
                          </div>
                       </div>

                       <div className="px-2 flex flex-col gap-1.5 mt-2">
                         <div className="text-gray-500 text-sm">Ultimo control:</div>
                         <div className="text-[#8a3395] text-sm flex gap-1">
                           <span className="text-gray-500">Suplemento:</span> No
                         </div>
                       </div>
                    </div>
                    {/* Floating Button under Card 2 */}
                    <button className="flex items-center gap-2 pl-3 pr-4 py-1.5 bg-white border border-[#8a3395] rounded-full text-[#8a3395] text-sm font-medium -mt-[14px] z-10 shadow-sm hover:bg-[#8a3395] hover:text-white transition-colors">
                      <CalendarDays size={16} />
                      Registro -
                    </button>
                  </div>

                </div>

                {/* Purple Action Bar */}
                <div className="w-full bg-[#8a3395] rounded-md text-white px-4 py-3 pb-2 flex items-center mt-6 cursor-pointer hover:bg-[#7a2e84] transition-colors relative">
                   <PencilLine size={18} className="mr-2" />
                   <span className="font-medium text-sm">Registro de control de carnet</span>
                   <ChevronDown size={20} className="ml-auto" />
                   <div className="absolute top-full left-0 right-0 h-4 bg-white/0"></div> {/* spacer for visual */}
                </div>

                {/* Treatment Grid Matrix */}
                <div className="flex flex-col gap-5 mt-2 overflow-x-auto pb-4">
                  
                  {/* Grid Headers */}
                  <div className="flex min-w-[700px]">
                    {/* Header Col 1 (Labels) */}
                     <div className="w-[140px] shrink-0 flex flex-col gap-2 pr-4 justify-end">
                       <div className="border border-gray-200 rounded text-center py-1.5 text-xs text-gray-600">Periodo de tratamiento</div>
                     </div>
                     {/* Header Cols M1-M6 */}
                     <div className="flex-1 grid grid-cols-6 gap-2 items-end">
                       {['M1', 'M2', 'M3', 'M4', 'M5', 'M6'].map(month => (
                         <div key={month} className="border border-gray-200 rounded text-center py-1.5 text-xs text-gray-600 font-medium">
                           {month}
                         </div>
                       ))}
                     </div>
                  </div>

                  {/* Grid Rows Container */}
                  <div className="flex flex-col gap-6">
                    {/* Row 1: Fecha de Control */}
                    <div className="flex min-w-[700px] items-center">
                      <div className="w-[140px] shrink-0 pr-4 text-right">
                        <span className="text-xs font-bold text-gray-700">Fecha de Control</span>
                      </div>
                      <div className="flex-1 grid grid-cols-6 gap-2">
                        {['31/12/2025', '30/01/2026', '01/03/2026', '31/03/2026', '30/04/2026', '30/05/2026'].map((date, i) => (
                           <div key={i} className="text-center text-xs text-gray-600 font-medium">{date}</div>
                        ))}
                      </div>
                    </div>

                    {/* Row 2: Dosaje Hb */}
                    <div className="flex min-w-[700px] items-center">
                      <div className="w-[140px] shrink-0 pr-4 text-right">
                        <span className="text-xs font-bold text-gray-700">Dosaje Hb</span>
                      </div>
                      <div className="flex-1 grid grid-cols-6 gap-2 place-items-center">
                        <ValuePill value="8.2" active={true} />
                        <ValuePill value="-" active={false} />
                        <ValuePill value="-" active={false} />
                        <ValuePill value="-" active={false} />
                        <ValuePill value="-" active={false} />
                        <ValuePill value="-" active={false} />
                      </div>
                    </div>

                    {/* Row 3: Hb Ajustada */}
                    <div className="flex min-w-[700px] items-center">
                      <div className="w-[140px] shrink-0 pr-4 text-right">
                        <span className="text-xs font-bold text-gray-700">Hb Ajustada</span>
                      </div>
                      <div className="flex-1 grid grid-cols-6 gap-2 place-items-center">
                        <ValuePill value="6.1" active={true} />
                        <ValuePill value="-" active={false} />
                        <ValuePill value="-" active={false} />
                        <ValuePill value="-" active={false} />
                        <ValuePill value="-" active={false} />
                        <ValuePill value="-" active={false} />
                      </div>
                    </div>

                    {/* Row 4: Entrega de Suplemento */}
                    <div className="flex min-w-[700px] items-center">
                      <div className="w-[140px] shrink-0 pr-4 text-right">
                        <span className="text-xs font-bold text-gray-700 leading-tight block">Suplemento recibido<br/>(en EE.SS.)</span>
                      </div>
                      <div className="flex-1 grid grid-cols-6 gap-2 place-items-center">
                         {[1,2,3,4,5,6].map(i => (
                            <div key={i} className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                               <MoreHorizontal size={14} className="text-gray-400" />
                            </div>
                         ))}
                      </div>
                    </div>

                    {/* Row 5: Dosis de hierro en CIAI */}
                    <div className="flex min-w-[700px] items-center">
                      <div className="w-[140px] shrink-0 pr-4 text-right">
                        <span className="text-xs font-bold text-gray-700 leading-tight block">Dosis Hierro<br/>(CIAI)</span>
                      </div>
                      <div className="flex-1 grid grid-cols-6 gap-2 place-items-center">
                        {/* Ejemplo de dosis de 19 a 21 */}
                        <ValuePill value="20" active={true} />
                        <ValuePill value="-" active={false} />
                        <ValuePill value="-" active={false} />
                        <ValuePill value="-" active={false} />
                        <ValuePill value="-" active={false} />
                        <ValuePill value="-" active={false} />
                      </div>
                    </div>

                    {/* Row 6: Visitas Domiciliarias */}
                    <div className="flex min-w-[700px] items-center">
                      <div className="w-[140px] shrink-0 pr-4 text-right">
                        <span className="text-xs font-bold text-gray-700 leading-tight block">Visitas<br/>Domiciliarias</span>
                      </div>
                      <div className="flex-1 grid grid-cols-6 gap-2 place-items-center">
                        {/* Ejemplo de visitas de 1 a 4 */}
                        <ValuePill value="3" active={true} />
                        <ValuePill value="-" active={false} />
                        <ValuePill value="-" active={false} />
                        <ValuePill value="-" active={false} />
                        <ValuePill value="-" active={false} />
                        <ValuePill value="-" active={false} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Legend (Footer area) */}
                <div className="mt-8 border border-gray-200 rounded-lg p-3 flex justify-center items-center gap-8 bg-white max-w-3xl mx-auto shadow-sm">
                   <LegendItem 
                      icon={<AlertTriangle size={18} fill="#ff1744" stroke="white" className="text-white" />} 
                      IconComponent={null}
                      text="No Asistió" 
                   />
                   <LegendItem 
                      icon={<CheckCircle2 size={18} fill="#00a9e2" stroke="white" className="text-white" />} 
                      IconComponent={null}
                      text="Asistió" 
                   />
                   <LegendItem 
                      icon={<AlertTriangle size={18} fill="#ffc107" stroke="white" className="text-white" />} 
                      IconComponent={null}
                      text="A Destiempo" 
                   />
                   <LegendItem 
                      icon={
                        <div className="w-[18px] h-[18px] rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
                           <MoreHorizontal size={12} className="text-gray-400" />
                        </div>
                      }
                      IconComponent={null}
                      text="Pendiente" 
                   />
                </div>

             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Helper Components

function DetailRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col border-b border-gray-100 pb-2">
      <span className="text-xs text-gray-500 mb-0.5">{label}</span>
      <span className="text-[#8a3395] font-bold text-[13px] leading-tight">
        {value}
      </span>
    </div>
  );
}

function ValuePill({ value, active }: { value: string, active: boolean }) {
  if (active) {
    return (
      <div className="bg-[#00a9e2] text-white text-xs font-bold rounded px-3 py-1 min-w-[2.5rem] text-center shadow-sm">
        {value}
      </div>
    );
  }
  return (
    <div className="bg-[#f1f3f5] text-gray-400 text-xs font-bold rounded px-3 py-1 min-w-[2.5rem] text-center">
      {value}
    </div>
  );
}

function LegendItem({ 
  icon, 
  IconComponent, 
  text 
}: { 
  icon?: React.ReactNode, 
  IconComponent?: React.ElementType, 
  text: string 
}) {
  return (
    <div className="flex items-center gap-2">
      {icon ? icon : (IconComponent && <IconComponent size={18} />)}
      <span className="text-xs font-semibold text-gray-700">{text}</span>
    </div>
  );
}

