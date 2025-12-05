import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', organic: 30, classic: 50 },
  { name: 'Fev', organic: 35, classic: 48 },
  { name: 'Mar', organic: 45, classic: 45 },
  { name: 'Abr', organic: 55, classic: 40 },
  { name: 'Mai', organic: 65, classic: 35 },
  { name: 'Jun', organic: 78, classic: 30 },
];

export const TrendChart: React.FC = () => {
  return (
    <div className="w-full h-64 mt-4 bg-zinc-900/30 p-6 rounded-sm border border-white/5 backdrop-blur-sm">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h3 className="text-gold-200 font-serif text-lg">Tendências de Design 2024</h3>
          <p className="text-xs text-zinc-600 uppercase tracking-widest mt-1">Análise de Preferência: Noivas Alta Costura</p>
        </div>
        <div className="flex gap-4 text-[10px] uppercase tracking-wider">
          <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-gold-500 mr-2"></span>Orgânico</div>
          <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-zinc-600 mr-2"></span>Clássico</div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={160}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#d69129" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#d69129" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorClassic" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#52525b" stopOpacity={0.2}/>
              <stop offset="95%" stopColor="#52525b" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
          <XAxis dataKey="name" stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} tick={{ fill: '#71717a' }} />
          <YAxis stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} tick={{ fill: '#71717a' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', color: '#f4f4f5', fontSize: '12px' }}
            itemStyle={{ color: '#d4d4d8' }}
            cursor={{ stroke: '#3f3f46', strokeWidth: 1 }}
          />
          <Area type="monotone" dataKey="organic" stroke="#d69129" strokeWidth={2} fillOpacity={1} fill="url(#colorOrganic)" />
          <Area type="monotone" dataKey="classic" stroke="#52525b" strokeWidth={2} fillOpacity={1} fill="url(#colorClassic)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};