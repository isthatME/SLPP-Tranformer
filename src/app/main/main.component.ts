import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  form: FormBuilder;
  numberOfColum: number = 1;
  numberOfLine: number = 1;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(form){
    
  }
  addColum(){
    this.numberOfColum++
  }
  removeColum(){
    this.numberOfColum--
  }
  addLine(){
    this.numberOfLine++
  }
  removeLine(){
    this.numberOfLine--
  }
}
