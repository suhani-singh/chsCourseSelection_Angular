import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-grade-pg',
  templateUrl: './grade-pg.component.html',
  styleUrls: ['./grade-pg.component.css']
})
export class GradePgComponent implements OnInit {
  isSubmitted = false;
  constructor(public fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  gradeSelectionForm = this.fb.group({
    fav_language: ['']
  })
 /* get myForm() {
    return this.gradeSelectionForm.get('fav_language');
  }*/
  onSubmit() {
    this.isSubmitted = true;
    console.log(this.gradeSelectionForm.valid)
    if (!this.gradeSelectionForm.valid) {
      alert("Please select a grade")
      return false;
    } else {
      this.router.navigate(['/grad/req/pg']);
      //alert(JSON.stringify(this.gradeSelectionForm.value))
    }
    return false;
  }

}
