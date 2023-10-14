import { Component } from '@angular/core';
import { faBarChart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  bar = faBarChart;
  appear: boolean = false;

  barClick() {
    this.appear = !this.appear;
  }
}
