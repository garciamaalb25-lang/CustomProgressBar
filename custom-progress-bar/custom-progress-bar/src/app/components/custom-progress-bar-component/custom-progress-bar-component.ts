import { Component, computed, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-custom-progress-bar-component',
  styleUrl: './custom-progress-bar-component.css',
  templateUrl: './custom-progress-bar-component.html',
})
export class CustomProgressBarComponent {
  // Propiedades obligatorias del ejercicio
  value = input<number>(0);
  color = input<string>('primary'); // primary, success, danger, warning, info, secondary, dark...

  // AMPLIACIÓN
  striped = input<boolean>(false);
  animated = input<boolean>(false);
  showLabel = input<boolean>(false);
  height = input<number>(20); // en px

  // Nos aseguramos de que el valor esté siempre entre 0 y 100
  percentage = computed(() => Math.min(100, Math.max(0, this.value())));

  // Clases de Bootstrap según las propiedades recibidas
  barClasses = computed(() => {
    let classes = `progress-bar bg-${this.color()}`;
    if (this.striped() || this.animated()) classes += ' progress-bar-striped';
    if (this.animated()) classes += ' progress-bar-animated';
    return classes;
  });
}
