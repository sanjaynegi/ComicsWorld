import { Component, OnInit } from '@angular/core';
import {ComicsDataService} from 'app/comics-data.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
   providers: [ComicsDataService]
})
export class ComicsComponent implements OnInit {
	results;
	rows;
  constructor( 	private comicsDataService: ComicsDataService) { }

  ngOnInit() {
  	this.getComicsListFromService();
  }
  getComicsListFromService(){
    //this.offset=this.offset;
  	this.comicsDataService.getComicsList().subscribe((response)=>{
		  	this.results=this.chunk(response.data.results);
		  	console.log(this.results);
		  });
  }
   chunk(arr) {
   var	size=3;
  var newArr = [];
  for (var i=0; i<arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}

}
