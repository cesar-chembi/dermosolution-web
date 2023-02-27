import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { RegistroModule } from './registro/registro.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AcademicaModule } from './academica/academica.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouteModule } from './route/route.module';
import { NgxTranslateRoutesModule } from 'ngx-translate-routes';
import { FormsModule } from '@angular/forms';
import { CasodermatologicoListaComponent } from './casodermatologico/casodermatologico-lista/casodermatologico-lista.component';
import { CookieService } from 'ngx-cookie-service';
import { CasoreclamadoListaComponent } from './casodermatologico/casoreclamado-lista/casoreclamado-lista.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule} from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import { FileUploadModule} from 'primeng/fileupload';
import {CarouselModule} from 'primeng/carousel';
import { CasodermatologicoDetalleComponent } from './casodermatologico/casodermatologico-detalle/casodermatologico-detalle.component';
import { CasoreclamadoDetalleComponent } from './casodermatologico/casoreclamado-detalle/casoreclamado-detalle.component';
import {ToastModule} from 'primeng/toast';
import {MessageService} from "primeng/api";
import {EnvServiceProvider} from "./servicios/env.service.provider";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Interceptors
import { AuthInterceptorService } from './login/AuthInterceptorService.service';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent, CasodermatologicoListaComponent, CasodermatologicoDetalleComponent,
    CasoreclamadoDetalleComponent,
    CasoreclamadoListaComponent, LoginComponent,
   ],
  imports: [
    BrowserModule,  ReactiveFormsModule, TableModule, CarouselModule,
    BrowserAnimationsModule, PanelModule, FileUploadModule, MessageModule,
    FooterModule, HeaderModule, RegistroModule, MessagesModule,
    AcademicaModule, RouteModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

    NgxTranslateRoutesModule.forRoot({
      enableRouteTranslate: true,
      enableTitleTranslate: true,
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },

    CookieService, MessageService, EnvServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
