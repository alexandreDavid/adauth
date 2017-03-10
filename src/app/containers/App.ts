import {Component} from '@angular/core';
import {HeaderComponent} from '../components/Header';
import {MainSectionComponent} from '../components/MainSection';

@Component({
  selector: 'linkzik-app',
  template: require('./App.html'),
  directives: [HeaderComponent, MainSectionComponent]
})
export class AppComponent {
}
