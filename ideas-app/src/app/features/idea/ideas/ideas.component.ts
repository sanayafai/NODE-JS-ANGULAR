import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Idea} from '@app/models/idea';
import {Store} from '@ngrx/store';


import {LoadIdeas} from '@app/features/idea/state/idea.action';
import {AppState} from '@app/features/idea/state';
import {selectAllIdeas} from '@app/features/idea/state/idea.selector';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.sass']
})
export class IdeasComponent implements OnInit {

  ideas: Observable<Idea[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadIdeas());
    this.ideas = this.store.select(selectAllIdeas);
  }

}
