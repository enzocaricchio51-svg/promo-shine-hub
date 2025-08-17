const ClientsCarousel = () => {
  // Simulated client logos - in a real app, these would be actual company logos
  const clients = [
    { name: "TechCorp", logo: "/placeholder.svg" },
    { name: "InnovateInc", logo: "/placeholder.svg" },
    { name: "Global Solutions", logo: "/placeholder.svg" },
    { name: "FutureTech", logo: "/placeholder.svg" },
    { name: "Enterprise Plus", logo: "/placeholder.svg" },
    { name: "Digital Wave", logo: "/placeholder.svg" },
    { name: "Smart Business", logo: "/placeholder.svg" },
    { name: "NextGen Corp", logo: "/placeholder.svg" }
  ];

  // Duplicate the array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Clientes que Confían en Nosotros
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empresas líderes han elegido nuestros productos para destacar su marca
          </p>
        </div>
        
        {/* Infinite scroll carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12">
            {duplicatedClients.map((client, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img 
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  className="max-w-full max-h-full object-contain filter brightness-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `
      }} />
    </section>
  );
};

export default ClientsCarousel;