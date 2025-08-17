import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Sparkles } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Materiales de primera calidad y acabados perfectos"
    },
    {
      icon: Users,
      title: "Equipo Experto",
      description: "Profesionales especializados en diseño y producción"
    },
    {
      icon: Clock,
      title: "Entrega Puntual",
      description: "Cumplimos con los tiempos acordados sin comprometer calidad"
    },
    {
      icon: Sparkles,
      title: "Diseño Personalizado",
      description: "Soluciones únicas adaptadas a tu marca"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/placeholder.svg"
                alt="Nuestro equipo trabajando"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <Card className="absolute -bottom-6 -right-6 p-4 shadow-xl border-0 bg-primary text-primary-foreground">
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-90">Años de Experiencia</div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Creamos Experiencias que{" "}
                <span className="text-primary">Destacan</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Desde nuestros inicios, nos hemos dedicado a transformar ideas en productos tangibles que 
                elevan la presencia de marca de nuestros clientes. Cada pieza que creamos cuenta una historia 
                y refleja la excelencia que caracteriza a tu empresa.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestro compromiso va más allá de la producción: somos socios estratégicos en el crecimiento 
                de tu marca, ofreciendo soluciones innovadoras que generan impacto real.
              </p>
            </div>
            
            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="default" size="lg" className="w-full sm:w-auto">
              Conócenos Mejor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;