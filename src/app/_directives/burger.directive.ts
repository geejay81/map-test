import { Directive, HostListener, HostBinding } from '@angular/core';

/* ***************************
 *
 * This isn't working at the moment
 * as it needs to bind to a separte
 * entity to that which is calling
 * the directive.
 *
 * ***************************/

@Directive({
  selector: '[appBurger]'
})
export class BurgerDirective {
  @HostBinding('class.is-active') isMenuOpen = false;

  @HostListener('click') toggleOpenMenu() {
    console.log('clicked');
    this.isMenuOpen = !this.isMenuOpen;
  }
}
