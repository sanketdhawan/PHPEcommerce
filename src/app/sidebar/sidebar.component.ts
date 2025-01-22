import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SidebarItem, SIDEBAR_MENU } from '../_data/data';
import { RouterModule } from '@angular/router';
import { AuthService } from '../_services/authentication.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems: SidebarItem[] = SIDEBAR_MENU;
  
  constructor(private authService: AuthService) {}

  @Input() name!: string;

  isOpen= false;
  toggleActive(item: any) {
    item.isActive = !item.isActive; // Toggle the isActive property
  }

  toggleMenu(item: any) {
    console.log(item)
    item.isOpen = !item.isOpen;
  }
}
