import { injectRequest } from "@analogjs/router/tokens";
import { isPlatformBrowser } from "@angular/common";
import { DOCUMENT, inject, InjectionToken, PLATFORM_ID } from "@angular/core";

export const ORIGIN = new InjectionToken<string>(
  'firebase-auth',
  {
    providedIn: 'root',
    factory() {
      const doc = inject(DOCUMENT);
      const platformId = inject(PLATFORM_ID);
      const isBrowser = isPlatformBrowser(platformId);
      const request = injectRequest();
      const host = request?.headers.host;
      const protocol = host?.includes('localhost') ? 'http' : 'https';
      const origin = `${protocol}://${host}`;
      return isBrowser ? doc.location.origin : origin;
    }
  }
);