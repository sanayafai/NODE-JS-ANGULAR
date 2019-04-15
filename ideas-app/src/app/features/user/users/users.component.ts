import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '@app/models/user';
import {Store} from '@ngrx/store';
import {AppState} from '@app/features/user/state';
import {LoadUsers} from '@app/features/user/state/user.action';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadUsers());
    this.users = this.store.select(state => state.users.users);
  }

}
