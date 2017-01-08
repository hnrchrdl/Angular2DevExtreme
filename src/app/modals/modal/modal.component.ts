import { Component, OnInit } from '@angular/core';
import { ModalsService } from '../modals.service';

@Component({
  selector: 'xxx',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalsService: ModalsService) { }

  ngOnInit() {
  }


}
