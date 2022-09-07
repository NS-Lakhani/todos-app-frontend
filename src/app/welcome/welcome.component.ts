import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name: string = ''
  welcomeMsg: string = ''

  constructor(private route: ActivatedRoute,
              private welcomeData: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
    console.log(this.name)
  }

  getCustomWelcomeMsg() {
    console.log(this.welcomeData.getCustomWelcomeMsg(this.name))
    this.welcomeData.getCustomWelcomeMsg(this.name).subscribe(
      response => this.handleSuccessfulResponse(response.message),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(resp) {
    this.welcomeMsg = resp
    console.log(resp)
  }

  handleErrorResponse(error) {
    this.welcomeMsg = error.error.message
  }  

}
