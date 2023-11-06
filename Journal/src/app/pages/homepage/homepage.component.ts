import { Component } from '@angular/core';
import {DialogService} from "../../dialog/dialogService";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  constructor(private dialogService: DialogService) {
  }

  openDialog(): void {
    this.dialogService.openDialog();
  }
}
