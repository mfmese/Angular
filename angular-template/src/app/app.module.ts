import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const app_routes: Routes = [
  { path: 'customer', loadChildren: './modules/customer/customer.module#CustomerModule' },
  // { path: '', pathMatch: 'full', redirectTo: '/auth/signin' },
  // { path: '**', redirectTo: '/auth/404' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }),
    // CoreModule
       
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
