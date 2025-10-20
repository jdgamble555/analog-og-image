import { injectRequest } from "@analogjs/router/tokens";
import { DOCUMENT, inject, InjectionToken } from "@angular/core";

export const ORIGIN = new InjectionToken<string>(
  'firebase-auth',
  {
    providedIn: 'root',
    factory() {
      const doc = inject(DOCUMENT);
      const request = injectRequest();
      const host = request?.headers.host;
      const protocol = host?.includes('localhost') ? 'http' : 'https';
      const origin = `${protocol}://${host}`;
      return origin ?? doc.location.origin;
    }
  }
);