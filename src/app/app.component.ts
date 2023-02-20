import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dermosolutionsWeb';

 languajes = [
    {
      key: 'English',
      value: 'en',
    },
    {
      key: 'Español',
      value: 'es',
    },
  ];
  languaje: string;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    const lang = localStorage.getItem('lang');
    this.languaje = lang ? lang : this.translate.defaultLang;
    this.translate.setDefaultLang(this.languaje);
  }

  changeLanguaje() {
    this.translate.setDefaultLang(this.languaje);
    localStorage.setItem('lang', this.languaje);
  }

}
