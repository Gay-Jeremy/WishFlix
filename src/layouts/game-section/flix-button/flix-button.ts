import { Component, input } from '@angular/core';

@Component({
  selector: 'flix-button',
  imports: [],
  templateUrl: './flix-button.html',
  styleUrl: './flix-button.css',
})

export class FlixButton {
  variant = input<'primary'>;
}
