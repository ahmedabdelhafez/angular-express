import { OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

export class Translate implements OnInit, OnDestroy {
    sub: Subscription;
    transValue: string = '';
    constructor(private tservice?: TranslateService) {
    }

    ngOnInit(): void {

    }

    getTranslations(word?: string) {
        this.sub = this.tservice.get(word).subscribe(data => {
            console.log('my data: ' + data)
            this.transValue = data;
        },
            err => {
                console.log(err);
            });

        return this.transValue;
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

}