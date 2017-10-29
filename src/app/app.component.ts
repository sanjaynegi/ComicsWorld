import { Component, OnInit } from '@angular/core';
import {ComicsDataService} from './comics-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [ComicsDataService]
})
export class AppComponent implements OnInit{
	constructor( 	private comicsDataService: ComicsDataService) { }
    title = 'MyComicsWorld!';
   	results;
  

  ngOnInit(): void {
    // this.getEventsData();
  	}
  	getEventsData(): void {
		  this.comicsDataService.getEventsList().subscribe((response)=>{
		  	this.results=response.data.results;
		  	console.log(this.results);
		  });
		   
	}
	
}
