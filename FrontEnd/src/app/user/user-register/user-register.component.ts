import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { IUser } from '../IUser';
import { AlertifyService } from 'src/shared/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userRegistrationForm: FormGroup | any;
  user: IUser;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.userRegistrationForm = this.createUserRegistrationForm();
  }

  createUserRegistrationForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null]
    }, { validators: this.isPassWordMatching })
  }

  isPassWordMatching(fg: AbstractControl): Validators | null {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : { 'notMached': true }
  }

  SaveRegistrationForm() {
    if (this.userRegistrationForm.valid) {
      this.userService.addUser(this.userData());
      this.userRegistrationForm.reset()
      this.alertify.success("Congrats, you are now successfully registered...")
    } else {
      this.alertify.error(" Kindly check once...")
    }
  }

  userData(): IUser {
    return this.user = {
      name: this.userRegistrationForm.get('name').value,
      email: this.userRegistrationForm.get('email').value,
      password: this.userRegistrationForm.get('password').value,
      mobile: this.userRegistrationForm.get('mobile').value,
    }
  }

  cancelForm() {
    this.userRegistrationForm.reset()
  }

}
