import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidation } from 'src/app/shared/validator/CustomValidation';
import { Router } from '@angular/router';
import { trigger, state, animate, style, transition } from "@angular/animations";

declare var $: any;
@Component({
  selector: 'app-testprint',
  templateUrl: './testprint.component.html',
  styleUrls: ['./testprint.component.scss'],
  animations: [
    trigger('showhide', [
      state('show', style({
        'height': '*',
        'opacity': '1'
      })),
      state('hide', style({
        'height': '0',
        'opacity': '0'
      })),
      transition('show => hide', animate('1s ease-out')),
      transition('hide => show', animate('500ms ease-in'))
    ])
  ]
})
export class TestprintComponent implements OnInit {
  changeState: string = 'show';



  items = [{ itemid: 1, name: 'molto', price: 4 }, { itemid: 2, name: 'pepsi', price: 5 },
  { itemid: 3, name: 'nestle', price: 8 },
  { itemid: 4, name: 'layz', price: 15 },
  { itemid: 5, name: 'candy', price: 7 }];

  constructor(private fb: FormBuilder, private router: Router) {
  }

  toggleState() {

    return this.changeState === 'show' ? this.changeState = 'hide' : this.changeState = 'show';

  }

  myform: FormGroup;

  formErrors = {
    firstName: '',
    lastName: '',
    salary: ''
  };

  validationMessage = {
    firstName: {
      required: 'this field is required'
    },
    lastName: {
      required: 'this field is required'
    },
    salary: {
      required: 'this field is required',
      notNumber: 'this field allow numbers only'
    }
  };

  ngOnInit() {
    // init the form
    this.createForm();
    // validate the form
    this.myform.valueChanges.subscribe(data => {
      this.validateForm();
    });
    ///////////////////////

  }

  createForm() {
    this.myform = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      salary: ['', [Validators.required, CustomValidation.isnumeric]]
    });
  }

  validateForm() {
    for (let field in this.formErrors) {
      // clear the field
      this.formErrors[field] = '';
      let input = this.myform.get(field);
      for (let error in input.errors) {
        this.formErrors[field] = this.validationMessage[field][error];
      }
    };
  }

  onSubmit() {

    if (this.myform.valid) {
      console.log(this.myform.value);
    }
  }

  goAbout() {
    this.router.navigate(['/aboutus'], { queryParams: { age: 25, name: 'ahmedzoz' } });
  }




}
