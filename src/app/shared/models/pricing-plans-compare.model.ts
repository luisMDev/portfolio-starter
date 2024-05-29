import { PricingPlanCompare } from '../interfaces/pricing-plan-compare.interface';

export const PricingPlansCompareModel: Record<string, PricingPlanCompare[]> = {
  en: [
    {
      section: 'Resources',
      list: [
        {
          label: 'Lorem',
          starter: 'Ipsum dolor',
          pro: 'Sit amet con',
          enterprise: 'Sectetur adi',
        },
        {
          label: 'Ipsum',
          starter: 'Ipsum dolor',
          pro: 'Sit amet con',
          enterprise: 'Sectetur adi',
        },
        {
          label: 'Dolor',
          starter: 'Ipsum do',
          pro: 'Sit amet co',
          enterprise: 'Sectetur ad',
        },
        {
          label: 'Sit',
          starter: 'Ipsum do',
          pro: 'Sit amet co',
          enterprise: 'Sectetur ad',
        },
        {
          label: 'Amet',
          starter: 'Lorem',
          pro: 'Ipsum do',
          enterprise: 'Sit amet',
        },
      ],
    },
    {
      section: 'Platform',
      list: [
        {
          label: 'Number of projects',
          starter: '1',
          pro: '5',
          enterprise: 'Unlimited',
        },
        {
          label: 'Number of environments',
          starter: '1',
          pro: '5',
          enterprise: 'Unlimited',
        },
        {
          label: 'Number of domains',
          starter: '1',
          pro: '5',
          enterprise: 'Unlimited',
        },
        {
          label: 'Custom domains',
          starter: '<i class="ti ti-x"></i>',
          pro: '<i class="ti ti-check"></i>',
          enterprise: '<i class="ti ti-check"></i>',
        },
        {
          label: 'Webhooks',
          starter: '<i class="ti ti-check"></i>',
          pro: '<i class="ti ti-check"></i>',
          enterprise: '<i class="ti ti-check"></i>',
        },
        {
          label: 'Webhook calls',
          starter: 'Up to 5000',
          pro: 'Up to 100000',
          enterprise: 'Unlimited',
        },
      ],
    },
    {
      section: 'Support',
      list: [
        {
          label: 'Community',
          starter: '<i class="ti ti-check"></i>',
          pro: '<i class="ti ti-check"></i>',
          enterprise: '<i class="ti ti-check"></i>',
        },
        {
          label: 'Email',
          starter: '<i class="ti ti-x"></i>',
          pro: '<i class="ti ti-check"></i>',
          enterprise: '<i class="ti ti-check"></i>',
        },
        {
          label: 'Priority',
          starter: '<i class="ti ti-x"></i>',
          pro: '<i class="ti ti-check"></i>',
          enterprise: '<i class="ti ti-check"></i>',
        },
        {
          label: 'Phone',
          starter: '<i class="ti ti-x"></i>',
          pro: '<i class="ti ti-x"></i>',
          enterprise: '<i class="ti ti-check"></i>',
        },
      ],
    },
  ],
  es: [
    {
      section: 'Recursos',
      list: [
        {
          label: 'Users',
          starter: 'Hasta 1000 usuarios',
          pro: 'Hasta 10000 usuarios',
          enterprise: 'Sin límite de usuarios',
        },
        {
          label: 'Events',
          starter: 'Hasta 1000 eventos',
          pro: 'Hasta 10000 eventos',
          enterprise: 'Sin límite de eventos',
        },
        {
          label: 'Customization',
          starter: 'Basic',
          pro: 'Advanced',
          enterprise: 'Full',
        },
      ],
    },
    {
      section: 'Plataforma',
      list: [
        {
          label: 'Nmero de proyectos',
          starter: '1',
          pro: '5',
          enterprise: 'Sin límite',
        },
        {
          label: 'Nmero de entornos',
          starter: '1',
          pro: '5',
          enterprise: 'Sin límite',
        },
        {
          label: 'Nmero de dominios',
          starter: '1',
          pro: '5',
          enterprise: 'Sin límite',
        },
      ],
    },
    {
      section: 'Soporte',
      list: [
        {
          label: 'Comunidad',
          starter: '<i class="ti ti-check"></i>',
          pro: '<i class="ti ti-check"></i>',
          enterprise: '<i class="ti ti-check"></i>',
        },
        {
          label: 'Email',
          starter: '<i class="ti ti-x"></i>',
          pro: '<i class="ti ti-check"></i>',
          enterprise: '<i class="ti ti-check"></i>',
        },
        {
          label: 'Prioridad',
          starter: '<i class="ti ti-x"></i>',
          pro: '<i class="ti ti-check"></i>',
          enterprise: '<i class="ti ti-check"></i>',
        },
      ],
    },
  ],
};
