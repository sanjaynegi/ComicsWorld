import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {md5} from './md5';
import { URLSearchParams} from '@angular/http'

@Injectable()
export class ComicsDataService {

 constructor(private http: Http) { }
  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl:string="https://gateway.marvel.com/v1/public/";
  private privateKey="af1bc129979304c4ecd707631582216e4a5777d4";
  private publicKey="e1eb0c996ee8d51d99ec212b858ff6e4";

	

  /*getCharactersList(){
  	
  	var ts= new Date().getDate();
  	var hashString=ts+this.privateKey+this.publicKey;
  	var hash=md5(hashString);
 	var url= this.baseUrl+'characters';
   	let params: URLSearchParams = new URLSearchParams();
	 params.set('apikey', this.publicKey);
	 params.set('ts', ts.toString());
	 params.set('hash',hash);
	 params.set('limit',"24")
  	
 	 return this.http.get(url, {search:params}).map((response)=> {
	 	return response.json()
	 }).catch((error)=>{
	 	return error;
	 })

  }*/
  getCharactersList(offset){
    var ts= new Date().getDate();
    var hashString=ts+this.privateKey+this.publicKey;
    var hash=md5(hashString);
   var url= this.baseUrl+'characters';
     let params: URLSearchParams = new URLSearchParams();
   params.set('apikey', this.publicKey);
   params.set('ts', ts.toString());
   params.set('hash',hash);
   params.set('limit',"24")
    params.set('offset',offset);
    return this.http.get(url, {search:params}).map((response)=> {
     return response.json()
   }).catch((error)=>{
     return error;
   })

  }
  getCharacterDetails(id: number){
console.log("inside getCharacterDetails");
  var ts= new Date().getDate();
    var hashString=ts+this.privateKey+this.publicKey;
    var hash=md5(hashString);
   var url= `${this.baseUrl}/characters/${id}`;
     let params: URLSearchParams = new URLSearchParams();
   params.set('apikey', this.publicKey);
   params.set('ts', ts.toString());
   params.set('hash',hash);
   //params.set('characterId',id.toString());
    
    return this.http.get(url, {search:params}).map((response)=> {
     return response.json()
   }).catch((error)=>{
     return error;
   })
  }

  getComicsList(){
  var ts= new Date().getDate();
    var hashString=ts+this.privateKey+this.publicKey;
    var hash=md5(hashString);
   var url= this.baseUrl+'comics';
     let params: URLSearchParams = new URLSearchParams();
   params.set('apikey', this.publicKey);
   params.set('ts', ts.toString());
   params.set('hash',hash);
   params.set('limit',"24")
   // params.set('offset',offset);
    return this.http.get(url, {search:params}).map((response)=> {
     return response.json()
   }).catch((error)=>{
     return error;
   })
  }
  getSeriesList(){

  }
  getStoriesList(){

  }
  getEventsList(){
  	var ts= new Date().getDate();
  	var hashString=ts+this.privateKey+this.publicKey;
  	var hash=md5(hashString);
 	var url= this.baseUrl+'events';
   	let params: URLSearchParams = new URLSearchParams();
	 params.set('apikey', this.publicKey);
	 params.set('ts', ts.toString());
	 params.set('hash',hash);
	// params.set('offset',"20")
  	
 	 return this.http.get(url, {search:params}).map((response)=> {
	 	return response.json()
	 }).catch((error)=>{
	 	return error;
	 })

  }

}
