/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
          
          {/* Sidebar (Left Column) */}
          <div className="w-full lg:w-[300px] shrink-0 border-b lg:border-b-0 lg:border-r border-gray-200 p-6 overflow-y-auto lg:overflow-y-auto flex flex-col gap-6 bg-white z-10 max-h-[250px] lg:max-h-full">
            
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
                          <span className="text-[#00a9e2] font-bold text-lg leading-tight tracking-tight uppercase">Diagnóstico actual</span>
                          <span className="text-gray-400 text-xs mt-1 font-medium italic">Evaluado el 31/12/2025</span>
                        </div>
                        
                        <div className="flex gap-2">
                           <Badge label="Referido" value="No" />
                           <Badge label="Recuperado" value="No" />
                        </div>
                      </div>

                      {/* Prominent Hb Value Readout - Executive Tone */}
                      <div className="flex items-center justify-between bg-white border border-[#00a9e2] rounded-2xl p-3 mb-0 shadow-[0_2px_15px_rgba(0,169,226,0.06)] relative z-20 overflow-hidden h-[78px]">
                        {/* Status Color Accent - Now Celeste */}
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#00a9e2] shadow-[1px_0_5px_rgba(0,169,226,0.1)]"></div>
                        
                        <div className="flex flex-col pl-4 justify-center h-[49px]">
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Resultado de Hb</span>
                           <div className="flex items-baseline gap-1.5">
                             <span className="text-[46px] font-bold text-[#00a9e2] tracking-tighter leading-none drop-shadow-sm">6.1</span>
                             <span className="text-xs font-bold text-slate-500 leading-none">mg/dL</span>
                           </div>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 pr-2 h-[49px] justify-center text-center">
                           <div className="px-4 py-1.5 rounded-full flex items-center justify-center gap-2 border border-red-300 bg-red-50 shadow-sm">
                              <span className="font-extrabold text-red-800 text-[12px] uppercase tracking-wider">Anemia severa</span>
                           </div>
                           <span className="text-[9px] font-black text-[#00a9e2] uppercase tracking-widest opacity-80 italic leading-none">Nivel Crítico</span>
                        </div>
                      </div>
                      
                      {/* Vibrant Gauge Section - Executive Optimized */}
                      <div className="relative pt-5 pb-1.5 px-2 flex flex-col items-center bg-white rounded-b-2xl">
                        {/* Connecting Pointer - Now Celeste */}
                        <div className="absolute top-[-1px] left-[43.57%] flex flex-col items-center -translate-x-1/2 z-40">
                           <div className="w-[1.5px] h-[18px] bg-[#00a9e2] shadow-[0_0_5px_rgba(0,169,226,0.2)] rounded-full"></div>
                        </div>

                        {/* Subtle Boundary Numbers ABOVE THE BAR */}
                        <div className="absolute top-[4.5px] left-[50%] -translate-x-1/2">
                           <span className="text-[9px] font-black text-slate-500/40">7.0</span>
                        </div>
                        <div className="absolute top-[4.5px] left-[68%] -translate-x-1/2">
                           <span className="text-[9px] font-black text-slate-500/40">9.5</span>
                        </div>
                        <div className="absolute top-[4.5px] left-[75%] -translate-x-1/2">
                           <span className="text-[9px] font-black text-slate-500/40">10.5</span>
                        </div>

                        {/* The Thin Gauge Bar - 9px height */}
                        <div className="h-[9px] w-full mt-1 flex rounded-full overflow-hidden bg-slate-200 relative z-10 border border-slate-100">
                          <div className="bg-red-500 h-full relative" style={{ width: '50%' }}></div>
                          <div className="bg-orange-500 h-full relative" style={{ width: '18%' }}></div>
                          <div className="bg-yellow-400 h-full relative" style={{ width: '7%' }}></div>
                          <div className="bg-green-500 h-full relative" style={{ width: '25%' }}></div>
                        </div>

                        {/* Labels underneath */}
                        <div className="flex w-full mt-1 px-1 justify-between text-[8px] font-black text-slate-500/80 uppercase tracking-wide">
                           <span className="w-[50%] text-center ml-[-10%]">Severa</span>
                           <span className="w-[18%] text-center">Mod.</span>
                           <span className="w-[7%] text-center">Leve</span>
                           <span className="w-[25%] text-center">Normal</span>
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
                <div className="flex flex-col mb-2">
                  <div className="text-[11px] text-[#00a9e2] font-medium bg-[#f0f9ff] px-3 py-1.5 border border-[#bae6fd] rounded-md md:hidden mb-4 flex items-center justify-center text-center">
                    ← Desliza horizontalmente para ver todos los meses →
                  </div>
                  
                  <div className="flex flex-col gap-5 overflow-x-auto pb-4 container-scrollbar">
                  
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
                    <div className="flex min-w-[700px] items-start pt-3 border-t border-gray-100">
                      <div className="w-[140px] shrink-0 pr-4 text-right mt-1">
                        <span className="text-xs font-bold text-gray-700 leading-tight block">Visitas<br/>Domiciliarias</span>
                        <span className="text-[9px] text-[#8a3395] font-medium mt-1.5 block leading-tight">4 visitas planeadas<br/>al mes</span>
                      </div>
                      <div className="flex-1 grid grid-cols-6 gap-2 place-items-start">
                        {/* M1: Diciembre */}
                        <div className="w-full flex flex-col gap-1.5">
                           <VisitPill number={1} status="attended" date="05 Dic" />
                           <VisitPill number={2} status="missed" date="12 Dic" />
                           <VisitPill number={3} status="attended" date="19 Dic" />
                           <VisitPill number={4} status="pending" date="26 Dic" />
                        </div>
                        {/* M2: Enero */}
                        <div className="w-full flex flex-col gap-1.5">
                           <VisitPill number={1} status="pending" date="02 Ene" />
                           <VisitPill number={2} status="pending" date="09 Ene" />
                           <VisitPill number={3} status="pending" date="16 Ene" />
                           <VisitPill number={4} status="pending" date="23 Ene" />
                        </div>
                        {/* M3: Marzo */}
                        <div className="w-full flex flex-col gap-1.5">
                           <VisitPill number={1} status="pending" date="02 Mar" />
                           <VisitPill number={2} status="pending" date="09 Mar" />
                           <VisitPill number={3} status="pending" date="16 Mar" />
                           <VisitPill number={4} status="pending" date="23 Mar" />
                        </div>
                        {/* M4: Marzo */}
                        <div className="w-full flex flex-col gap-1.5">
                           <VisitPill number={1} status="pending" date="05 Mar" />
                           <VisitPill number={2} status="pending" date="12 Mar" />
                           <VisitPill number={3} status="pending" date="19 Mar" />
                           <VisitPill number={4} status="pending" date="26 Mar" />
                        </div>
                        {/* M5: Abril */}
                        <div className="w-full flex flex-col gap-1.5">
                           <VisitPill number={1} status="pending" date="05 Abr" />
                           <VisitPill number={2} status="pending" date="12 Abr" />
                           <VisitPill number={3} status="pending" date="19 Abr" />
                           <VisitPill number={4} status="pending" date="26 Abr" />
                        </div>
                        {/* M6: Mayo */}
                        <div className="w-full flex flex-col gap-1.5">
                           <VisitPill number={1} status="pending" date="05 May" />
                           <VisitPill number={2} status="pending" date="12 May" />
                           <VisitPill number={3} status="pending" date="19 May" />
                           <VisitPill number={4} status="pending" date="26 May" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                 {/* Legend (Footer area) */}
                 <div className="mt-8 border border-gray-200 rounded-lg p-3 flex justify-center items-center gap-8 bg-white max-w-3xl mx-auto shadow-sm">
                    <LegendItem 
                       icon={<AlertTriangle size={18} fill="#ff1744" stroke="white" className="text-white" />} 
                       text="No Asistió" 
                    />
                    <LegendItem 
                       icon={<CheckCircle2 size={18} fill="#00a9e2" stroke="white" className="text-white" />} 
                       text="Asistió" 
                    />
                    <LegendItem 
                       icon={<AlertTriangle size={18} fill="#ffc107" stroke="white" className="text-white" />} 
                       text="A Destiempo" 
                    />
                    <LegendItem 
                       icon={
                         <div className="w-[18px] h-[18px] rounded-full bg-gray-200 flex items-center justify-center border border-gray-300">
                            <MoreHorizontal size={12} className="text-gray-400" />
                         </div>
                       }
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

function Badge({ label, value }: { label: string, value: string }) {
  return (
    <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-xl px-3 py-2 flex flex-col items-center shadow-sm min-w-[80px]">
      <span className="text-[10px] text-[#00a9e2] uppercase mb-0.5 font-black tracking-widest opacity-60">{label}</span>
      <span className="text-sm font-black text-[#0369a1]">{value}</span>
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
  IconComponent?: any, 
  text: string 
}) {
  return (
    <div className="flex items-center gap-2">
      {icon ? icon : (IconComponent && <IconComponent size={18} />)}
      <span className="text-xs font-semibold text-gray-700">{text}</span>
    </div>
  );
}

function VisitPill({ 
  number, 
  status, 
  date 
}: { 
  number: number, 
  status: 'attended' | 'missed' | 'pending', 
  date: string 
}) {
  const isAttended = status === 'attended';
  const isMissed = status === 'missed';

  return (
    <div className={`flex justify-between items-center px-1.5 py-1 rounded w-full border transition-all ${
      isAttended ? 'bg-[#f0f9ff] border-[#bae6fd] text-[#00a9e2]' :
      isMissed ? 'bg-[#fee2e2] border-[#fca5a5] text-[#ef4444]' :
      'bg-white border-gray-200 text-gray-400'
    } hover:shadow-sm`}>
      <div className="flex items-center gap-1.5">
        <span className={`font-black text-[10px] ${isAttended ? 'text-[#0369a1]' : isMissed ? 'text-[#b91c1c]' : 'text-gray-500'}`}>
          V{number}
        </span>
        {isAttended && <CheckCircle2 size={12} strokeWidth={3} className="text-[#00a9e2]" />}
        {isMissed && <AlertTriangle size={12} strokeWidth={3} className="text-[#ef4444]" />}
        {!isAttended && !isMissed && <MoreHorizontal size={12} className="text-gray-300" />}
      </div>
      <span className="text-[10px] font-semibold tracking-tighter truncate ml-1">{date}</span>
    </div>
  );
}

