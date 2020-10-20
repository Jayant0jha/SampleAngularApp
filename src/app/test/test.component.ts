import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(public auth: AuthserviceService) { }

  ngOnInit(): void {
    console.log(this.auth.getUserEmail());
    console.log(this.auth.getUserId())
  }

}
