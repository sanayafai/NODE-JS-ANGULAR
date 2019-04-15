import {Component, OnInit} from '@angular/core';
import {AppState} from '@app/store/app-store.module';
import {Store} from '@ngrx/store';
import {MessageService} from 'primeng/components/common/messageservice';

import {SetInitialUser} from '@app/store/actions/auth.action';
import {AuthService} from '@app/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ideas-app';

  constructor(private store: Store<AppState>,
              private messageService: MessageService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.token) {
      this.store.dispatch((new SetInitialUser()));
    }
    this.store.select((state: AppState) => state.error).subscribe(value => this.showError(value.error)
    );
  }

  showError(error) {
    if (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error message',
        detail: error.message || 'Internal server error'
      });
    }
  }
}
