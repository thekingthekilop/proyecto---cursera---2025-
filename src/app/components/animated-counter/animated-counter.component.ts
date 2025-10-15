import { Component, Input, OnChanges } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-counter.component.html',
  styleUrls: ['./animated-counter.component.scss'],
  animations: [
    trigger('countAnimation', [
      state('increased', style({
        transform: 'scale(1.2)',
        color: '#4CAF50'
      })),
      state('normal', style({
        transform: 'scale(1)',
        color: '#333'
      })),
      transition('normal => increased', [
        animate('300ms ease-out')
      ]),
      transition('increased => normal', [
        animate('200ms ease-in')
      ])
    ])
  ]
})
export class AnimatedCounterComponent implements OnChanges {
  @Input() count: number = 0;
  @Input() label: string = '';
  
  animationState: string = 'normal';

  ngOnChanges() {
    if (this.count > 0) {
      this.animationState = 'increased';
      setTimeout(() => {
        this.animationState = 'normal';
      }, 300);
    }
  }
}
