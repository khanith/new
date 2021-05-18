import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee, Employee2, Names } from '../service/httpclient.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  user: Employee2 = new Employee2(0,"","","","","","");
  name2:Names;

  constructor(
    private httpClientService: HttpClientService
  ) { }

 
  ngOnInit() {
    this.httpClientService.getNames().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
 }

handleSuccessfulResponse(response)
{
   this.name2=response;
}

  createEmployee(): void {
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => { alert("Employee created successfully.");
        });

  };

  setChangeHandler(event:any)
  {
    this.user.ename=event.target.value;
  }
}