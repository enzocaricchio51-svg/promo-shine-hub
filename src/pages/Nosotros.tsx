import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Heart, Users, Lightbulb, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Nosotros = () => {
  const values = [
    {
      icon: Award,
      title: "Calidad",
      description: "Compromiso absoluto con la excelencia en cada producto que fabricamos"
    },
    {
      icon: Lightbulb,
      title: "Creatividad",
      description: "Soluciones innovadoras que destacan y generan impacto"
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Dedicación total al éxito de cada proyecto de nuestros clientes"
    },
    {
      icon: ShieldCheck,
      title: "Integridad",
      description: "Transparencia y honestidad en todas nuestras relaciones comerciales"
    }
  ];

  const team = [
    {
      name: "Carlos Mendoza",
      role: "Director General",
      image: "/placeholder.svg"
    },
    {
      name: "María García",
      role: "Diseñadora Principal",
      image: "/placeholder.svg"
    },
    {
      name: "Roberto Silva",
      role: "Jefe de Producción",
      image: "/placeholder.svg"
    },
    {
      name: "Ana López",
      role: "Gerente Comercial",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-primary/90 to-primary-dark/90 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg')",
            filter: "brightness(0.3)"
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprometidos con la Calidad y la Innovación en Cada Detalle
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Conoce la historia y el equipo detrás de los productos que impulsan tu marca
          </p>
        </div>
      </section>

      {/* Historia y Filosofía */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/placeholder.svg"
                  alt="Fundadores de la empresa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Nuestra Trayectoria
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Desde nuestros inicios en 2008, hemos transformado la manera en que las empresas 
                  se promocionan a través de productos publicitarios de alta calidad. Lo que comenzó 
                  como un pequeño taller familiar, ha evolucionado hasta convertirse en una empresa 
                  líder en el sector.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Cada desafío superado nos ha fortalecido, y cada cliente satisfecho nos ha motivado 
                  a seguir innovando. Hoy, más de 15 años después, seguimos con la misma pasión del 
                  primer día: crear productos que hagan brillar a nuestros clientes.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Nuestra Filosofía de Trabajo
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Creemos que cada producto es una oportunidad de contar una historia. Nuestro enfoque 
                  se centra en la escucha activa, el diseño personalizado y la fabricación artesanal 
                  con tecnología de vanguardia. No solo creamos productos; construimos experiencias 
                  que conectan marcas con personas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Nuestros Fundamentos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada producto que creamos
            </p>
          </div>

          {/* Misión y Visión */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            <Card className="text-center p-8 border-0 shadow-lg bg-card">
              <CardContent className="p-6">
                <Target size={48} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra Misión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ofrecer soluciones publicitarias creativas y de alta calidad que potencien 
                  la visibilidad de nuestros clientes, transformando sus ideas en productos 
                  tangibles que generen impacto y valor para sus marcas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg bg-card">
              <CardContent className="p-6">
                <Award size={48} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra Visión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser la empresa líder y de referencia en el mercado de artículos publicitarios 
                  personalizados, reconocida por nuestra innovación, compromiso y por ser el 
                  socio estratégico preferido de las empresas más exitosas.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Valores */}
          <div>
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-lg bg-card hover:shadow-xl transition-shadow">
                  <CardContent className="p-4">
                    <value.icon size={40} className="text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              El Talento Detrás de tus Proyectos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conoce a los profesionales que hacen posible cada uno de nuestros productos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para empezar tu próximo proyecto con nosotros?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya confían en nosotros para potenciar su marca
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg"
          >
            Contáctanos
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;