import { TranslationService } from './translation.service';
import { OnInit } from '@angular/core';
import { AppAlert } from '../shared/util/AppAlert';

export class HttpErrorMessage {

    constructor(private lang?: TranslationService) {
    }

    handleHttpErrors(httpStatusCode: number | string) {
        if (httpStatusCode === 200) {
            AppAlert.showToastSuccess(this.lang.getTranslation('statuscode.200'), null, 3000);
        } else if (httpStatusCode === 400) {
            AppAlert.showToastError(this.lang.getTranslation('statuscode.400'), null, 3000);
        } else if (httpStatusCode === 401) {
            AppAlert.showToastError(this.lang.getTranslation('statuscode.401'), null, 3000);
        } else if (httpStatusCode === 402) {
            AppAlert.showToastError(this.lang.getTranslation('statuscode.402'), null, 3000);
        } else if (httpStatusCode === 403) {
            AppAlert.showToastError(this.lang.getTranslation('statuscode.403'), null, 3000);
        } else if (httpStatusCode === 404) {
            AppAlert.showToastError(this.lang.getTranslation('statuscode.404'), null, 3000);
        } else if (httpStatusCode === 500) {
            AppAlert.showToastError(this.lang.getTranslation('statuscode.500'), null, 3000);
        } else if (httpStatusCode === 'Unknown Error') {
            AppAlert.showToastError(this.lang.getTranslation('statuscode.unknownerror'), null, 3000);
        }
    }

}
