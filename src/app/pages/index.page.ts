import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
  <main class="flex flex-col gap-5 items-center justify-center my-10">
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
  
  private readonly doc = inject(DOCUMENT);

  private readonly origin = this.doc?.location?.origin ?? '';

  img1 = this.origin + '/api/og-image';

  img2 = this.origin + '/api/og-image?title=My%20Custom%20Title&description=My%20Custom%20Description';

  img3 = this.origin + "/api/og-image?title=<span%20class='text-red-300'>Kendo+UI</span>&description=For%20Angular&bgColor=%23eb0249";
}

