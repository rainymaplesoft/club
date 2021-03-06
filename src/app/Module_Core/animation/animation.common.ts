// http://jasonwatmore.com/post/2017/04/19/angular-2-4-router-animation-tutorial-example

// import the required animation functions from the angular animations module
// import { trigger, state, animate, transition, style } from '@angular/core'; // angular-2
import {
  trigger,
  state,
  animate,
  transition,
  style,
  keyframes
} from '@angular/animations';

export const visibilityChanged =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('visibilityChanged', [
    state('show', style({ opacity: 1 })),
    state('hide', style({ opacity: 0 })),
    transition('show => hide', animate('600ms')),
    transition('hide => show', animate('300ms'))
  ]);

export const fadeInAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeInAnimation', [
    // route 'enter' transition
    transition(':enter', [
      // css styles at start of transition
      style({ opacity: 0 }),

      // animation and styles at end of transition
      animate('.3s', style({ opacity: 1 }))
    ])
  ]);

export const fadeInOutAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeInOutAnimation', [
    // route 'enter' transition
    transition(':enter', [
      // css styles at start of transition
      style({
        opacity: 0
      }),
      animate(
        '.3s',
        style({
          // animation and styles at end of transition
          opacity: 1
        })
      )
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('200ms', style({ opacity: 0 }))
    ])
  ]);

export const fadeOutAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeOutAnimation', [
    // route 'enter' transition
    transition(':leave', [
      // css styles at start of transition
      style({ opacity: 1 }),

      // animation and styles at end of transition
      animate('.3s', style({ opacity: 0 }))
    ]),

    transition('*=>leave', [
      // css styles at start of transition
      style({ opacity: 1 }),

      // animation and styles at end of transition
      animate('.3s', style({ opacity: 0, display: 'none' }))
    ])
  ]);

export const slideUpDownAnimation = trigger('slideUpDownAnimation', [
  transition(':enter', [
    style({ height: 0, opacity: 0 }),
    animate('200ms ease-in', style({ height: '*', opacity: 1 }))
  ]),
  transition(':leave', [
    style({ height: '*', opacity: 1 }),
    animate('200ms ease-out', style({ height: 0, opacity: 0 }))
  ])
]);

export const slideInDownAnimation = trigger('slideInDownAnimation', [
  transition(':enter', [
    style({ transform: 'translateY(-100px)' }),
    animate('400ms ease-out', style({ transform: 'translateY(0)' }))
  ])
]);
export const slideInOutAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('slideInOutAnimation', [
    // end state styles for route container (host)
    state(
      '*',
      style({
        // the view covers the whole screen with a semi tranparent background
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
      })
    ),

    // route 'enter' transition
    transition(':enter', [
      // styles at start of transition
      style({
        // start with the content positioned off the right of the screen,
        // -400% is required instead of -100% because the negative position adds to the width of the element
        right: '-400%',

        // start with background opacity set to 0 (invisible)
        backgroundColor: 'rgba(0, 0, 0, 0)'
      }),

      // animation and styles at end of transition
      animate(
        '.5s ease-in-out',
        style({
          // transition the right position to 0 which slides the content into view
          right: 0,

          // transition the background opacity to 0.8 to fade it in
          backgroundColor: 'rgba(0, 0, 0, 0.8)'
        })
      )
    ]),

    // route 'leave' transition
    transition(':leave', [
      // animation and styles at end of transition
      animate(
        '.5s ease-in-out',
        style({
          // transition the right position to -400% which slides the content out of view
          right: '-400%',

          // transition the background opacity to 0 to fade it out
          backgroundColor: 'rgba(0, 0, 0, 0)'
        })
      )
    ])
  ]);

export const puffUpAnimation = trigger('puffUpAnimation', [
  transition('initial <=> puffUp', [
    style({}),
    animate(
      '0.6s  ease-out',
      style({
        transform: 'translateY(-400px) scale(0.2, 0.2)',
        // position: 'absolute',
        'max-width': '600px',
        opacity: 0
      })
    )
  ])
]);
