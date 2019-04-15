import {Component, Input, OnInit} from '@angular/core';
import {Idea} from '@app/models/idea';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.sass']
})
export class IdeaComponent implements OnInit {

  @Input()
  idea: Idea;

  constructor() {
  }

  ngOnInit() {
  }

}
