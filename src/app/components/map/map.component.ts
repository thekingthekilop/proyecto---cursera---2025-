import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickTrackerDirective } from '../../directives/click-tracker.directive';

// Para la versión 13.0.0, los módulos se importan automáticamente
// No necesitamos importar módulos específicos

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, ClickTrackerDirective],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  center: [number, number] = [-74.5, 40];
  zoom: [number] = [9];

  onMarkerClick() {
    alert('¡Marcador clickeado! Este es un punto de interés.');
  }
}
