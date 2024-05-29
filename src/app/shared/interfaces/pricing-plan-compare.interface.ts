import { PricingPlanFeatures } from './pricing-plan-feature.interface';

export interface PricingPlanCompare {
  section: string;
  list: PricingPlanFeatures[];
}
