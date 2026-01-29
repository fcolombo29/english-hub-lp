import heroVideo from '@/assets/hero-video.mp4';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-narrow section-padding">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background mb-6 animate-fade-in">
              Aprendé inglés con nosotros
            </h1>
            <p className="text-lg md:text-xl text-background/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Más de 35 años formando estudiantes en La Plata
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
    </section>
  );
};

export default Hero;
