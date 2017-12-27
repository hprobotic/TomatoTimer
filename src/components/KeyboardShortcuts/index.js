import React from 'react';
import './KeyboardShortcuts.css';

const KeyboardShortcuts = () => (
  <div className="keyboard-shorcuts">
    <p>
      keyboard shortcuts:
      <span>
        <strong>SPACE </strong>&nbsp;&nbsp;Start or Stop the timer
      </span>
      <span>
        <strong>ALT + S</strong>&nbsp;&nbsp;Short Break
      </span>
      <span>
        <strong>ALT + L</strong>&nbsp;&nbsp;Long Break
      </span>
      <span>
        <strong>ALT + R</strong>&nbsp;&nbsp;Reset Timer
      </span>
    </p>
  </div>
);

export default KeyboardShortcuts;
