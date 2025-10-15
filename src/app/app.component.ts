import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TrackingState } from './store/tracking.reducer';
import { resetTracking } from './store/tracking.actions';
import { MapComponent } from './components/map/map.component';
import { AnimatedCounterComponent } from './components/animated-counter/animated-counter.component';
import { ClickTrackerDirective } from './directives/click-tracker.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    MapComponent, 
    AnimatedCounterComponent,
    ClickTrackerDirective
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private store = inject(Store);
  tracking: Observable<TrackingState>;

  constructor() {
    this.tracking = this.store.select('tracking');
  }

  resetCounters() {
    this.store.dispatch(resetTracking());
  }
}
