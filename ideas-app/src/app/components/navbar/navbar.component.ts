import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/components/common/menuitem';

import {AuthService} from '@app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [{
    label: 'Home', routerLink: ['/'],
    icon: 'fa fa-home'
  },
    {
      label: 'User', routerLink: ['/users']
    },
    {
      label: 'Idea', routerLink: ['/ideas']
    }];

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

}
