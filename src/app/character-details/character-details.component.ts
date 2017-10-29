import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }    from '@angular/common';
import 'rxjs/add/operator/switchMap'; 
import {ComicsDataService} from 'app/comics-data.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
  providers: [ComicsDataService]
})
export class CharacterDetailsComponent implements OnInit {
	results;

  constructor(private route: ActivatedRoute,
  				private location: Location,	private comicsDataService: ComicsDataService) { }

  ngOnInit() {
  	this.route.params.subscribe(params=>{
  		this.comicsDataService.getCharacterDetails(params['id']).subscribe((response)=>{
  			console.log(response);
  			this.results=response.data.results;
  		})
  	})
    // .switchMap((params: Params) => this.comicsDataService.getCharacterDetails(+params['id']))
    // .subscribe((response)=>{

    };
  
  goBack(): void {
  this.location.back();
}

}
