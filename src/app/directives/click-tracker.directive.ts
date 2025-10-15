import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementTag } from '../store/tracking.actions';

@Directive({
  selector: '[appClickTracker]'
})
export class ClickTrackerDirective implements OnInit {
  @Input('appClickTracker') trackingTag!: string;
  
  private elementRef = inject(ElementRef);
  private store = inject(Store);

  ngOnInit() {
    this.elementRef.nativeElement.addEventListener('click', () => {
      if (this.trackingTag) {
        this.store.dispatch(incrementTag({ tag: this.trackingTag }));
      }
    });
  }
}
