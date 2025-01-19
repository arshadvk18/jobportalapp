import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { JobListingComponent } from './app/job-listing/job-listing.component';
import { provideRouter } from '@angular/router'; 
import { SignupComponent } from './app/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

const routes = [
  { path: '', component: LoginComponent }, // Lowercase 'component'
  { path: 'sign', component: SignupComponent},
  { path: 'jobs', component: JobListingComponent }, // Lowercase 'component'
  
];

// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes),],
// }).catch((err) => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule) // Correct way to add BrowserAnimationsModule in standalone components
  ],
}).catch((err) => console.error(err));
