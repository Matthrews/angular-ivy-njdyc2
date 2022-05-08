import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-life-circles',
  templateUrl: './life-circles.component.html',
  styleUrls: ['./life-circles.component.css'],
})
export class LifeCirclesComponent implements OnInit {
  constructor() {}

  userInfo: UserInfo = INTIAL_USER_INFO;

  ngOnInit() {
    console.log('ngOnInit...');
  }

  ngDoCheck() {
    console.log('ngDoCheck...');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit...');
  }

  onSubmit(formData: NgForm) {
    this.userInfo = formData.value;
    console.log('Form Submitted!', formData.value);
  }

  ngOnChanges(current, previous) {
    console.log('ngOnChanges...', current, previous);
  }

  getDsiplayInfo() {
    if (this.userInfo) {
      return JSON.stringify(this.userInfo, null, 4);
    }

    return 'Need update';
  }
}

const INTIAL_USER_INFO: UserInfo = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
};

interface UserInfo {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
