import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:Object;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.authService.getProfiles().subscribe(dashboard => {
      this.user = dashboard.user;
    },
     err => {
       console.log(err);
       return false;
     });
  }

}
