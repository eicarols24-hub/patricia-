import React, { useState } from 'react';
import { CakeProject } from '../types';
import { generateArtisticDescription } from '../services/geminiService';
import { Sparkles, ZoomIn, X, Loader2, Headphones, Maximize2 } from 'lucide-react';

const projects: CakeProject[] = [
  {
    id: '1',
    title: 'O Casamento na Toscana',
    category: 'Wedding',
    imageUrl: 'https://picsum.photos/id/1080/800/1000',
    baseDescription: 'Bolo de 4 andares com textura de pedra rústica, flores de açúcar em tons terracota e recheio de pistache siciliano.',
  },
  {
    id: '2',
    title: 'Golden Age',
    category: 'Artistic',
    imageUrl: 'https://picsum.photos/id/431/800/1000',
    baseDescription: 'Bolo preto com folhas de ouro 24k comestíveis, ganache de chocolate belga e estrutura geométrica moderna.',
  },
  {
    id: '3',
    title: 'Jardim de Monet',
    category: 'Debutante',
    imageUrl: 'https://picsum.photos/id/360/800/1000',
    baseDescription: 'Pintura à mão em buttercream translúcido, inspiração impressionista, sabor frutas vermelhas com champagne.',
  },
  {
    id: '4',
    title: 'Minimalista Concreto',
    category: 'Corporate',
    imageUrl: 'https://picsum.photos/id/106/800/1000',
    baseDescription: 'Acabamento cinza concreto, quinas imperfeitas propositais, sabor café arábica e caramelo salgado.',
  }
];

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CakeProject | null>(null);
  const [story, setStory] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [isMacroMode, setIsMacroMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenProject = (project: CakeProject) => {
    setSelectedProject(project);
    setStory(''); // Reset story
    setIsMacroMode(false);
    setIsPlaying(false);
  };

  const handleGenerateStory = async () => {
    if (!selectedProject) return;
    setLoading(true);
    const text = await generateArtisticDescription(selectedProject.title, selectedProject.baseDescription);
    setStory(text);
    setLoading(false);
  };

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif text-gold-100 mb-4">Portfólio Autoral</h2>
        <p className="text-zinc-500 font-light tracking-wide max-w-2xl mx-auto">
          Cada projeto é uma narrativa única, traduzida em açúcar, textura e sabor.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group relative cursor-pointer overflow-hidden rounded-sm aspect-[3/4]"
            onClick={() => handleOpenProject(project)}
          >
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <span className="text-gold-400 text-xs uppercase tracking-widest mb-1">{project.category}</span>
              <h3 className="text-white font-serif text-xl">{project.title}</h3>
              <div className="flex items-center text-zinc-300 text-xs mt-2">
                <ZoomIn className="w-3 h-3 mr-1" /> Ver detalhes
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <div className="bg-luxury-800 w-full max-w-6xl rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/10 max-h-[90vh]">
            
            {/* Image Side */}
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-black">
               <img 
                 src={selectedProject.imageUrl} 
                 alt={selectedProject.title} 
                 className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${isMacroMode ? 'scale-[2.5] origin-center' : 'scale-100'}`} 
               />
               
               {/* Image Controls */}
               <div className="absolute bottom-6 left-6 flex gap-3">
                  <button 
                    onClick={() => setIsMacroMode(!isMacroMode)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors backdrop-blur-md ${isMacroMode ? 'bg-gold-500 text-white' : 'bg-black/50 text-white hover:bg-black/70'}`}
                  >
                    <Maximize2 size={14} />
                    {isMacroMode ? 'Vista Geral' : 'Ver Textura (Macro)'}
                  </button>
               </div>

               <button 
                 onClick={() => setSelectedProject(null)}
                 className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 md:hidden z-10"
               >
                 <X size={20} />
               </button>
            </div>

            {/* Content Side */}
            <div className="md:w-1/2 p-8 md:p-12 relative flex flex-col justify-center overflow-y-auto">
              <button 
                 onClick={() => setSelectedProject(null)}
                 className="absolute top-4 right-4 text-zinc-500 hover:text-white hidden md:block"
               >
                 <X size={24} />
               </button>

              <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">
                {selectedProject.category} Collection
              </span>
              <h3 className="text-4xl font-serif text-white mb-6 leading-tight">{selectedProject.title}</h3>
              
              <div className="space-y-8 text-zinc-400 font-light">
                <p>{selectedProject.baseDescription}</p>

                {/* Audio Experience */}
                <div className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-lg border border-white/5">
                  <button 
                    onClick={toggleAudio}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isPlaying ? 'bg-gold-500 text-white' : 'bg-zinc-800 text-gold-400 hover:bg-zinc-700'}`}
                  >
                    {isPlaying ? (
                      <div className="flex gap-1 h-4 items-end">
                        <div className="w-1 bg-white animate-[bounce_1s_infinite]"></div>
                        <div className="w-1 bg-white animate-[bounce_1.2s_infinite]"></div>
                        <div className="w-1 bg-white animate-[bounce_0.8s_infinite]"></div>
                      </div>
                    ) : (
                      <Headphones size={20} />
                    )}
                  </button>
                  <div>
                    <p className="text-white text-sm font-serif">Diário da Artista</p>
                    <p className="text-zinc-500 text-xs uppercase tracking-wide">
                      {isPlaying ? 'Reproduzindo inspiração...' : 'Ouvir a história do design'}
                    </p>
                  </div>
                </div>
                
                {/* AI Story Section */}
                <div className="bg-zinc-900/30 p-6 border-l border-gold-600/50 rounded-r-lg min-h-[120px]">
                  {story ? (
                    <p className="text-gold-100 italic font-serif leading-relaxed animate-fade-in">
                      "{story}"
                    </p>
                  ) : (
                    <div className="flex flex-col items-start gap-3">
                      <p className="text-sm text-zinc-500">Leia a curadoria artística desta peça.</p>
                      <button 
                        onClick={handleGenerateStory}
                        disabled={loading}
                        className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 hover:text-gold-200 transition-colors"
                      >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                        {loading ? 'Escrevendo...' : 'Ler Descrição Poética'}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
                <span className="text-zinc-600 text-sm">Design Exclusivo</span>
                <button 
                    onClick={() => {
                        setSelectedProject(null);
                        const contactSection = document.getElementById('contact');
                        contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 bg-zinc-100 text-zinc-900 text-xs font-bold uppercase tracking-widest hover:bg-gold-200 transition-colors"
                >
                  Solicitar Semelhante
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};