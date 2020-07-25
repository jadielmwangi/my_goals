import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-mwas',
  templateUrl: './goal-mwas.component.html',
  styleUrls: ['./goal-mwas.component.css']
})
export class GoalMwasComponent implements OnInit {
  @Input() goal: Goal;

  constructor() { }

  ngOnInit(): void {
  }

}
