import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'ngx-mat-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges {
  @Input() color: 'primary' | 'accent' | 'warn' | '' = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() icon: string;
  @Input() disabled = false;
  @Input() stroked = false;
  @Input() flat = false;
  @Input()
  @HostBinding('class.inline')
  inline = false;

  @HostBinding('style.pointer-events') pointerEvent: 'none' | 'auto';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['inline']) {
      this.inline = coerceBooleanProperty(changes['inline'].currentValue);
    }

    if (changes['stroked']) {
      this.stroked = coerceBooleanProperty(changes['stroked'].currentValue);
    }

    if (changes['flat']) {
      this.flat = coerceBooleanProperty(changes['flat'].currentValue);
    }

    if (changes['disabled']) {
      this.pointerEvent = changes['disabled'].currentValue ? 'none' : 'auto';
    }
  }
}
