import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

// Load Stripe script
declare global {
  interface Window {
    Stripe: any;
  }
}

// Types
interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  originalPrice?: number;
  discountedPrice?: number;
  features: string[];
  buttonText: string;
  priceId?: string;
  tag?: string;
  isFavorite?: boolean;
  type: string;
  intervalName: string;
  discountLabel?: string;
}

interface Tab {
  id: string;
  name: string;
}

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState<string>('annual');
  const [stripe, setStripe] = useState<any>(null);
  const [loadingPriceId, setLoadingPriceId] = useState<string | null>(null);

  // Pricing data
  const allPlans = {
    tabs: [
      { id: 'annual', name: 'Anual' },
      { id: 'semester', name: 'Semestral' },
      { id: 'month', name: 'Mensal' }
    ],
    plans: {
      annual: [
        {
          id: 'pro_annual',
          name: 'Profissional',
          description: 'R$ 1.679,00 a cada 12 meses',
          price: 139.9,
          currency: 'BRL',
          originalPrice: 2388,
          discountedPrice: 1679,
          features: [
            'Transcrição de consultas via telemedicina ou presencial',
            'Customização de anamnese',
            'Upload e leitura de exames',
            'Consultas ilimitadas',
            'Sem limite de horas'
          ],
          buttonText: 'Assine agora',
          priceId: 'price_1RktobP9Wu7q8rUGCquIyRVE',
          tag: 'Economize 30%',
          isFavorite: true,
          type: 'pro',
          intervalName: '/mês',
          discountLabel: 'Economia de R$ 709 no ano em comparação ao mensal'
        }
      ],
      semester: [
        {
          id: 'pro_semester',
          name: 'Profissional',
          description: 'R$ 899,00 a cada 6 meses',
          price: 149.9,
          currency: 'BRL',
          originalPrice: 1194,
          discountedPrice: 899,
          features: [
            'Transcrição de consultas via telemedicina ou presencial',
            'Customização de anamnese',
            'Upload e leitura de exames',
            'Consultas ilimitadas',
            'Sem limite de horas'
          ],
          buttonText: 'Assine agora',
          priceId: 'price_1RktrhP9Wu7q8rUGOzxM7iaY',
          tag: 'Economize 25%',
          type: 'pro',
          intervalName: '/mês',
          discountLabel: 'Economia de R$ 295,00 por semestre em comparação ao mensal'
        }
      ],
      month: [
        {
          id: 'pro_month',
          name: 'Profissional',
          description: '',
          price: 199,
          currency: 'BRL',
          features: [
            'Transcrição de consultas via telemedicina ou presencial',
            'Customização de anamnese',
            'Upload e leitura de exames',
            'Consultas ilimitadas',
            'Sem limite de horas'
          ],
          buttonText: 'Assine agora',
          priceId: 'price_1Pyf1rP9Wu7q8rUGLFSFimwp',
          type: 'pro',
          intervalName: ''
        }
      ]
    }
  };

  // Initialize Stripe
  useEffect(() => {
    const loadStripe = async () => {
      if (window.Stripe) {
        // Use environment variable for Stripe key
        const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_51Pk9hYP9Wu7q8rUGXLJOk2YT3F0LzFjrKvtqezdhneAooaCPQqHXIlEGeD2jeP8TP14PLTQHgsSnMP7EH2gyleFP00UI6TdeoM';
        
        if (!stripeKey) {
          console.error('Stripe publishable key not found. Please set VITE_STRIPE_PUBLISHABLE_KEY in your environment variables.');
          return;
        }
        
        setStripe(window.Stripe(stripeKey));
      }
    };

    // Load Stripe script if not already loaded
    if (!window.Stripe) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/';
      script.onload = loadStripe;
      script.onerror = () => {
        console.error('Failed to load Stripe script');
      };
      document.head.appendChild(script);
    } else {
      loadStripe();
    }
  }, []);

  // Utility functions
  const formatCurrency = (value: number, currency: string) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    }).format(value);
  };

  const handlePlanSelection = async (priceId: string) => {
    if (!stripe) {
      console.error('Stripe not initialized');
      return;
    }

    setLoadingPriceId(priceId);

    try {
      // Call your server-side API
      const response = await fetch('https://checkout.doctorassistant.ai/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: priceId,
          successUrl: window.location.href + '?success=true',
          cancelUrl: window.location.href + '?canceled=true',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout using the session ID
      const { error } = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });

      if (error) {
        console.error('Checkout error:', error);
        alert('Erro ao processar pagamento. Tente novamente.');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Erro ao criar sessão de pagamento. Tente novamente.');
    } finally {
      setLoadingPriceId(null);
    }
  };

  const handleFreeTrial = () => {
    const redirectUrl = 'https://safe.doctorassistant.ai/auth/realms/daai/protocol/openid-connect/registrations' +
      '?client_id=daai-web-cli' +
      '&redirect_uri=https%3A%2F%2Fdaai.doctorassistant.ai%2F' +
      '&response_mode=fragment' +
      '&response_type=code' +
      '&scope=openid' +
      '&login_hint=';
    window.location.href = redirectUrl;
  };

  const currentPlans = allPlans.plans[activeTab as keyof typeof allPlans.plans] || [];

  return (
    <section id="planos" className="w-full py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Escolha o plano ideal
          </h2>
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
            para a sua necessidade
          </h3>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-background rounded-lg p-1 shadow-sm">
            {allPlans.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Container */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Trial Plan */}
          <div className="bg-background rounded-xl shadow-lg border border-border overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="px-8 pb-6 pt-10">
              <div className="plan-header z-10 mt-2">
                <h2 className="text-2xl font-bold text-foreground">Gratuito</h2>
                <p className="text-muted-foreground"></p>
              </div>

              <div className="price-container z-10 mt-10">
                <div className="text-3xl font-bold text-foreground mt-4">R$ 0,00/mês</div>
              </div>

              <Button 
                onClick={handleFreeTrial}
                variant="outline" 
                className="w-full mt-10 rounded-lg border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40"
              >
                Inicie seu teste gratuito
              </Button>
            </div>

            <div className="px-8 py-4 mt-10">
              <h3 className="text-lg font-semibold text-foreground mb-4">Inclui:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Todas as funcionalidades para que sua primeira experiência e do paciente seja incrível</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">10 consultas por mês</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">5 horas de transcrição por mês</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Professional Plans */}
          {currentPlans.map((plan: Plan) => {
            const isPro = plan.type === 'pro';
            
            return (
              <div 
                key={plan.id}
                className={`bg-background rounded-xl shadow-lg border border-border overflow-hidden relative transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
                  isPro ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                {/* Favorite Badge */}
                {plan.isFavorite && (
                  <div className="absolute top-4 right-4 h-8 w-8 bg-white rounded-full flex justify-center items-center shadow-md">
                    <span className="text-yellow-500 text-xl">⭐</span>
                  </div>
                )}

                {/* Discount Tag */}
                {plan.tag && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {plan.tag}
                  </div>
                )}

                <div className="px-8 pb-6 pt-10">
                  <div className="plan-header z-10 mt-2">
                    <h2 className="text-2xl font-bold text-foreground">{plan.name}</h2>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="price-container z-10 mt-6">
                    <div className="text-sm text-muted-foreground">Equivalente a</div>
                    <div className="text-3xl font-bold text-foreground">
                      {formatCurrency(plan.price, plan.currency)}{plan.intervalName}
                    </div>
                    {plan.discountLabel && (
                      <div className="mt-2 text-sm text-primary font-medium">
                        {plan.discountLabel}
                      </div>
                    )}
                  </div>

                  <Button 
                    onClick={() => plan.priceId && handlePlanSelection(plan.priceId)}
                    disabled={loadingPriceId === plan.priceId}
                    className="w-full mt-10 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loadingPriceId === plan.priceId ? 'Carregando...' : plan.buttonText}
                  </Button>
                </div>

                <div className="px-8 py-4">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {isPro ? 'Veja as vantagens:' : 'Você começa com:'}
                  </h3>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;