import { Component } from '@angular/core';
import { DarkModeService } from '../darkMode/dark-mode.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  isDarkMode: boolean;

  constructor(private darkMode: DarkModeService) {
    this.isDarkMode = darkMode.isDarkMode();
  }

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkMode.setDarkMode(this.isDarkMode);
  }
}
