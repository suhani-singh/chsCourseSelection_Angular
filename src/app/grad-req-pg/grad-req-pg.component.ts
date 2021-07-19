import { Component, OnInit } from '@angular/core';
//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-grad-req-pg',
  templateUrl: './grad-req-pg.component.html',
  styleUrls: ['./grad-req-pg.component.css']
})
export class GradReqPgComponent implements OnInit {
  //closeResult = '';
  constructor() {}


  ngOnInit(): void {
  }

  /*open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }*/

}
