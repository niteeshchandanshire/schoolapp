import { Component, OnInit, OnDestroy, ElementRef, Input, Inject } from '@angular/core';
import { ModalService } from '../modal.service';
import { MatDialogRef, MatDialogConfig  } from "@angular/material/dialog";
import {
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
@Component({
  //selector: 'jw-modal',
    //template: 
      //  `<div class="jw-modal">
        //    <div class="jw-modal-body">
          //      <ng-content></ng-content>
          //  </div>
        //</div>
        //<div class="jw-modal-background"></div>`
        selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit,OnDestroy {

  //@Input() id: string;
  private element: any;
  public inputData: any;
  
  constructor(private modalService: ModalService, private el: ElementRef,public dialogRef: MatDialogRef<ModalComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
      //this.element = el.nativeElement;
      this.inputData = data;
  }

  //constructor(){}
  
  ngOnInit(): void {
      //let modal = this;

      // ensure id attribute exists
      //if (!this.id) {
        //  console.error('modal must have an id');
          //return;
      //}

      // move element to bottom of page (just before </body>) so it can be displayed above everything else
      //document.body.appendChild(this.element);

      // close modal on background click
      //this.element.addEventListener('click', function (e: any) {
        //  if (e.target.className === 'jw-modal') {
          //    modal.close();
          //}
      //});

      // add self (this modal instance) to the modal service so it's accessible from controllers
      //this.modalService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
      //this.modalService.remove(this.id);
      //this.element.remove();
  }

  // open modal
  open(): void {
      //this.element.style.display = 'block';
      //document.body.classList.add('jw-modal-open');
  }

  // close modal
  //close(): void {
     // this.element.style.display = 'none';
      //document.body.classList.remove('jw-modal-open');
  //}

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.inputData);
  }

  
}
