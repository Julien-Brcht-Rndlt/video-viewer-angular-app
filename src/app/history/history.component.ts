import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../models/video';

@Component({
  selector: 'History',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  title: string = 'History List';

  constructor() {}

  @Input()
  videoHistory: Array<Video> = [];

  ngOnInit(): void {}
}
