import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/hero-classroom.jpg';
import childrenClass from '@/assets/children-class.jpg';
import teensClass from '@/assets/teens-class.jpg';

const slides = [
  {
    image: heroImage,
    title: 'Aprendé inglés con nosotros',
    subtitle: 'Más de 35 años formando estudiantes en La Plata',
  },
  {
    image: childrenClass,
    title: 'Cursos para todas las edades',
    subtitle: 'Desde los más chicos hasta adultos profesionales',
  },
  {
    image: teensClass,
    title: 'Preparación para exámenes internacionales',
    subtitle: 'Cambridge, TOEFL y más certificaciones oficiales',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-narrow section-padding">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background mb-6 animate-fade-in">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-background/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#contacto" className="btn-primary text-center">
                Contactanos
              </a>
              <a href="#cursos" className="btn-outline bg-background/10 text-background border-background hover:bg-background hover:text-foreground text-center">
                Ver cursos
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors text-background"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors text-background"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary w-8' : 'bg-background/50 hover:bg-background/80'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
