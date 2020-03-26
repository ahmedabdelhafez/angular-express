import { Component, OnInit, TemplateRef, Input, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-dialogs",
  templateUrl: "./dialogs.component.html",
  styleUrls: ["./dialogs.component.scss"]
})
export class DialogsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogsComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
