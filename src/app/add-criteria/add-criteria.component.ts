import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms'
import { Validators } from '@angular/forms';
import { Criteria } from '../criteria';
import { CriteriaService } from '../services/criteria.service';
import { CriteriaDef } from '../model/CriteriaDef';


@Component({
  selector: 'app-add-criteria',
  templateUrl: './add-criteria.component.html',
  styleUrls: ['./add-criteria.component.css']
})
export class AddCriteriaComponent implements OnInit {
 
  criteria: CriteriaDef = new CriteriaDef();
  submitted = false;

  constructor(private criteriaService: CriteriaService) { }

  ngOnInit() {
  }

  newCriteria(): void {
    this.submitted = false;
    this.criteria = new CriteriaDef();
  }

  save() {
    this.criteriaService.createCriteria(this.criteria)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.criteria = new CriteriaDef();
  }

  onSubmit() {
    this.save();
  }
  


}
