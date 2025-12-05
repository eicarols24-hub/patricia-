import React from 'react';
import { Gift, Clock, Star } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* VIP Tasting Box */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-gold-500/30"></div>
          <div className="absolute -bottom-6 -right-6 w-20 h-20 border-b-2 border-r-2 border-gold-500/30"></div>
          
          <div className="bg-luxury-900 p-10 border border-white/5 shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-gold-900/30 text-gold-400 px-3 py-1 text-[10px] uppercase tracking-widest border border-gold-500/20">Edição Limitada</span>
              <Gift className="text-gold-400 w-6 h-6" />
            </div>
            
            <h3 className="text-3xl font-serif text-white mb-2">The Tasting Experience</h3>
            <p className="text-zinc-400 text-sm mb-8 font-light">
              Uma curadoria mensal de 4 sabores assinatura para noivas e clientes exigentes. 
              A experiência sensorial completa antes do grande dia.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-zinc-300 text-sm">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span>
                Pistache Siciliano com Framboesa
              </li>
              <li className="flex items-center text-zinc-300 text-sm">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span>
                Red Velvet com Redução de Balsâmico
              </li>
              <li className="flex items-center text-zinc-300 text-sm">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span>
                Limão Siciliano & Lavanda
              </li>
              <li className="flex items-center text-zinc-300 text-sm">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></span>
                Chocolate Belga 70% com Caramelo Salgado
              </li>
            </ul>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
              <div className="text-center">
                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Disponíveis</p>
                <p className="text-xl font-serif text-white">04 <span className="text-zinc-600 text-sm">/ 20</span></p>
              </div>
              <button className="px-8 py-3 bg-gold-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors shadow-lg shadow-gold-900/20">
                Reservar Caixa
              </button>
            </div>
          </div>
        </div>

        {/* Slow Living / Philosophy */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Slow Design</h2>
            <p className="text-zinc-400 leading-relaxed font-light text-lg">
              Na contramão da produção em massa, nosso atelier respeita o tempo. O tempo de maturação dos recheios, 
              o tempo de descanso da massa, e o tempo necessário para pintar, à mão, cada detalhe do seu sonho.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-zinc-800/30 p-6 rounded-lg border border-white/5">
              <Clock className="w-8 h-8 text-gold-400 mb-4 opacity-80" />
              <h4 className="text-white font-serif text-lg mb-2">Tempo de Criação</h4>
              <p className="text-zinc-500 text-sm">Limitamos nossa agenda a 4 casamentos por mês para garantir dedicação exclusiva.</p>
            </div>
            <div className="bg-zinc-800/30 p-6 rounded-lg border border-white/5">
              <Star className="w-8 h-8 text-gold-400 mb-4 opacity-80" />
              <h4 className="text-white font-serif text-lg mb-2">Ingredientes Nobres</h4>
              <p className="text-zinc-500 text-sm">Manteiga francesa, chocolate belga e baunilha de Madagascar. Sem pré-misturas.</p>
            </div>
          </div>
          
          <div className="h-1 w-24 bg-gold-500/50"></div>
        </div>

      </div>
    </section>
  );
};