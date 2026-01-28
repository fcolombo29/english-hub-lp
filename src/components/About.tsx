import { Award, Users, BookOpen, Globe } from 'lucide-react';
import instituteBuilding from '@/assets/institute-building.jpg';
const features = [{
  icon: Award,
  title: 'Desde 1987',
  description: 'Más de 35 años de trayectoria educativa en La Plata'
}, {
  icon: Users,
  title: 'Grupos reducidos',
  description: 'Atención personalizada para cada alumno'
}, {
  icon: BookOpen,
  title: 'Metodología propia',
  description: 'Enfoque comunicativo adaptado a cada edad'
}, {
  icon: Globe,
  title: 'Exámenes internacionales',
  description: 'Preparación oficial para Cambridge y más'
}];
const About = () => {
  return <section id="nosotros" className="section-padding bg-cream">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Conocenos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos un instituto de inglés con más de tres décadas de experiencia, 
            comprometidos con la excelencia educativa.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img alt="Instituto Segunda Lengua" className="w-full h-[400px] object-cover rounded-lg shadow-xl" src="/lovable-uploads/338859e3-a85f-4e60-9081-67c76ad36a4a.jpg" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-4xl font-display font-bold">35+</p>
              <p className="text-sm">años de experiencia</p>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              Tu segunda lengua empieza acá
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Desde 1987, en Segunda Lengua nos dedicamos a enseñar inglés con pasión y profesionalismo. 
              Nuestro equipo de docentes altamente capacitados trabaja con grupos reducidos para garantizar 
              una atención personalizada.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Creemos que aprender un idioma debe ser una experiencia enriquecedora y accesible. 
              Por eso, desarrollamos programas adaptados a cada etapa de la vida, desde los más 
              chicos hasta adultos profesionales.
            </p>
            <a href="#contacto" className="btn-primary inline-block">
              Quiero más información
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="text-center p-6 bg-background rounded-lg shadow-sm card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default About;