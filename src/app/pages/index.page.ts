import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <main class="flex flex-col gap-5 items-center justify-center my-10">
    <h2 class="text-6xl font-semibold">AnalogJS</h2>
    <h3 class="text-4xl font-medium">OG Image Generator</h3>
    <img src="http://localhost:5173/api/og-image" />
    <div class="text-6xl font-semibold">or</div>
    <img src="http://localhost:5173/api/og-image?title=My%20Custom%20Title&description=My%20Custom%20Description" />
    <div class="text-6xl font-semibold">or</div>
    <img src="http://localhost:5173/api/og-image?title=<span%20class='text-red-300'>Kendo+UI</span>&description=For%20Angular&bgColor=%23eb0249" />
  </main>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .read-the-docs > * {
      color: #fff;
    }

    @media (prefers-color-scheme: light) {
      .read-the-docs > * {
        color: #213547;
      }
    }
  `,
})
export default class HomeComponent { }
