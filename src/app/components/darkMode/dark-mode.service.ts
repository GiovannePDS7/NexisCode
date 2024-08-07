import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkMode = false;

  isDarkMode(): boolean {
    return this.darkMode;
  }

  setDarkMode(isDarkMode: boolean): void {
    this.darkMode = isDarkMode;
    const h1txtShadow = document.querySelectorAll('.txt-destaque');
    const ondas = document.querySelectorAll('.onda') as NodeListOf<HTMLImageElement>;
    const logo = document.querySelectorAll('.logoEmpresa') as NodeListOf<HTMLImageElement>;

    if (isDarkMode) {
      document.body.classList.add('dark-theme');

      h1txtShadow.forEach(e => {
        e.classList.add('txtShadow-dark-theme')
      })
     ondas.forEach(e =>{
      e.src = '../../../assets/elementos/ondaEscura.png';
     })
     logo.forEach(e =>{
      e.src = '../../../assets/Logo/Logo_branca.png';
     })

    } else {
      document.body.classList.remove('dark-theme');

      h1txtShadow.forEach(e => {
        e.classList.remove('txtShadow-dark-theme')
      })

      ondas.forEach(e =>{
        e.src = '../../../assets/elementos/ondaClara.png';
       })
       logo.forEach(e =>{
        e.src = '../../../assets/Logo/Logo_preta.png';
       })
    }
  }
}