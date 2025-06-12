import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavSideBarComponent } from './shared/components/nav-side-bar/nav-side-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavSideBarComponent, MatSidenavModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  @Input() isSadnavCollapsed = true;
  @Input() screenWidth = 0;
  @Input() isSidenavOpen = false;
  @Input() isOVerlayOpen = false;

  protected title = 'PrevisaoSync';

  ngAfterViewInit(): void {
    this.isSidenavOpen = true;
    console.log('after view ' + this.isSidenavOpen);

  }

  onToggleSideNav(data: any): void {
    this.screenWidth = data.screenWidth;
    this.isSadnavCollapsed = data.showToggleButton;
    this.isOVerlayOpen = data.isOVerlayOpen;
  }

  closeSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
    console.log('close sidenav');
  }
}
