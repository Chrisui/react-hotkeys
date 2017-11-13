import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import HotKeys from '../../lib/HotKeys';
import KeyCode from '../support/KeyCode';
import FocusableElement from '../support/FocusableElement';

describe('Specifying key map using objects:', () => {
  context('when a keydown keymap is specified as an object', () => {

    beforeEach(function () {
      this.keyMap = {
        'ENTER': {
          sequence: 'enter',
          action: 'keydown',
        },
      };

      this.handler = sinon.spy();

      this.handlers = {
        'ENTER': this.handler,
      };

      this.wrapper = mount(
        <HotKeys keyMap={this.keyMap} handlers={this.handlers} focused>
          <input className="childElement" />
        </HotKeys>
      );

      this.input = new FocusableElement(this.wrapper, '.childElement');
      this.input.focus();
    });

    it('then calls the correct handler when a key is pressed that matches the keyMap', function() {
      this.input.keyDown(KeyCode.ENTER);

      expect(this.handler).to.have.been.called;
    });
  });

  context('when a keyup keymap is specified as an object', () => {
    beforeEach(function () {
      this.keyMap = {
        'ENTER': {
          sequence: 'enter',
          action: 'keyup',
        },
      };

      this.handler = sinon.spy();

      this.handlers = {
        'ENTER': this.handler,
      };

      this.wrapper = mount(
        <HotKeys keyMap={this.keyMap} handlers={this.handlers} focused>
          <input className="childElement" />
        </HotKeys>
      );

      this.input = new FocusableElement(this.wrapper, '.childElement');
      this.input.focus();
    });

    it('then calls the correct handler when a key is pressed that matches the keyMap', function() {
      this.input.keyUp(KeyCode.ENTER);

      expect(this.handler).to.have.been.called;
    });
  });

  context('when a keypress keymap is specified as an object', () => {
    beforeEach(function () {
      this.keyMap = {
        'A': {
          sequence: 'a',
          action: 'keypress',
        },
      };

      this.handler = sinon.spy();

      this.handlers = {
        'A': this.handler,
      };

      this.wrapper = mount(
        <HotKeys keyMap={this.keyMap} handlers={this.handlers} focused>
          <input className="childElement" />
        </HotKeys>
      );

      this.input = new FocusableElement(this.wrapper, '.childElement');
      this.input.focus();
    });

    it('then calls the correct handler when a key is pressed that matches the keyMap', function() {
      this.input.keyPress(KeyCode.A);

      expect(this.handler).to.have.been.called;
    });
  });
});
