import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeCheckService {
  checkbox1Checked = false;
  checkbox2Checked = false;

  constructor() { }
}
