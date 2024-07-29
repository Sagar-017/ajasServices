import { Component } from '@angular/core';
import { HeaderComponent } from "../../layouts/header/header.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

}
