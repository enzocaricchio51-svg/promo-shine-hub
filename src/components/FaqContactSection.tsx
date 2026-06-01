import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const faqs = [
  { q: "¿Necesito experiencia para empezar?", a: "Para nada. La mayoría de nuestros alumnos empiezan desde cero. Tenemos clases especiales para principiantes con coaches dedicados." },
  { q: "¿Desde qué edad pueden patinar los niños?", a: "Recibimos niños desde los 4 años. Contamos con equipo adaptado para los más pequeños y mucha paciencia." },
  { q: "¿Incluyen el equipo de patinaje?", a: "Sí. Todos nuestros planes incluyen patines, casco, rodilleras y coderas. Si tienes tu propio equipo, también puedes traerlo." },
  { q: "¿Organizan cumpleaños y eventos?", a: "¡Sí! Organizamos cumpleaños temáticos, despedidas, eventos corporativos y shows privados. Pregúntanos por nuestros paquetes." },
  { q: "¿Cómo reservo mi primera clase?", a: "Puedes escribirnos por WhatsApp o llenar el formulario de esta página. Te respondemos en menos de 1 hora en horario de oficina." },
];

const FaqContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te contactaremos pronto. 🐧");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const wa = () => window.open(`https://wa.me/51999999999?text=${encodeURIComponent("Hola Royal Penguin, quiero más info")}`, "_blank");

  return (
    <section id="contacto" className="relative py-24 bg-gradient-soft">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 max-w-6xl">
        {/* FAQ */}
        <div>
          <span className="text-cta font-semibold uppercase tracking-widest text-sm">Preguntas frecuentes</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-8">
            Resolvemos tus <span className="text-gradient-royal">dudas</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-primary/15 rounded-2xl px-5 bg-white shadow-sm data-[state=open]:shadow-royal data-[state=open]:border-primary/40 transition-all">
                <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact form */}
        <div>
          <span className="text-cta font-semibold uppercase tracking-widest text-sm">Reserva tu clase</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-8">
            ¿Listo para <span className="text-gradient-royal">patinar</span>?
          </h2>

          <form onSubmit={submit} className="space-y-4 bg-white p-6 rounded-3xl shadow-card border border-primary/10">
            <Input placeholder="Nombre completo" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <Input type="email" placeholder="Correo electrónico" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            <Input placeholder="Teléfono / WhatsApp" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
            <Textarea placeholder="Cuéntanos qué te interesa..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <div className="flex flex-col sm:flex-row gap-3">
              <Button type="submit" variant="cta" size="lg" className="flex-1">Enviar mensaje</Button>
              <Button type="button" variant="outline" size="lg" onClick={wa}>
                <MessageCircle size={18} /> WhatsApp
              </Button>
            </div>
          </form>

          <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
            <div className="flex items-start gap-2 p-4 bg-white rounded-2xl border border-primary/10">
              <MapPin className="text-primary mt-0.5" size={18} />
              <div><div className="font-semibold">Pista</div><div className="text-muted-foreground">Av. del Patinaje 123, Lima</div></div>
            </div>
            <div className="flex items-start gap-2 p-4 bg-white rounded-2xl border border-primary/10">
              <Phone className="text-primary mt-0.5" size={18} />
              <div><div className="font-semibold">Teléfono</div><div className="text-muted-foreground">+51 999 999 999</div></div>
            </div>
            <div className="flex items-start gap-2 p-4 bg-white rounded-2xl border border-primary/10">
              <Mail className="text-primary mt-0.5" size={18} />
              <div><div className="font-semibold">Email</div><div className="text-muted-foreground">hola@royalpenguin.pe</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqContactSection;
