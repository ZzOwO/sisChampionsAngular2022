import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Place } from 'src/app/models/place';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {

  constructor(public placeService:PlaceService, private router:Router) { }

  ngOnInit(): void {
  }

  submitForm(placeForm:NgForm){
    if(placeForm.value.id==null){
      this.placeService.CreatePlace(placeForm.value).subscribe((response)=>{
        this.router.navigate(["/list-place"]);
      });
    }else{
        this.placeService.UpdatePlace(placeForm.value.id, placeForm.value).subscribe((response)=>{
          this.router.navigate(["/list-place"]);
        });
    }
    this.resetForm(placeForm);
  }

  resetForm(placeForm:NgForm){
    if(placeForm!=null){
      placeForm.reset();
      this.placeService.selectPlace=new Place();
    }
  }
}
