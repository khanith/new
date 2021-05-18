import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  HttpClientService, PatientDiagnosis,Disease } from '../service/httpclient.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  diagnosises:PatientDiagnosis;
  diseases:Disease;
  
  // @ViewChild('content') content:ElementRef;
  // public downloadPDF(){
  //    let doc=new jsPDF();
  //    let specialElementHandlers={
  //      '#editor':function(element, renderer){
  //         return true;
  //      }
  //    };

  //    let content=this.content.nativeElement;
  // }

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
