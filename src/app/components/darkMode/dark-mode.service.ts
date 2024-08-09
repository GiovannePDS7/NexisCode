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
    const linha = document.querySelectorAll(".linha");
    const Mvv = document.querySelectorAll(".mvv");
    const Qmsomos_txt = document.querySelectorAll('.qm-somos');
    const ContainerQmSomos = document.querySelectorAll('.grandContainerQuemSomos');

    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      linha.forEach(e => {
        e.classList.add('linha-white');
      })
      h1txtShadow.forEach(e => {
        e.classList.add('txtShadow-dark-theme')
      })
      ondas.forEach(e => {
        e.src = '../../../assets/elementos/ondaEscura.png';
      })
      logo.forEach(e => {
        e.src = '../../../assets/Logo/Logo_branca.png';
      })

      Mvv.forEach(e => {
        e.classList.add('Mvv-white')
      })
      Qmsomos_txt.forEach(e => {
        e.classList.add('Mvv-white');
      })
      ContainerQmSomos.forEach(e => {
        e.classList.add('ContainerQmSomosBg');
      })
    } else {
      document.body.classList.remove('dark-theme');

      Mvv.forEach(e => {
        e.classList.remove('Mvv-white')
      })

      linha.forEach(e => {
        e.classList.remove('linha-white');
      })

      h1txtShadow.forEach(e => {
        e.classList.remove('txtShadow-dark-theme')
      })

      ondas.forEach(e => {
        e.src = '../../../assets/elementos/ondaClara.png';
      })
      logo.forEach(e => {
        e.src = '../../../assets/Logo/Logo_preta.png';
      })
      Qmsomos_txt.forEach(e => {
        e.classList.remove('Mvv-white');
      })
      ContainerQmSomos.forEach(e => {
        e.classList.remove('ContainerQmSomosBg');
      })
    }
  }
}