import { Component, OnInit, Inject } from '@angular/core';
import { CriteriaScore } from '../model/CriteriaScore';
import { CriteriaScoreService } from '../services/criteria-score.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-score',
  templateUrl: './add-score.component.html',
  styleUrls: ['./add-score.component.css']
})
export class AddScoreComponent implements OnInit {
  scoreCriteria: CriteriaScore = new CriteriaScore();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private scriteriaScoreservice:CriteriaScoreService,  private dialogRef: MatDialogRef<AddScoreComponent>,) { }
criteriayear:any;
  ngOnInit(): void {
  this.criteriayear= localStorage.getItem('criteriaYear');
  console.log("this.criteriayear==>"+this.criteriayear);
  }


  save() {
    this.scoreCriteria.criteriaDef=this.data.criteria;
    this.scoreCriteria.criteriaYear=this.criteriayear;
    this.scriteriaScoreservice.createCriteriaScore(this.scoreCriteria)
      .subscribe(
        data => {
          console.log(data);
        
        },
        error => console.log(error));
    this.scoreCriteria = new CriteriaScore();
  }

  onSubmit() {
    this.save();
    this.dialogRef.close();
    
  }

  close() {
    this.dialogRef.close();
}
}
