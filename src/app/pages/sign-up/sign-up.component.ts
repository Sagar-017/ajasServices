import { Component } from '@angular/core';
import { HeaderComponent } from "../../layouts/header/header.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
