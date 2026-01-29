import { useState } from 'react';
import { ChevronDown, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import childrenClass from '@/assets/children-class.jpg';
import teensClass from '@/assets/teens-class.jpg';
import adultsClass from '@/assets/adults-class.jpg';
interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  image: string;
}
const courses: Course[] = [{
  id: 'ninos',
  title: 'Cursos para Niños',
  subtitle: 'Niños',
  description: ['Aprendizaje lúdico y dinámico adaptado a su edad', 'Primer contacto natural con el idioma inglés', 'Incorporación temprana de vocabulario y estructuras básicas', 'Desarrollo de la comprensión auditiva y expresión oral'],
  image: childrenClass
}, {
  id: 'jovenes',
  title: 'Cursos para Jóvenes',
  subtitle: 'Jóvenes',
  description: ['Preparación para exámenes internacionales de Cambridge', 'Herramientas para el futuro académico y laboral', 'Enfoque en comunicación fluida y natural', 'Preparación para viajes y experiencias internacionales'],
  image: teensClass
}, {
  id: 'adultos',
  title: 'Cursos para Adultos',
  subtitle: 'Adultos',
  description: ['Enfoque comunicativo orientado a resultados', 'Inglés para contextos laborales y profesionales', 'Preparación para viajes y situaciones sociales', 'Horarios flexibles adaptados a tu rutina'],
  image: adultsClass
}];
const CourseCard = ({
  course
}: {
  course: Course;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // For now using single image, but structure supports multiple
  const images = [course.image];
  return <div className="bg-background rounded-xl shadow-lg overflow-hidden card-hover">
      {/* Image Carousel */}
      <div className="relative h-64 overflow-hidden">
        <img src={images[currentImageIndex]} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        {images.length > 1 && <>
            <button onClick={() => setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length)} className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/80 hover:bg-background transition-colors" aria-label="Imagen anterior">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => setCurrentImageIndex(prev => (prev + 1) % images.length)} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/80 hover:bg-background transition-colors" aria-label="Imagen siguiente">
              <ChevronRight className="w-4 h-4" />
            </button>
          </>}
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          {course.subtitle}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
          {course.title}
        </h3>
        
        <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center gap-2 text-primary font-medium mb-4 hover:text-burgundy-dark transition-colors">
          {isExpanded ? 'Ver menos' : 'Ver más información'}
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="space-y-2 mb-6">
            {course.description.map((item, index) => <li key={index} className="flex items-start gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                {item}
              </li>)}
          </ul>
        </div>

        <div className="flex items-center gap-2 text-primary font-semibold pt-4 border-t border-border">
          <Phone className="w-4 h-4" />
          <span>Consultas: (0221) 421-7061</span>
        </div>
      </div>
    </div>;
};
const Courses = () => {
  return <section id="cursos" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Nuestros Cursos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Programas diseñados para cada etapa de la vida, con metodología adaptada 
            a las necesidades de cada grupo.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => <CourseCard key={course.id} course={course} />)}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿No sabés cuál es el curso ideal para vos?
          </p>
          <a href="#contacto" className="btn-primary inline-block">
            Consultanos sin compromiso
          </a>
        </div>
      </div>
    </section>;
};
export default Courses;