import { Injectable } from '@angular/core';

@Injectable()
export class ModalsService {

  constructor() { }

  modal: Object = {shown: true};

  setModal(shown: boolean, options: Object): void {
    Object.assign(this.modal, options, {shown: shown});
  }

}
