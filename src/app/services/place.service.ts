import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../models/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  selectPlace:Place=new Place();
  reqHeader=new HttpHeaders({
    'Content-Type':'aplication/json',
  })


  constructor(private http:HttpClient) { }
  baseurl='http://127.0.0.1:8000/api';
  //metodo get
  GetPlaces():Observable<Place>{
    return this.http.get<Place>(this.baseurl+'/places/');
  }
  //metodo post
  CreatePlace(place:Place):Observable<Place>{
    return this.http.post(this.baseurl+'/places/', place,{headers:this.reqHeader})
  }

  //metodo delete
  DeletePlace(id:number){
    return this.http.delete(this.baseurl+'/places/'+id+'/');
  }

  //metodo update

  UpdatePlace(id:number, place:Place){
    return this.http.put(this.baseurl+'/places/'+id+'/', place, {headers:this.reqHeader});


  }
}
