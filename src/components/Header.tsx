import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/logo.jpg';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    href: '#inicio',
    label: 'Inicio'
  }, {
    href: '#nosotros',
    label: 'Nosotros'
  }, {
    href: '#cursos',
    label: 'Cursos'
  }, {
    href: '#contacto',
    label: 'Contacto'
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-narrow section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <img src={logo} alt="Segunda Lengua" className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium">
                {link.label}
              </a>)}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-2 text-primary font-semibold">
            <Phone className="w-4 h-4" />
            <span>(0221) 421-7061</span>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground" aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-lg">
                  {link.label}
                </a>)}
              <div className="flex items-center gap-2 text-primary font-semibold mt-2 pt-4 border-t border-border">
                <Phone className="w-4 h-4" />
                <span>(0221) 421-7061</span>
              </div>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;