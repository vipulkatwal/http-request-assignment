import { Component } from '@angular/core';
import { DataDisplayComponent } from './data-display/data-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataDisplayComponent], // Include the DataDisplayComponent as a dependency
  template: '<app-data-display></app-data-display>', // Render the data display component
})
export class AppComponent {}
