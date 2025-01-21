import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  // @Input() DataName!: String;

  DataName = input.required<string>();

  @Input() ArrayNew!: any;

  message: string = 'This is output message';

  @Output() messageEmmiter = new EventEmitter();

  ngAfterContentInit(): void {
    this.messageEmmiter.emit(this.message);
  }
}
