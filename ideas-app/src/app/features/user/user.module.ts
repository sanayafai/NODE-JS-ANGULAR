import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UIModule} from '@app/ui/ui.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {userReducer} from '@app/features/user/state/user.reducer';
import {UserEffect} from '@app/features/user/state/user.effect';
import {UsersComponent} from './users/users.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '', component: UsersComponent
  }
];

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UIModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffect])
  ]
})
export class UserModule {
}
