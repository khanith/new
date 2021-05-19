import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  HttpClientService, PatientDiagnosis,Disease } from '../service/httpclient.service';
//import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import * as html2pdf from 'html2pdf.js'


@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  diagnosises:PatientDiagnosis;
  diseases:Disease;
  
  download(){
    const options={
      name:'output.pdf',
      image:{ type:'jpeg'},
      html2canvas:{},
      jsPDF:{orientation:'landscape'}
    }
    const element: Element= document.getElementById('table')
    html2pdf()
        .from(element)
        .set(options)
        .save()
  }
 

  constructor(
    private httpClientService:HttpClientService,
  ) { }

  ngOnInit() {
    this.httpClientService.getAll().subscribe(
     response =>this.handleSuccessfulResponse(response),
      );
      this.httpClientService.getDiseases().subscribe(
        responsed =>this.handleSuccessfulResponsed(responsed),
       );
 }

handleSuccessfulResponse(response)
{
   this.diagnosises=response;
   
}
handleSuccessfulResponsed(responsed)
{
   this.diseases=responsed;
   
}
setChangeHandler(event:any)
{
  this.diseases.disease_name=event.target.value;

}


}
