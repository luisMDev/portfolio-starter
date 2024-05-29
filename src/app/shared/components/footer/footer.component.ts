import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from './../../../../../environments/environment';

@Component({
  selector: 'portfolio-starter-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  imports: [TranslateModule],
})
export class FooterComponent {
  public version: string = environment.version;

  public year: number = new Date().getFullYear();
}
