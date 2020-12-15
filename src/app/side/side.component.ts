import { Component, OnInit } from '@angular/core';
import { AuditSelectionExecutionComponent} from 'src/app/audit-selection-execution/audit-selection-execution.component';
import { AuditdialogComponent} from 'src/app/auditdialog/auditdialog.component';
import {MatDialog} from '@angular/material/dialog';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

public show:boolean=false;
public isadmin:boolean=false;

  //popup of audit selection
  public username:string;
  constructor(public dialog: MatDialog,private tokenStorage: TokenStorageService,private router:Router) {

  
     
  }
  ngOnInit() {
    this.username=this.tokenStorage.getUser().username;
    this.show=this.tokenStorage.getLoggedIn();
    this.isadmin=this.tokenStorage.getUser().roles.includes('ROLE_ADMIN');
    console.log(` this.show resu`+  this.show);
    }
   
  
  openDialog() {
    const dialogRef = this.dialog.open(AuditdialogComponent , { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  onSignOut() {
    this.tokenStorage.signOut();
    this.tokenStorage.setLoggedIn(false);
    this.show=this.tokenStorage.getLoggedIn();
    this.router.navigate(['login']);
  }

}
