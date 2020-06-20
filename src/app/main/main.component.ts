import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  form: FormGroup;
  numberOfColums: number = 1;
  numberOfLines: number = 1;
  colums: any;
  lines: any;
  arr:any

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createTableaux()

    this.form = this.fb.group({
      functionVar: ['', Validators.required],
      decisionsVar: ['', Validators.required],
      restrictionsVar: ['', Validators.required]
    })

  }
  
 
  onSubmit(form){
    console.log(form.value)
  }
  createTableaux(){
    this.colums = Array(this.numberOfColums)
    this.colums = this.colums.fill().map((x,i)=> i == 0 ? 1 : i + 1);
    this.lines = Array(this.numberOfLines)
    this.lines = this.lines.fill().map((x,i)=> i == 0 ? 1 : i + 1);
  }
  addColum(){
    this.numberOfColums++
    this.createTableaux()
  }
  removeColum(){
    if(this.numberOfColums > 1){
      this.numberOfColums--
      this.createTableaux()
    }
    this.createTableaux()
  }
  addLine(){
    this.numberOfLines++
    this.createTableaux()
  }
  removeLine(){
    if(!(this.numberOfLines <= 1)){
      this.numberOfLines--
      this.createTableaux()   
    }
    this.createTableaux()
  }
}
