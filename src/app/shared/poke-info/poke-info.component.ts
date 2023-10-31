import { Component } from '@angular/core';
import { PokeCheckService } from 'src/app/service/poke-check.service';

@Component({
  selector: 'poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.scss']
})
export class PokeInfoComponent {
  constructor ( public pokeCheckService: PokeCheckService ) {}

  checkbox1Checked = false;

  onCheckbox1Change() {
    this.checkbox1Checked = !this.checkbox1Checked;
  }

}
