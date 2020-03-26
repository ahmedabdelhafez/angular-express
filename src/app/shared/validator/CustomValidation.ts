import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import validator from "validator";
import { DateUtil } from "../util/DateUtil";

export class CustomValidation {
 
  /**
   * @description `haveSpaces` check if the value have spaces
   * @param `control` string
   * @returns `boolean`
   */
  static haveSpaces(control: AbstractControl): ValidationErrors | null {
    const val = control.value as string;
    if (val.indexOf(" ") !== -1) {
      return { haveSpace: true, message: "this field cannot contain spaces" };
    }
    return null;
  }

  /**
   * @description `isarabiconly` check if the value is valid arabic letter only [أ - ي]
   * @param `control` string
   * @returns `boolean`
   */
  static isarabiconly(control: AbstractControl): ValidationErrors | null {
    const val: string = control.value as string;
    if (!validator.isAlpha(val, "ar-EG")) {
      return { invalidArabic: true };
    }
    return null;
  }
  /**
   * @description `isenglishonly` check if the value is valid english letter only [A-Z]
   * @param `control` string
   * @returns `boolean`
   */
  static isenglishonly(control: AbstractControl): ValidationErrors | null {
    const val: string = control.value as string;
    if (!validator.isAlpha(val, "en-US")) {
      return { invalidEnglish: true };
    }
    return null;
  }
  /**
   * @description `isurl` check if the value is valid url on using protocol [http | https]
   * @param `control` string
   * @returns `boolean`
   */
  static isurl(control: AbstractControl): ValidationErrors | null {
    const val: string = control.value as string;
    if (
      !validator.isURL(val === null ? "" : val, {
        protocols: ["http", "https", "ftp"],
        allow_underscores: true
      })
    ) {
      return { invalidUrl: true, message: "please insert a valid URL here" };
    }
    return null;
  }
  /**
   * @description `contains` check if the value contains any of the specified parameter
   * @param `control` string
   * @returns `boolean`
   */
  static contains(
    control: AbstractControl,
    chars: string
  ): ValidationErrors | null {
    const val: string = control.value as string;
    if (validator.contains(val, chars)) {
      return { contain: true };
    }
    return null;
  }

  /**
   * @description `ismobilephone` check if the value is a valid mobile used locale is `en-AU` for AUstralia
   * @param `control` string
   * @returns `boolean`
   */
  static ismobilephone(control: AbstractControl): ValidationErrors | null {
    const val: string = control.value as string;
    if (
      !validator.isMobilePhone(val === null ? "" : val, "en-AU", {
        strictMode: false
      })
    ) {
      return {
        invalidMobile: true,
        message:
          "please add a valid australian phone code that starts with [0491]"
      };
    }
    return null;
  }
  /**
   * @description `iscurrency` check if the value is a valid currency max number for decimal digit 2
   * and the decimal number is not required if it not wrriten by the user
   * @param `control` string
   * @returns `boolean`
   */
  static iscurrency(control: AbstractControl): ValidationErrors | null {
    const val: string | number = control.value as string | number;
    if (
      !validator.isCurrency(val === null  ? "" : val, {
        thousands_separator: "",
        decimal_separator: ".",
        allow_decimal: true,
        require_decimal: false,
        digits_after_decimal: [1, 2]
      })
    ) {
      return { invalidCurrency: true, message: { decimal: "1:2" } };
    }
    return null;
  }

  /**
   * @description `isnumeric` method checks if the field value is number only [0-9]
   * @param `control` string
   * @returns `boolean`
   */
  static isnumeric(control: AbstractControl): ValidationErrors | null {
    const val = control.value as string | number;
    if (!validator.isNumeric(val === null ? "" : val, { no_symbols: true })) {
      return { invalidNumber: true };
    }
    return null;
  }
  /**
   * @description `isnumeric` method checks if the field value is number only [0-9]
   * @param `control` string
   * @returns `boolean`
   */
  static isndecimal(control: AbstractControl): ValidationErrors | null {
    const val = control.value as string | number;
    if (!validator.isDecimal(val, { locale: "en-AU", decimal_digits: "1,2" })) {
      return { invalidDecimal: true };
    }
    return null;
  }

  /**
   * @description `isAlphaNumericArabic` method checks if the field have an alpha numberic value digit and chars for arabic
   * @param `control` string
   * @returns `boolean`
   */
  static isAlphaNumericArabic(
    control: AbstractControl
  ): ValidationErrors | null {
    const val: string = control.value as string;
    if (!validator.isAlphanumeric(val, "ar-EG")) {
      return { invalidAlphaArabic: true };
    }
    return null;
  }
  /**
   * @description `isAlphaNumericEnglish` method checks if the field have an alpha numberic value digit and chars
   * @param `control` string
   * @returns `boolean`
   */
  static isAlphaNumericEnglish(
    control: AbstractControl
  ): ValidationErrors | null {
    const val: string = control.value as string;
    if (!validator.isAlphanumeric(val, "en-US")) {
      return { notAlphaEnglish: true };
    }
    return null;
  }

  /**
   * @description `isCreditCard` method checks if the field value is a valid credit card
   * @param `control` string
   * @returns `boolean`
   */
  static isCreditCard(control: AbstractControl): ValidationErrors | null {
    const val: string = control.value as string;
    if (!validator.isCreditCard(val)) {
      return { notCreditard: true };
    }
    return null;
  }
  /**
   * @description `isIpV4` method checks if the field value is a valid ipV4
   * @param `control` string
   * @returns `boolean`
   */
  static isIpV4(control: AbstractControl): ValidationErrors | null {
    const val: string = control.value as string;
    if (!validator.isIP(val, "4")) {
      return { invalidIpV4: true };
    }
    return null;
  }
  /**
   * @description `isIpV6` method checks if the field value is a valid ipV6
   * @param `control` string
   * @returns `boolean`
   */
  static isIpV6(control: AbstractControl): ValidationErrors | null {
    const val: string = control.value as string;
    if (!validator.isIP(val, "6")) {
      return { invalidIpV6: true };
    }
    return null;
  }
  /**
   * @description `isbase64` method checks if the field value is a valid base64 value
   * @param `base64String` string
   * @returns `boolean`
   */
  static isBase64(control: AbstractControl): ValidationErrors | null {
    if (!validator.isBase64(control.value as string)) {
      return { invalidBase64: true };
    }
  }

  /**
   * @description `CheckRange` method checks if the field value between min and max
   * @param `min` number, `max` number
   * @returns `boolean`
   */
  static isBetween(min: number, max: number): ValidationErrors | null {
    return (control: AbstractControl): { [key: string]: any } => {
      const val = control.value as number;
      if (!(val >= min && val <= max)) {
        return { invalidRange: true, message: { min, max } };
      }
      return null;
    };
  }
  /**
     * @description `isDate` method checks if the field value is a valid date
     * and the available date formats 
     * [ "DD-MM-YYYY",
        "DD/MM/YYYY",
        "MM-DD-YYYY",
        "MM/DD/YYYY",
        "YYYY-MM-DD",
        "YYYY/MM/DD"]
     * @param `control` date string
     * @returns `boolean`
     */
  static isDate(control: AbstractControl): ValidationErrors | null {
    const val = control.value as string;
    if (DateUtil.isValidDate(val) === false) {
      return {
        invalidDate: true,
        msg: `valid formats: "DD-MM-YYYY"
      "DD/MM/YYYY",
      "MM-DD-YYYY"`
      };
    } else {
      return null;
    }
  }

  static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get("password").value; // get password from our password form control
    const confirmPassword: string = control.get("confirmPassword").value; // get password from our confirmPassword form control
    // compare is the password math
    if (password !== confirmPassword) {
      // if they don't match, set an error in our confirmPassword form control
      control.get("confirmPassword").setErrors({ NoPassswordMatch: true });
    }
  }

}
