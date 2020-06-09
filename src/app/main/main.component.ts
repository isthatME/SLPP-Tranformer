import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  form: FormBuilder;
  numberOfColums: number = 1;
  numberOfLines: number = 3;
  colums: any;
  lines: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createTableaux()
  }

  onSubmit(form){
    
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
    this.numberOfColums--
    this.createTableaux()
  }
  addLine(){
    this.numberOfLines++
  }
  removeLine(){
    this.numberOfLines--
  }
}
