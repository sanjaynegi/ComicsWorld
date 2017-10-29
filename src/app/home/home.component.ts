import { Component, OnInit } from '@angular/core';
import {ComicsDataService} from 'app/comics-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ComicsDataService]
})
export class HomeComponent implements OnInit {

   constructor( 	private comicsDataService: ComicsDataService) { }

  ngOnInit() {
  }

}
