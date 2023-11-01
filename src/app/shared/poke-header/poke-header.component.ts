import { Component } from '@angular/core';
import { ETheme } from 'src/app/enums/ETheme.enum';

@Component({
  selector: 'poke-header',
  templateUrl: './poke-header.component.html',
  styleUrls: ['./poke-header.component.scss']
})
export class PokeHeaderComponent {
  public icon: string = ETheme.ICON_MOON;
  public textTheme: string = ETheme.TEXT_MOON;

  public toggle(){
    const theme = document.body.classList.toggle('dark-theme');

    if(!theme){
      this.textTheme = ETheme.TEXT_SUN;
      return (this.icon = ETheme.ICON_SUN);
    }
    this.textTheme = ETheme.TEXT_MOON;
    return (this.icon = ETheme.ICON_MOON);
  }
}
