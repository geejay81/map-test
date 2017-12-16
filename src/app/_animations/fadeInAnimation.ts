import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =

trigger('fadeInAnimation', [
  state('inactive', style({
    opacity: 0
  })),
  state('active',   style({
    opacity: 1
  })),
  transition('inactive => active', animate('100ms ease-in')),
  transition('active => inactive', animate('100ms ease-out'))
]);
