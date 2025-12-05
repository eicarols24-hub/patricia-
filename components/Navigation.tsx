import React from 'react';
import { Section } from '../types';
import { Menu, X, Crown } from 'lucide-react';

interface NavigationProps {
  currentSection: Section;
  setSection: (s: Section) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSection, setSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: Section.HOME, label: 'Atelier' },
    { id: Section.PORTFOLIO, label: 'Galeria' },
    { id: Section.EXPERIENCE, label: 'Experiência VIP' },
    { id: Section.CONTACT, label: 'Consultoria' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-luxury-900/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => setSection(Section.HOME)}>
            <Crown className="h-6 w-6 text-gold-400 mr-2" />
            <div>
              <h1 className="text-xl font-serif text-gold-100 tracking-wider">PATRICIA ALVES</h1>
              <p className="text-[10px] text-zinc-400 tracking-[0.3em] uppercase">Cake Designer</p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium tracking-widest transition-all duration-300 ${
                    currentSection === item.id
                      ? 'text-gold-400 border-b border-gold-400'
                      : 'text-zinc-300 hover:text-white hover:border-b hover:border-zinc-500'
                  }`}
                >
                  {item.label.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-luxury-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSection(item.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-4 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 border-l-2 border-transparent hover:border-gold-400"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};