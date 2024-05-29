import { PricingPlan } from '../interfaces/pricing-plan.interface';

export const PricingPlansModel: Record<string, PricingPlan[]> = {
  en: [
    {
      name: 'Starter',
      price: '$0',
      sub: 'per member/month',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.      ',
      features: ['Lorem ipsum dolor', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor'],
      featured: false,
    },
    {
      name: 'Pro',
      price: '$29',
      sub: 'per member/month',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.      ',
      features: [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: '$299',
      sub: 'per organization/month',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      features: [
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit',
        'Lorem ipsum dolor sit',
      ],
      featured: false,
    },
  ],
  es: [
    {
      name: 'Starter',
      price: '$0',
      sub: 'por miembro/mes',
      description: 'Para pruebas y evaluaciones o despliegues de poca escala.',
      features: ['Hasta 1000 usuarios', 'Hasta 1000 eventos', 'Soporte por correo electrónico'],
      featured: false,
    },
    {
      name: 'Pro',
      price: '$99',
      sub: 'por miembro/mes',
      description: 'Lugar ideal para proyectos más grandes, startups y empresas.',
      features: ['Hasta 10000 usuarios', 'Hasta 10000 eventos', 'Soporte prioritario'],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: '$500',
      sub: 'por organización/mes',
      description: 'Para empresas que necesitan soporte empresarial avanzado, SLA personalizado y/o despliegues grandes.',
      features: ['Sin límite de usuarios', 'Sin límite de eventos', 'Soporte por teléfono'],
      featured: false,
    },
  ],
};
