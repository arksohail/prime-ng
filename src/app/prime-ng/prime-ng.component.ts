import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-prime-ng',
  standalone: true,
  imports: [
    ButtonModule,
    IconFieldModule
  ],
  templateUrl: './prime-ng.component.html',
  styleUrl: './prime-ng.component.css'
})
export class PrimeNgComponent {

}
