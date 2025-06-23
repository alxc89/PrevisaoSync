import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoriteService } from '../../../core/services/favorites.service';

interface SideNavToggle {
  screenWidth: number;
  showToggleButton: boolean;
  isOVerlayOpen: boolean;
}

@Component({
  selector: 'app-nav-side-bar',
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './nav-side-bar.component.html',
  styleUrl: './nav-side-bar.component.css',
})
export class NavSideBarComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  showCloseButton = false;
  showToggleButton = false;
  favorites: any[] = [];
  userId = '1';

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.resize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.resize(event.target.window.innerWidth);
    this.onToggleSideNavEventEmitter({
      showToggleButton: this.collapsed,
      screenWidth: window.innerWidth,
      isOVerlayOpen: false,
    });
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.showToggleButton = false;
    this.showCloseButton = true;
    this.onToggleSideNav.emit({
      showToggleButton: this.collapsed,
      screenWidth: window.innerWidth,
      isOVerlayOpen: true,
    });
  }

  closeSidenav(): void {
    this.collapsed = true;
    this.showCloseButton = false;
    this.showToggleButton = true;
    this.onToggleSideNav.emit({
      showToggleButton: this.collapsed,
      screenWidth: window.innerWidth,
      isOVerlayOpen: false,
    });
  }

  resize(innerWidth: number): void {
    if (innerWidth < 1420) {
      this.collapsed = true;
      this.showToggleButton = true;
    } else this.collapsed = false;
    this.showToggleButton = this.collapsed;
  }

  onToggleSideNavEventEmitter(event: SideNavToggle): void {
    this.onToggleSideNav.emit({
      showToggleButton: !this.collapsed,
      screenWidth: window.innerWidth,
      isOVerlayOpen: event.isOVerlayOpen,
    });
  }

  getFavorites(): void {
    this.favoriteService.getFavorites(this.userId).subscribe({
      next: (data) => {
        console.log('Favoritos:', data);
        this.favorites = data;
      },
      error: (err) => {
        console.error('Erro ao buscar favoritos:', err);
      },
    });
  }
}
