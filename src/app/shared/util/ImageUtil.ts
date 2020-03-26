import { DomSanitizer } from "@angular/platform-browser";

export class ImageUtil {
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * @description `base64ToBlob` method is used to convert the base64 string to blob
   */
  base64ToBlob() {}
  /**
   * @description `imageToBase64` method is used to convert the image to base64 string
   */

  imageToBase64() {}

  /**
   * @description `base64ToImage` method is used to convert the base64 string to image and you can see it with HTML `img` tag
   * @param `base64String` string
   */
  base64ToImage(base64String: string) {
    return this.sanitizer.bypassSecurityTrustUrl(
      `'data:image/jpg;base64,${base64String}`
    );
  }
}
