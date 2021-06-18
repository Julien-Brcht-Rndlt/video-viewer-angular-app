import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  title: string = 'Search Bar';
  label: string = 'search for your video:';
  url = '';

  constructor() {}

  ngOnInit(): void {}

  search(): void {
    console.log(`search video ${this.url} to display`);
  }
}
