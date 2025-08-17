import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Productos = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMaterial, setSelectedMaterial] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { value: "all", label: "Todas las Categorías" },
    { value: "acrilico", label: "Acrílico" },
    { value: "madera", label: "Madera" },
    { value: "merchandising", label: "Merchandising" },
    { value: "trofeos", label: "Trofeos" },
    { value: "senaletika", label: "Señalética" }
  ];

  const materials = [
    { value: "all", label: "Todos los Materiales" },
    { value: "acrilico", label: "Acrílico" },
    { value: "madera-mdf", label: "Madera MDF" },
    { value: "madera-natural", label: "Madera Natural" },
    { value: "metal", label: "Metal" },
    { value: "plastico", label: "Plástico" }
  ];

  const products = [
    {
      id: 1,
      name: "Placa Conmemorativa Acrílico",
      category: "acrilico",
      material: "acrilico",
      image: "/placeholder.svg",
      imageHover: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Trofeo Corporativo Madera",
      category: "trofeos",
      material: "madera-natural",
      image: "/placeholder.svg",
      imageHover: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Señalética Oficina Acrílico",
      category: "senaletika",
      material: "acrilico",
      image: "/placeholder.svg",
      imageHover: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Portaplumas Personalizado",
      category: "merchandising",
      material: "madera-mdf",
      image: "/placeholder.svg",
      imageHover: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Placa Directorio Empresarial",
      category: "senaletika",
      material: "acrilico",
      image: "/placeholder.svg",
      imageHover: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Trofeo Reconocimiento Metal",
      category: "trofeos",
      material: "metal",
      image: "/placeholder.svg",
      imageHover: "/placeholder.svg"
    }
  ];

  const promotions = [
    {
      id: 1,
      name: "Pack Oficina Completo",
      image: "/placeholder.svg",
      discount: "20% OFF",
      description: "Señalética completa para oficinas corporativas"
    },
    {
      id: 2,
      name: "Trofeos Personalizados",
      image: "/placeholder.svg",
      badge: "NUEVO",
      description: "Nueva línea de trofeos con grabado láser 3D"
    },
    {
      id: 3,
      name: "Kit Merchandising Ejecutivo",
      image: "/placeholder.svg",
      discount: "15% OFF",
      description: "Set completo de artículos promocionales premium"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesMaterial = selectedMaterial === "all" || product.material === selectedMaterial;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesMaterial && matchesSearch;
  });

  const handleWhatsAppContact = (productName?: string) => {
    const message = productName 
      ? `Hola, me gustaría cotizar el producto: ${productName}`
      : "Hola, estoy interesado en cotizar un proyecto personalizado";
    const phoneNumber = "573001234567"; // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
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
            Nuestro Catálogo de Soluciones Publicitarias
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explora nuestras categorías y encuentra el artículo perfecto para tu marca
          </p>
        </div>
      </section>

      {/* Filtros y Búsqueda */}
      <section className="py-8 bg-secondary/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-6xl mx-auto">
            {/* Búsqueda */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filtros */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filtrar por:</span>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Material" />
                </SelectTrigger>
                <SelectContent>
                  {materials.map((material) => (
                    <SelectItem key={material.value} value={material.value}>
                      {material.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Productos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">
                Productos ({filteredProducts.length})
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-primary/90 text-white">
                        {categories.find(c => c.value === product.category)?.label}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    <Button 
                      variant="ghost" 
                      className="group/btn p-0 h-auto font-semibold text-primary hover:text-cta transition-colors"
                      onClick={() => handleWhatsAppContact(product.name)}
                    >
                      Ver Detalles
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-4">
                  No se encontraron productos que coincidan con tus filtros
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedMaterial("all");
                    setSearchTerm("");
                  }}
                >
                  Limpiar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Promociones y Novedades */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Promociones del Mes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aprovecha nuestras ofertas especiales y novedades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {promotions.map((promo) => (
              <Card 
                key={promo.id} 
                className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={promo.image}
                    alt={promo.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    {promo.discount && (
                      <Badge className="bg-cta text-white font-bold px-3 py-1">
                        {promo.discount}
                      </Badge>
                    )}
                    {promo.badge && (
                      <Badge className="bg-green-500 text-white font-bold px-3 py-1">
                        {promo.badge}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{promo.name}</h3>
                  <p className="text-muted-foreground mb-4">{promo.description}</p>
                  <Button 
                    variant="default" 
                    className="w-full"
                    onClick={() => handleWhatsAppContact(promo.name)}
                  >
                    Cotizar Ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Proyectos Personalizados */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Fabricamos soluciones a medida. Cuéntanos tu idea y la haremos realidad
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg"
            onClick={() => handleWhatsAppContact()}
          >
            Cotizar Proyecto Personalizado
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Productos;