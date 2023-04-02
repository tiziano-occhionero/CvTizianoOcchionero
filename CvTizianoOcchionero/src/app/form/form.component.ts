import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators , FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myForm : FormGroup;


  constructor(){
    this.myForm = new FormGroup({        
      nome: new FormControl(null, [Validators.required]),
      cognome: new FormControl(),
      dNascita: new FormControl(),
      usernane: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(){
    console.log(this.myForm)
  }
/*
  constructor(fb:FormBuilder){
    this.myForm = fb.group({
      nome: [null, Validators.required],
      cognome: [null, Validators.required],
      dNascita: [null, Validators.required],
      usernane: [null, Validators.required],
      password: [null, Validators.required]
    })
  }
*/
}
