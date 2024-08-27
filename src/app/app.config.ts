import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // Set up providers for routing and HTTP client
  providers: [provideRouter(routes), provideHttpClient()],
};
