import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef
} from "@angular/core";
import * as fileSize from "filesize";
import * as humanDateTime from "humanize-duration";
import { TranslateService } from "@ngx-translate/core";

import * as moment from "moment";
import { DateUtil } from "src/app/shared/util/DateUtil";
import { AppAlert } from "src/app/shared/util/AppAlert";
import * as introjs from "intro.js";
import Cleave from "cleave.js";
import "cleave.js/dist/addons/cleave-phone.eg.js";
import {
  FormGroup,
  FormControl,
  AbstractControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { debounceTime, tap } from "rxjs/operators";
import { CustomValidation } from "src/app/shared/validator/CustomValidation";
import { CustomValidators } from "ng2-validation";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"]
})
export class GridComponent implements OnInit {
  size = fileSize.partial({ standard: "iec" });
  dd;
  timeDiff;
  myform: FormGroup;
  city = ["Cairo", "Giza", "Suez"];
  constructor(
    private translateService: TranslateService,
    private elem: ElementRef<HTMLElement>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // << Initialize the form >> //
    this.createForm();

    // new Cleave(".input-element", {
    //   date: true,
    //   delimiter: "-",
    //   datePattern: ["Y", "m", "d"]
    // });

    // new Cleave(".phone-element", {
    //   phone: true,
    //   phoneRegionCode: "EG"
    // });

    this.dd = humanDateTime(
      moment(moment.duration().asMilliseconds())
        .add(2, "days")
        .add(2, "hours")
        .add(20, "minutes"),
      {
        language: this.translateService.getDefaultLang(),
        fallbacks: ["en"]
      }
    );
    this.translateService.onLangChange.subscribe(lang => {
      this.dd = humanDateTime(
        moment(moment.duration().asMilliseconds())
          .add(2, "days")
          .add(2, "hours")
          .add(20, "minutes"),
        {
          language: lang.lang,
          fallbacks: ["en"],
          conjunction: lang.lang === "ar" ? " ووو " : " and "
        }
      );
    });

    console.log("File size test: " + this.size(24800000));
  }

  startIntro() {
    introjs()
      .setOption({
        showProgress: true,
        showStepNumbers: true
      })
      .start();
  }

  createForm() {
    this.myform = this.fb.group({
      firstName: [
        "",
        Validators.compose([Validators.required, CustomValidation.isarabiconly])
      ],
      phone: ["", [Validators.required, CustomValidation.ismobilephone]],
      birthDate: ["", [Validators.required, CustomValidation.isDate]],
      salary: ["", [Validators.required, CustomValidation.isnumeric]]
    });
  }

  onSave() {
    console.log(this.myform.value);
  }
}
