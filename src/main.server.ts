import 'zone.js/node';
import '@angular/platform-server/init';
import { provideServerContext } from '@analogjs/router/server';

import { AppComponent } from './app/app';
import { config } from './app/app.config.server';
import { renderApplication } from '@angular/platform-server';
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { ServerContext } from '@analogjs/router/tokens';

export function bootstrap(context: BootstrapContext) {
  return bootstrapApplication(AppComponent, config, context);
}

export default async function render(
  url: string,
  document: string,
  serverContext: ServerContext,
) {
  const html = await renderApplication(bootstrap, {
    document,
    url,
    platformProviders: [provideServerContext(serverContext)],
  });

  return html;
}
