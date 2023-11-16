import { Component } from '@angular/core';
import { SettingsComponent } from "../settings/settings.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-menu-feed',
  templateUrl: './menu-feed.component.html',
  styleUrls: ['./menu-feed.component.scss']
})
export class MenuFeedComponent {

  constructor(public dialog: MatDialog) {}
openDialog() {
  this.dialog.open(SettingsComponent, {
    width: '50%'
  })
  }

}
