import { Component } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  facebook = faFacebook;
  instgram = faInstagram;
  twitter = faTwitter;
  github = faGithub;
  linkedin = faLinkedin;
}
