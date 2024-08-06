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
    const onda = document.querySelector('.onda') as HTMLImageElement;

    if (isDarkMode) {
      document.body.classList.add('dark-theme');

      h1txtShadow.forEach(e => {
        e.classList.add('txtShadow-dark-theme')
      })
      onda.src = '../../../assets/elementos/ondaEscura.png';

    } else {
      document.body.classList.remove('dark-theme');

      h1txtShadow.forEach(e => {
        e.classList.remove('txtShadow-dark-theme')
      })

      onda.src = 'assets/elementos/ondaClara.png';
    }
  }
}