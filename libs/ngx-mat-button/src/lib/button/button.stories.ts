import { MatButtonModule, MatIconModule } from '@angular/material';
import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories
  .addDecorator(
    moduleMetadata({
      imports: [MatButtonModule, MatIconModule],
      declarations: [ButtonComponent]
    })
  )
  .add('flat', () => ({
    template: `<appsens-button flat [color]="color">Click Me</appsens-button>`,
    props: {
      color: text('color', 'primary')
    }
  }))
  .add('stroked', () => ({
    template: `<appsens-button stroked [color]="color">Click Me</appsens-button>`,
    props: {
      color: text('color', 'primary')
    }
  }))
  .add('normal', () => ({
    template: `<appsens-button [color]="color">Click Me</appsens-button>`,
    props: {
      color: text('color', 'primary')
    }
  }))
  .add('with icon', () => ({
    template: `<appsens-button flat [color]="color" [icon]="icon">Click Me</appsens-button>`,
    props: {
      color: text('color', 'primary'),
      icon: text('icon', 'check_circle')
    }
  }));
