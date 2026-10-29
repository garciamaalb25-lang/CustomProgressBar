import { Component, signal } from '@angular/core';
import { CustomProgressBarComponent } from './components/custom-progress-bar-component/custom-progress-bar-component';

@Component({
  imports: [CustomProgressBarComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('custom-progress-bar');
  progress = signal(50);

  changeProgress(event: Event): void {
    this.progress.set(Number((event.target as HTMLInputElement).value));
  }
}
