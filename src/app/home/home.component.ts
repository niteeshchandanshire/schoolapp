import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ModalService } from '../modal.service';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id: string;
  bodyText: string;
   dialogRef: any;
   //outputString: any;
  title = "Example Angular 10 Material Dialog";
  constructor(private router: Router,public authService: AuthService, private modalService: ModalService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('token');
    this.bodyText = 'This text can be updated';
  }

  //openModal(id: string) {
    //this.modalService.open(id);
//}

//closeModal(id: string) {
  //  this.modalService.close(id);
//}

openDialog() {
  const dialogConfig = new MatDialogConfig();
  //dialogConfig.data = "some data";
  dialogConfig.data = this.bodyText;
  //this.matDialog.open(ModalComponent, dialogConfig);
  this.dialogRef = this.matDialog.open(ModalComponent, dialogConfig);
  this.dialogRef.afterClosed().subscribe(value => {
    console.log(`Dialog sent: ${value}`);
    if(value)
    this.bodyText = value;
  });
}



}
