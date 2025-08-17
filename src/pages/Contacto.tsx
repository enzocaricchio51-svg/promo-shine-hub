import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subjects = [
    { value: "cotizacion", label: "Cotización" },
    { value: "consulta", label: "Consulta General" },
    { value: "soporte", label: "Soporte" },
    { value: "otro", label: "Otro" }
  ];

  const faqs = [
    {
      question: "¿Cuál es el tiempo de entrega?",
      answer: "El tiempo de entrega varía según el producto y la cantidad. Generalmente, para productos estándar es de 5-7 días hábiles, y para productos personalizados de 10-15 días hábiles."
    },
    {
      question: "¿Realizan envíos a todo el país?",
      answer: "Sí, realizamos envíos a toda Colombia. Los costos de envío se calculan según el destino y el peso del pedido. Ofrecemos envío gratuito en pedidos superiores a $500.000."
    },
    {
      question: "¿Cuál es el pedido mínimo?",
      answer: "El pedido mínimo varía según el producto. Para la mayoría de nuestros productos personalizados, el mínimo es de 10 unidades. Consulta con nuestro equipo para casos específicos."
    },
    {
      question: "¿Qué formatos de archivo aceptan para los diseños?",
      answer: "Aceptamos archivos en formato AI, EPS, PDF, PNG y JPG en alta resolución (mínimo 300 DPI). Para obtener mejores resultados, recomendamos archivos vectoriales (AI o EPS)."
    },
    {
      question: "¿Ofrecen servicios de diseño?",
      answer: "Sí, contamos con un equipo de diseñadores especializados que pueden crear o adaptar tu diseño sin costo adicional en pedidos superiores a $300.000."
    },
    {
      question: "¿Cómo puedo solicitar una cotización?",
      answer: "Puedes solicitar una cotización a través de nuestro formulario de contacto, por WhatsApp, correo electrónico o teléfono. Te responderemos en un plazo máximo de 24 horas."
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "+57 (1) 234-5678",
      link: "tel:+5712345678"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+57 300 123 4567",
      link: "https://wa.me/573001234567"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@empresa.com",
      link: "mailto:info@empresa.com"
    },
    {
      icon: MapPin,
      title: "Dirección",
      value: "Calle 123 #45-67, Bogotá, Colombia",
      link: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Horario",
      value: "Lun - Vie: 8:00 AM - 6:00 PM\nSáb: 9:00 AM - 2:00 PM",
      link: null
    }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Debes aceptar la política de privacidad para continuar."
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "¡Mensaje enviado exitosamente!",
      description: "Te contactaremos pronto. Gracias por tu interés.",
      action: <CheckCircle className="h-4 w-4" />
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
      privacy: false
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-primary/90 to-primary-dark/90 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg')",
            filter: "brightness(0.3)"
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hablemos de tu Próximo Proyecto
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Completa el formulario o contáctanos directamente
          </p>
        </div>
      </section>

      {/* Sección Principal de Contacto */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Formulario de Contacto */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Envíanos un Mensaje</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nombre Completo *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Correo Electrónico *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="tu@empresa.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Nombre de la Empresa</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Tu empresa"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Teléfono de Contacto</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+57 300 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Asunto</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un asunto" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject.value} value={subject.value}>
                              {subject.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Cuéntanos sobre tu proyecto o consulta..."
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formData.privacy}
                        onCheckedChange={(checked) => handleInputChange("privacy", checked as boolean)}
                      />
                      <Label htmlFor="privacy" className="text-sm">
                        Acepto la{" "}
                        <a href="#" className="text-primary hover:underline">
                          política de privacidad
                        </a>{" "}
                        *
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar Consulta
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Información de Contacto */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Nuestros Canales</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <info.icon size={24} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-primary hover:text-cta transition-colors whitespace-pre-line"
                              {...(info.link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground whitespace-pre-line">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de Ubicación */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestra Ubicación</h2>
            <p className="text-xl text-muted-foreground">Visítanos en nuestras instalaciones</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-primary mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">
                    Mapa interactivo de Google Maps
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Calle 123 #45-67, Bogotá, Colombia
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encuentra respuestas a las consultas más comunes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;