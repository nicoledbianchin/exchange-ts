import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { FieldSubscript } from '.';

storiesOf('Shared | FieldSubscript', module)
  .add('default', () => (
    <FieldSubscript>
      <FieldSubscript.Group>
        <FieldSubscript.Message show>Example</FieldSubscript.Message>
      </FieldSubscript.Group>
      <FieldSubscript.Progress value={50} max={100} />
    </FieldSubscript>
  ))
  .add('invalid', () => (
    <FieldSubscript>
      <FieldSubscript.Group>
        <FieldSubscript.Message show invalid>Example</FieldSubscript.Message>
      </FieldSubscript.Group>
      <FieldSubscript.Progress value={50} max={100} invalid/>
    </FieldSubscript>
  ))
