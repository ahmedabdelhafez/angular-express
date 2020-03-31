import Swal from "sweetalert2";

export class AppAlert {
  /**
   * `showToastError` show an error toaster
   * @param `msg` String param for message text
   * @param `title` optional: title for toaster
   * @param `timeOut` optional: the amount of time to close the toaster @default 1000 ms
   *  @returns void
   */
  static showToastError(msg: string, title?: string, timeOut?: number) {
    return Swal.fire({
      title: title,
      text: msg,
      toast: true,
      position: "center",
      showCancelButton: false,
      showConfirmButton: false,
      // timer: timeOut === null ? 1000 : timeOut,
      icon: "error",
      showClass: { popup: "animated fadeIn fast" }
    });
  }

  static showToastInfo(msg: string, title?: string, timeOut?: number) {
    return Swal.fire({
      title: title,
      text: msg,
      toast: true,
      position: "center",
      showConfirmButton: false,
      // type: "info",
      timer: timeOut === null ? 1000 : timeOut,
      icon: "info",
      showClass: { popup: "animated fadeIn fast" }
    });
  }

  static showToastSuccess(msg: string, title?: string, timeOut?: number) {
    return Swal.fire({
      title: title,
      text: msg,
      toast: true,
      position: "center",
      showConfirmButton: false,
      // type: "success",
      timer: timeOut === null ? 1000 : timeOut,
      icon: "success",
      showClass: { popup: "animated fadeIn fast" }
    });
  }

  static showToastWarning(msg: string, title?: string, timeOut?: number) {
    return Swal.fire({
      title: title,
      text: msg,
      toast: true,
      position: "center",
      showConfirmButton: false,
      // type: "warning",
      timer: timeOut === null ? 1000 : timeOut,
      icon: "warning",
      showClass: { popup: "animated fadeIn fast" }
    });
  }

  static showToastQuestion(msg: string, title?: string, timeOut?: number) {
    return Swal.fire({
      title: title,
      text: msg,
      toast: true,
      position: "center",
      showConfirmButton: false,
      // type: "error",
      timer: timeOut === null ? 1000 : timeOut,
      icon: "question",
      showClass: { popup: "animated fadeIn fast" }
    });
  }

  ////////// << show dialog alerts >> //////////
  //############################################
  static showError(msg: string, title?: string, timeOut?: number) {
    return Swal.fire({
      title: title,
      text: msg,
      toast: false,
      position: "center",
      showConfirmButton: false,
      icon: "error",
      timer: timeOut === null ? 1000 : timeOut
    });
  }

  static showSuccess(msg: string, title?: string, timeOut?: number) {
    return Swal.fire({
      title: title,
      text: msg,
      toast: false,
      position: "center",
      showConfirmButton: false,
      icon: "success",
      timer: timeOut === null ? 1000 : timeOut
    });
  }

  static showInfo(msg: string, title?: string, timeOut?: number) {
    return Swal.fire({
      title: title,
      text: msg,
      toast: false,
      position: "center",
      showConfirmButton: false,
      icon: "info",
      timer: timeOut === null ? 1000 : timeOut
    });
  }

  static showWarning(msg: string, title?: string, timeOut?: number) {
    return Swal.fire({
      title: title,
      text: msg,
      toast: false,
      position: "center",
      showConfirmButton: false,
      icon: "warning",
      timer: timeOut === null ? 1000 : timeOut
    });
  }

  static showQuestion(msg: string, title?: string, timeOut?: number) {
    Swal.fire({
      title: title,
      text: msg,
      toast: false,
      position: "center",
      showConfirmButton: false,
      icon: "question",
      timer: timeOut === null ? 1000 : timeOut
    });
  }

  ///////////////////// << Confirm Alert & Dialogs >>
}
