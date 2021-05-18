import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee, HttpClientService } from '../service/httpclient.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  
  

  Patients: Employee = new Employee(0,"","","","","");
  constructor(
    private httpClientService:HttpClientService,
    public activateroute:ActivatedRoute
  ) { 
  }

  ngOnInit(): void 
  {
     this.activateroute.params.subscribe(params => {
      this.Patients.patient_ID = params['id'];
      });
  }
  updateEmployees():void
  {
    
    
    this.httpClientService.updateEmployees(this.Patients)
    .subscribe(
      success => alert("Done"),
      error => alert(error)
    );
  }

}
