import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './login/login.module';
import { RegistroModule } from './registro/registro.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AcademicaModule } from './academica/academica.module';
import { CasodermatologicoModule } from './casodermatologico/casodermatologico.module';
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
import {TableModule} from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import {FileUploadModule} from 'primeng/fileupload';



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent, CasodermatologicoListaComponent, CasoreclamadoListaComponent, LoginComponent
   ],
  imports: [
    BrowserModule,  ReactiveFormsModule, TableModule,
    BrowserAnimationsModule, PanelModule, FileUploadModule,
    FooterModule, HeaderModule, RegistroModule,
    AcademicaModule, RouteModule,
    HttpClientModule,
    FormsModule,
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
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
