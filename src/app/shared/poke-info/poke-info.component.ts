import { Component } from '@angular/core';
import { PokeCheckService } from 'src/app/service/poke-check.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.scss']
})
export class PokeInfoComponent {
  constructor ( public pokeCheckService: PokeCheckService ) {}

  checkbox1Checked = false;

  toggleCheckbox() {
    this.checkbox1Checked = !this.checkbox1Checked;
    this.pokeCheckService.checkbox1Checked = !this.pokeCheckService.checkbox1Checked;
  }

  alert(){
    if(this.checkbox1Checked){
      Swal.fire({
        title: 'Parabéns! Agora, você é um verdadeiro Mestre Pokemon!',
        width: 600,
        padding: '6em',
        color: '#29335C',
        background: '#fff url(../assets/background.jpg)',
        confirmButtonColor: '#DA6244',
        backdrop: `
          rgba(41, 51, 92,0.4)
        `
      })
    }else{
      Swal.fire({
        title: 'Ops! Parece que algum Pokemon fugiu. Não desista!',
        width: 600,
        padding: '6em',
        color: '#29335C',
        background: '#fff url(../assets/background.jpg)',
        confirmButtonColor: '#DA6244',
        backdrop: `
          rgba(41, 51, 92,0.4)
        `
      })
    }
    
  }

}
