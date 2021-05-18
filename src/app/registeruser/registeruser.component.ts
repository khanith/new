import { Component, OnInit } from '@angular/core';
import { HttpClientService, Login } from '../service/httpclient.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  users:Login = new Login("","");
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

  createUser(): void {
    this.httpClientService.createUser(this.users)
        .subscribe( data => {
          alert(" Registered successfully.");
        });

  };
}
