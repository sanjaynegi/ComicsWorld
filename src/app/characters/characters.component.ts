import { Component, OnInit } from '@angular/core';
import {ComicsDataService} from 'app/comics-data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
   providers: [ComicsDataService]
})
export class CharactersComponent implements OnInit {

	results;
  offset;
  limit;
  constructor( 	private comicsDataService: ComicsDataService) { }

  ngOnInit() {
    this.offset=0;
    this.limit=24;
  	this.getCharatersListFromService();
  }
  getCharatersListFromService(){
    this.offset=this.offset;
  	this.comicsDataService.getCharactersList(this.offset).subscribe((response)=>{
		  	this.results=response.data.results;
		  	//console.log(this.results);
		  });
  }
  nextPage(){
    this.offset=this.offset+this.limit;
  this.comicsDataService.getCharactersList(this.offset).subscribe((response)=>{
        this.results=response.data.results;
        //console.log(this.results);
      });
  }
  previous(){
    this.offset=this.offset-this.limit;
    if(this.offset>=0){
  this.comicsDataService.getCharactersList(this.offset).subscribe((response)=>{
        this.results=response.data.results;
        //console.log(this.results);
      });
}
  }

}
