import { Component } from '@angular/core';
import * as _ from 'lodash';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../../node_modules/devextreme/dist/css/dx.light.css',
     '../../node_modules/devextreme/dist/css/dx.common.css',
     './app.component.css',
  ],
  encapsulation: ViewEncapsulation.None // Make these globally available
})
export class AppComponent {
  title = 'app works!';
  arr = [{
    a: "a",
    b:"b"
  },{
    a: "b",
    b:"c"
  }, {v: "v"}];

  test = _.filter(this.arr, {a: "a"});

  okButtonOptions = {
    text: 'press hard',
    type: 'normal',
    onClick: function() {
        alert('geil');
    }
  }
}
