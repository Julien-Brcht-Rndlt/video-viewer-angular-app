import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'History',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  title: string = 'History List';
  constructor() {}

  ngOnInit(): void {}
}
