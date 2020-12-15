import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from '../model/Users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.css']
})
export class UserManagmentComponent implements OnInit {
  users: Observable<Users[]>;
  @Input() user: Users;
  public list:any [] = [];
   userList: Observable<Users[]> ;
   
   
  constructor(private route: ActivatedRoute,private userService: UserService) { }

  
    ngOnInit() {
   
      this.test1();
     }
    
    
     test1() {
      this.userList = this.userService.getUsersList();  
      console.log(this.list);
     } 

}
