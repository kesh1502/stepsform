import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'StepsForm';
  isSubmitted = false;

  resultDetails!: FormGroup
  personalDetails!: FormGroup;
  homeDetails!: FormGroup;
  officeDetails!: FormGroup;

  personal_step = false;
  home_step = false;
  office_step = false;
  step = 1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bindForm();
  }

  private bindForm(){
      this.personalDetails = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['',Validators.required],
        //gender:['',Validators.required],
        highest_qualification: ['', Validators.required],
        university: ['', Validators.required]
    });

    this.homeDetails = this.formBuilder.group({
        city: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['',Validators.required],
        pincode: ['',Validators.required]
    });

    this.officeDetails = this.formBuilder.group({
        city: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['',Validators.required],
        pincode: ['',Validators.required]
    });

    this.resultDetails = this.formBuilder.group({
      onFormSubmit(formData: any): void {
        this.personalDetails.value
        // post form data here
        alert(JSON.stringify(this.formData));
      }

    });
  }

  get personal() { return this.personalDetails.controls; }
  get home() { return this.homeDetails.controls; }
  get office() { return this.officeDetails.controls; }

  next(){
    if(this.step==1){
          this.personal_step = true;
          if (this.personalDetails.invalid) { return  }
          this.step++
    }

    if(this.step==2){
        this.home_step = true;
        if (this.homeDetails.invalid) { return }
            this.step++;
    }
  }

  previous(){
    this.step--
    if(this.step==1){
      this.personal_step = false;
    }
    if(this.step==2){
      this.office_step = false;
    }
  }

  submit(){
    if(this.step==3){
        this.isSubmitted = true;
        console.log('form submitted', this.bindForm);
    
      }
      if (this.office.invalid) { return }
    }
  }
