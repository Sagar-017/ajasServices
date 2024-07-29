import { Component } from '@angular/core';
import { HeaderComponent } from "../../layouts/header/header.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-our-service',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.css'
})
export class OurServiceComponent {

}
