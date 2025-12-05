import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { TrendChart } from './components/TrendChart';
import { consultCakeTrends } from './services/geminiService';
import { Section } from './types';
import { Instagram, Mail, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [section, setSection] = useState<Section>(Section.HOME);
  const [trendTip, setTrendTip] = useState<string>('');

  useEffect(() => {
    consultCakeTrends().then(setTrendTip);
  }, []);

  const renderSection = () => {
    switch (section) {
      case Section.HOME:
        return (
          <>
            <Hero />
            <About trendTip={trendTip} />
            <PollWidget />
          </>
        );
      case Section.PORTFOLIO:
        return <Portfolio />;
      case Section.EXPERIENCE:
        return <Experience />;
      case Section.CONTACT:
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-luxury-900 font-sans selection:bg-gold-500/30 selection:text-white">
      <Navigation currentSection={section} setSection={setSection} />
      
      <main className="pt-20">
        {renderSection()}
      </main>

      <Footer />
    </div>
  );
};

const PollWidget = () => {
  const [voted, setVoted] = useState<string | null>(null);
  
  const handleVote = (option: string) => {
    setVoted(option);
  };

  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Consultoria Interativa</span>
        <h3 className="text-2xl md:text-3xl font-serif text-white mb-10">Qual estilo define o seu grande dia?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            onClick={() => handleVote('organic')}
            className={`group relative p-8 border transition-all duration-500 ${voted === 'organic' ? 'border-gold-500 bg-gold-900/10' : 'border-zinc-800 bg-zinc-900 hover:border-zinc-600'}`}
          >
            <div className="h-40 bg-zinc-800 mb-6 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
               <img src="https://picsum.photos/id/106/600/400" alt="Organic" className="w-full h-full object-cover opacity-60 group-hover:opacity-100" />
            </div>
            <h4 className="text-xl font-serif text-white mb-2">Minimalismo Orgânico</h4>
            <p className="text-zinc-500 text-sm font-light">Texturas naturais, flores secas e tons terrosos.</p>
            {voted === 'organic' && <div className="absolute top-4 right-4 text-gold-500"><CheckCircle2 /></div>}
            {voted && <div className="mt-4 w-full bg-zinc-800 h-1 rounded-full overflow-hidden"><div className="bg-gold-500 h-full" style={{width: '65%'}}></div></div>}
            {voted && <p className="text-right text-xs text-gold-500 mt-1">65% das noivas escolheram</p>}
          </button>

          <button 
            onClick={() => handleVote('classic')}
            className={`group relative p-8 border transition-all duration-500 ${voted === 'classic' ? 'border-gold-500 bg-gold-900/10' : 'border-zinc-800 bg-zinc-900 hover:border-zinc-600'}`}
          >
             <div className="h-40 bg-zinc-800 mb-6 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
               <img src="https://picsum.photos/id/111/600/400" alt="Classic" className="w-full h-full object-cover opacity-60 group-hover:opacity-100" />
            </div>
            <h4 className="text-xl font-serif text-white mb-2">Clássico Romântico</h4>
            <p className="text-zinc-500 text-sm font-light">Acabamento liso, rendas de açúcar e flores brancas.</p>
            {voted === 'classic' && <div className="absolute top-4 right-4 text-gold-500"><CheckCircle2 /></div>}
            {voted && <div className="mt-4 w-full bg-zinc-800 h-1 rounded-full overflow-hidden"><div className="bg-zinc-500 h-full" style={{width: '35%'}}></div></div>}
            {voted && <p className="text-right text-xs text-zinc-500 mt-1">35% das noivas escolheram</p>}
          </button>
        </div>
        
        <p className="mt-8 text-zinc-500 text-sm italic">"O design ideal é aquele que conta a sua história antes mesmo da primeira fatia ser cortada." — Patricia Alves</p>
      </div>
    </section>
  )
}

const Hero = () => (
  <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://picsum.photos/id/42/1920/1080" 
        alt="Texture Background" 
        className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-900/80 via-luxury-900/40 to-luxury-900"></div>
    </div>
    
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <p className="text-gold-300 tracking-[0.4em] uppercase text-xs md:text-sm mb-6 animate-fade-in">Grife do Açúcar</p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight drop-shadow-2xl">
        Arte em cada detalhe, <br/>
        <span className="text-gold-200 italic">sabor em cada fatia.</span>
      </h1>
      <p className="text-zinc-300 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto tracking-wide">
        Confeitaria artística especializada em transformar sonhos e celebrações em obras de arte comestíveis.
      </p>
      <button className="group bg-transparent border border-gold-400 text-gold-400 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gold-400 hover:text-luxury-900 transition-all duration-500">
        Solicitar Orçamento Exclusivo
        <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </section>
);

const About = ({ trendTip }: { trendTip: string }) => (
  <section className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="relative group">
        <div className="absolute inset-0 bg-gold-500/10 transform translate-x-4 translate-y-4 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
        <img 
          src="https://picsum.photos/id/338/600/800" 
          alt="Patricia Alves" 
          className="w-full h-auto grayscale opacity-90 rounded-sm relative z-10 shadow-2xl"
        />
        <div className="absolute -bottom-8 -right-8 w-48 bg-luxury-900 p-6 border border-zinc-800 shadow-xl hidden md:block z-20">
          <p className="text-gold-400 text-4xl font-serif mb-1">10+</p>
          <p className="text-zinc-500 text-xs uppercase tracking-widest">Anos de Excelência</p>
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-serif text-white mb-6">Patricia Alves <span className="text-gold-500">|</span> Cake Designer</h2>
        <p className="text-zinc-400 mb-6 leading-relaxed font-light text-lg">
          Minha jornada não começou na cozinha, mas na busca pela beleza. Acredito que um bolo de casamento não é apenas uma sobremesa, 
          é o ponto central da decoração e a última memória sensorial de uma noite perfeita.
        </p>
        <p className="text-zinc-400 mb-8 leading-relaxed font-light text-lg">
          Como mentora de confeiteiras e especialista em texturas contemporâneas, dedico-me a criar projetos únicos 
          que refletem a personalidade sofisticada dos meus clientes.
        </p>

        {/* Authority Section with Chart */}
        <div className="border-t border-zinc-800 pt-8">
           <div className="flex items-center gap-3 mb-6">
             <div className="bg-gold-500/10 p-3 rounded-full">
               <span className="text-gold-400 text-xl">✨</span>
             </div>
             <div>
               <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Insight da Artista</p>
               <p className="text-zinc-300 italic text-sm font-serif">"{trendTip}"</p>
             </div>
           </div>
           
           <TrendChart />
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-20 max-w-3xl mx-auto px-4" id="contact">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Consultoria & Orçamentos</h2>
      <p className="text-zinc-400 font-light">
        Para manter a excelência e exclusividade, atendemos um número limitado de eventos por mês. 
        Conte-nos sobre o seu sonho.
      </p>
    </div>

    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Nome Completo</label>
          <input type="text" className="w-full bg-zinc-900 border border-zinc-800 p-4 text-zinc-200 focus:outline-none focus:border-gold-500/50 transition-colors placeholder-zinc-700" placeholder="Ex: Ana Souza" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Data do Evento</label>
          <input type="date" className="w-full bg-zinc-900 border border-zinc-800 p-4 text-zinc-200 focus:outline-none focus:border-gold-500/50 transition-colors" />
        </div>
      </div>
      
      <div>
        <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Tipo de Evento</label>
        <select className="w-full bg-zinc-900 border border-zinc-800 p-4 text-zinc-200 focus:outline-none focus:border-gold-500/50 transition-colors">
          <option>Casamento (Wedding)</option>
          <option>Debutante (15 Anos)</option>
          <option>Corporativo de Luxo</option>
          <option>Bodas / Aniversário Premium</option>
        </select>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Detalhes do Sonho</label>
        <textarea rows={4} className="w-full bg-zinc-900 border border-zinc-800 p-4 text-zinc-200 focus:outline-none focus:border-gold-500/50 transition-colors placeholder-zinc-700" placeholder="Conte sobre o estilo, cores e referências..."></textarea>
      </div>

      <button type="button" className="w-full bg-gold-600 text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors shadow-lg shadow-gold-900/20">
        Solicitar Orçamento
      </button>
    </form>
  </section>
);

const Footer = () => (
  <footer className="bg-black py-12 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-6 md:mb-0">
        <h2 className="text-xl font-serif text-white">PATRICIA ALVES</h2>
        <p className="text-[10px] text-zinc-500 tracking-[0.3em] uppercase">Atelier</p>
      </div>
      
      <div className="flex gap-8 text-zinc-500">
        <a href="#" className="hover:text-gold-400 transition-colors"><Instagram size={20} /></a>
        <a href="#" className="hover:text-gold-400 transition-colors"><Mail size={20} /></a>
        <a href="#" className="hover:text-gold-400 transition-colors"><MapPin size={20} /></a>
      </div>
      
      <div className="mt-6 md:mt-0 text-zinc-600 text-xs">
        &copy; 2024 Patricia Alves. All rights reserved.
      </div>
    </div>
  </footer>
);

export default App;