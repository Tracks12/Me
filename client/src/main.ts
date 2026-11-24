import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { REDIRECTS } from './app/data';

// liens courts (/github, /linkedin...) : redirection avant de démarrer l'application
const redirect = REDIRECTS[window.location.pathname];

if (redirect) window.location.replace(redirect);
else bootstrapApplication(App, appConfig).catch((err) => console.error(err));
