import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-list-school',
  templateUrl: './list-school.component.html',
  styleUrls: ['./list-school.component.css']
})
export class ListSchoolComponent implements OnInit {
  schoolList:any=[];
  constructor(public schoolsService:SchoolService, private router:Router) { }

  ngOnInit(): void {
  this.loadSchools();

  }

  loadSchools(){
    return this.schoolsService.GetSchools().subscribe((data:{})=>{
      this.schoolList=data;
      console.log(data);
    });
  }

  deleteSchool(id:number){
    this.schoolsService.DeleteSchool(id).subscribe((response)=>{
      this.loadSchools();
    }) ;
  }

  onEdit(school:School){
    console.log(school);
    this.schoolsService.selectSchool=Object.assign({}, school);
    this.router.navigate(["/add-school"]);
  }

}
