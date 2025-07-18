const PartnersSection = () => {
  const partners = [
    "Medicina Direta",
    "goclin",
    "amplimed", 
    "GestãoDS",
    "eyecare",
    "ER Clinic",
    "amplum"
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Prontuários eletrônicos que já revolucionam a experiência médica
          </h3>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <span className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
            Em breve
          </span>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;