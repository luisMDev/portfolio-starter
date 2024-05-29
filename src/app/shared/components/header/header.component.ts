import { Component, TemplateRef, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../../../environments/environment';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'portfolio-starter-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [RouterModule, TranslateModule],
})
export class HeaderComponent {
  #offcanvasService = inject(NgbOffcanvas);

  public urls = environment.urls;
  public closeResult = '';

  public open(content: TemplateRef<any>) {
    this.#offcanvasService.open(content, { position: 'end' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed`;
      },
    );
  }
}
