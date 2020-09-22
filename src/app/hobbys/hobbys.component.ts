import { Component, OnInit } from '@angular/core';

import { hobbys } from '../hobbys';

@Component({
  selector: 'app-hobbys',
  templateUrl: './hobbys.component.html',
  styleUrls: ['./hobbys.component.sass']
})
export class HobbysComponent implements OnInit {

  hobbys =hobbys

  constructor() { }

  ngOnInit(): void {
  }

}
