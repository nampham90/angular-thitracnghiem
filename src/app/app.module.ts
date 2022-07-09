import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { LoadingComponent} from './loading/loading.component'

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BaikiemtraComponent } from './board-user/baikiemtra/baikiemtra.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { AdminModule } from './board-admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialModule} from './material.module'

import {HttpErrorService} from './http_interceptors/http-error.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BoardUserModule } from './board-user/board-user.module';
import { FooterComponent } from './_footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    BaikiemtraComponent,
    NotfoundComponent,
    LoadingComponent,
    FooterComponent,
    
  ],
  imports: [
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    BoardUserModule
    

  ],
  providers: [
    authInterceptorProviders,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorService,
        multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
