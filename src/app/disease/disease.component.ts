import { Component, OnInit } from '@angular/core';
import { Disease, HttpClientService } from '../service/httpclient.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {

  diseases:Disease;
    
   
  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
     this.httpClientService.getDiseases().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

handleSuccessfulResponse(response)
{
    this.diseases=response;
}


setChangeHandler(event:any)
{
  this.diseases.disease_name=event.target.value;

}
}