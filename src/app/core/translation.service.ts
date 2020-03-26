import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  myLang: BehaviorSubject<string> = new BehaviorSubject<string>('en');

  setDefaultLang(lang: string) {
    this.myLang.next(lang);
  }

  getDefaultLang() {
    return this.myLang.asObservable();
  }

  myTrans: any = '';
  constructor(private translateService: TranslateService) { }

  getTranslation(word: string | string[]) {
    return this.translateService.instant(word);

  }
}
