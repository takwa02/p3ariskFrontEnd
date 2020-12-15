import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show:boolean=true;
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.show=this.tokenStorage.getLoggedIn();
  }

}
