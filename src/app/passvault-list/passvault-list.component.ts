import { Component, OnInit } from '@angular/core';
import { PassvaultService } from '../passvault.service';
import { Passvault } from '../passvault';
import { Observable, Subject } from "rxjs";

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-passvault-list',
  templateUrl: './passvault-list.component.html',
  styleUrls: ['./passvault-list.component.css']
})
export class PassvaultListComponent implements OnInit {

  constructor(private passvaultservice: PassvaultService) { }

  passvaultArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  passvaults: Observable<Passvault[]>;
  passvault: Passvault = new Passvault();
  deleteMessage = false;
  passvaultlist: any;
  isupdated = false;


  ngOnInit() {
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.passvaultservice.getPassvaultList().subscribe(data => {
      this.passvaults = data;
      this.dtTrigger.next();
    })
  }

  deletePassvault(id: String) {
    this.passvaultservice.deletePassvault(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage = true;
          this.passvaultservice.getPassvaultList().subscribe(data => {
            this.passvaults = data
          })
        },
        error => console.log(error));
  }

  updatePassvault(id: String) {
    this.passvaultservice.getPassvault(id)
      .subscribe(
        data => {
          this.passvaultlist = data
        },
        error => console.log(error));
  }

  passvaultupdateform = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    url: new FormControl(),
    status: new FormControl(),
    responseCode: new FormControl()
  });

  updatePass() {
    this.passvault = new Passvault();
    this.passvault.id = this.PassvaultId.value;
    this.passvault.username = this.PassvaultUserName.value;
    this.passvault.password = this.PassvaultUserPassword.value;
    this.passvault.url = this.PassvaultUrl.value;
    this.passvault.status = this.PassvaultStatus.value;
    this.passvault.responseCode = this.PassvaultResponseCode.value;

    this.passvaultservice.updatePassvault(this.passvault.id, this.passvault).subscribe(
      data => {
        this.isupdated = true;
        this.passvaultservice.getPassvaultList().subscribe(data => {
          this.passvaults = data
        })
      },
      error => console.log(error));
  }

  get PassvaultUserPassword() {
    return this.passvaultupdateform.get('password');
  }

  get PassvaultUserName() {
    return this.passvaultupdateform.get('username');
  }

  get PassvaultUrl() {
    return this.passvaultupdateform.get('url');
  }

  get PassvaultResponseCode() {
    return this.passvaultupdateform.get('responseCode');
  }

  get PassvaultStatus() {
    return this.passvaultupdateform.get('status');
  }

  get PassvaultId() {
    return this.passvaultupdateform.get('id');
  }

  changeisUpdate() {
    this.isupdated = false;
  }
}  