const PricingSection = () => {
  return (
    <section className="w-full py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Escolha o plano ideal
          </h2>
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
            para a sua necessidade
          </h3>
        </div>
        
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="text-center p-8 border-2 border-dashed border-primary/30 rounded-lg">
            <div className="text-primary/60 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">
              Stripe Price Table
            </h4>
            <p className="text-muted-foreground">
              Placeholder para a tabela de preços do Stripe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;