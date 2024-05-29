import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../../environments/environment';
import { PricingPlansModel } from '../../../../shared/models/pricing-plans.model';
import { PricingPlan } from '../../../../shared/interfaces/pricing-plan.interface';
import { PricingPlansCompareModel } from '../../../../shared/models/pricing-plans-compare.model';
import { PricingPlanCompare } from '../../../../shared/interfaces/pricing-plan-compare.interface';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, TranslateModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  #translateService = inject(TranslateService);

  public urls = environment.urls;
  public plans: PricingPlan[] = PricingPlansModel[this.#translateService.currentLang];
  public comparePlans: PricingPlanCompare[] = PricingPlansCompareModel[this.#translateService.currentLang];
}
