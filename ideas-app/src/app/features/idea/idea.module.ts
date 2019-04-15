import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {ideaReducer} from '@app/features/idea/state/idea.reducer';
import {IdeaEffect} from '@app/features/idea/state/idea.effect';
import {IdeasComponent} from './ideas/ideas.component';
import {UIModule} from '@app/ui/ui.module';
import { IdeaComponent } from './ideas/idea/idea.component';

const routes: Routes = [{
  path: '', component: IdeasComponent
}];

@NgModule({
  declarations: [IdeasComponent, IdeaComponent],
  imports: [
    CommonModule,
    UIModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('ideas', ideaReducer),
    EffectsModule.forFeature([IdeaEffect])
  ]
})
export class IdeaModule {
}
