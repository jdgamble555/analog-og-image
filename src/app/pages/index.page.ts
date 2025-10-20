import { Component, inject } from '@angular/core';
import { ORIGIN } from '../lib/utils';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  standalone: true,
  template: `
  <main class="flex flex-col gap-5 items-center justify-center py-10">
    <h2 class="text-6xl font-semibold">AnalogJS</h2>
    <h3 class="text-4xl font-medium">OG Image Generator</h3>

    <img [src]="img1" alt="Default OG Image" />
    <div class="text-6xl font-semibold">or</div>

    <img [src]="img2" alt="Custom Title & Description" />
    <div class="text-6xl font-semibold">or</div>

    <img [src]="img3" alt="Styled Title, Custom BG" />
  </main>
  `,
})
export default class HomeComponent {

  readonly origin = inject(ORIGIN);
  readonly meta = inject(Meta);

  constructor() {
    this.meta.updateTag({
      name: 'og:image',
      content: this.origin + '/api/og-image?title=Meta%20Tag%20Title&description=Meta%20Tag%20Description'
    });
  }

  img1 = this.origin + '/api/og-image';

  img2 = this.origin + '/api/og-image?title=My%20Custom%20Title&description=My%20Custom%20Description';

  img3 = this.origin + "/api/og-image?title=<span%20class='text-red-300'>Kendo+UI</span>&description=For%20Angular&bgColor=%23eb0249";
}

