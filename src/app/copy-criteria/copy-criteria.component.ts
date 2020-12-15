import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-copy-criteria',
  templateUrl: './copy-criteria.component.html',
  styleUrls: ['./copy-criteria.component.css']
})
export class CopyCriteriaComponent  {

  CriteriaA = new FormGroup({

    
    CriteriaName: new FormControl('',Validators.required),
    Description: new FormControl('',Validators.required),
    CriteriaType: new FormControl('',Validators.required),
    YearApplicable: new FormControl('',Validators.required),
    Query: new FormControl('',Validators.required),
  
  })
}
