import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from '@app/app-routing.module';
import {AppComponent} from '@app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppStoreModule} from '@app/store/app-store.module';
import {AuthComponent} from '@app/components/auth/auth.component';
import {UIModule} from '@app/ui/ui.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavbarComponent} from './components/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppStoreModule,
    UIModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
