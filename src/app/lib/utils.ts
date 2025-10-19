import { injectRequest } from "@analogjs/router/tokens";
import { DOCUMENT, inject, InjectionToken } from "@angular/core";

export const ORIGIN = new InjectionToken<string>(
  'firebase-auth',
  {
    providedIn: 'root',
    factory() {
      const doc = inject(DOCUMENT);
      const request = injectRequest();
      return request?.headers.referer?.slice(0, -1) ?? doc.location.origin;
    }
  }
);