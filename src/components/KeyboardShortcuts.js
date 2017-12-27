import React from 'react';
import { Message } from 'semantic-ui-react';

const KeyboardShortcuts = () => (
  <Message>
    <Message.Header>Keyboard Shortcuts</Message.Header>
    <ul class="disc">
      <li>
        <strong>SPACE </strong>&nbsp;&nbsp;Start or Stop the timer
      </li>
      <li>
        <strong>ALT + P</strong>&nbsp;&nbsp;Pomodoro
      </li>
      <li>
        <strong>ALT + S</strong>&nbsp;&nbsp;Short Break
      </li>
      <li>
        <strong>ALT + L</strong>&nbsp;&nbsp;Long Break
      </li>
      <li>
        <strong>ALT + R</strong>&nbsp;&nbsp;Reset Timer
      </li>
    </ul>
  </Message>
);

export default KeyboardShortcuts;
