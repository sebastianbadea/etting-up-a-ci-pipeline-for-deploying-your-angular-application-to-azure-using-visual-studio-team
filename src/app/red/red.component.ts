import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red',
  template: `
    <div class="wrapper"></div>
  `,
  styles: ['div.wrapper { width: 500px; height: 500px; background-color: red; }']
})
export class RedComponent {}