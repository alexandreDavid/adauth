/// <reference path="../../typings/index.d.ts"/>

import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import {Component} from '@angular/core';
import {MainComponent} from './main';
import {TechsComponent} from './techs/techs';
import {FooterComponent} from './footer';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {inject, async, TestComponentBuilder, ComponentFixture} from '@angular/core/testing';

@Component({
  selector: 'linkzik-techs',
  template: ''
})
class MockTechsComponent {}
@Component({
  selector: 'linkzik-ooter',
  template: ''
})
class MockFooterComponent {}
@Component({
  selector: 'linkzik-header',
  template: ''
})
class MockHeaderComponent {}
@Component({
  selector: 'linkzik-title',
  template: ''
})
class MockTitleComponent {}

describe('main component', () => {
  it('should render the header, title, techs and footer', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb
      .overrideDirective(MainComponent, TechsComponent, MockTechsComponent)
      .overrideDirective(MainComponent, FooterComponent, MockFooterComponent)
      .overrideDirective(MainComponent, HeaderComponent, MockHeaderComponent)
      .overrideDirective(MainComponent, TitleComponent, MockTitleComponent)
      .createAsync(MainComponent)
      .then((fixture: ComponentFixture<any>) => {
        fixture.detectChanges();
        const main = fixture.nativeElement;
        expect(main.querySelector('linkzik-header')).toBeDefined();
        expect(main.querySelector('linkzik-title')).toBeDefined();
        expect(main.querySelector('linkzik-techs')).toBeDefined();
        expect(main.querySelector('linkzik-footer')).toBeDefined();
      });
  })));
});
