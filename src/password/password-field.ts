import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('ad-password-field')
export class AdPasswordField extends LitElement {
  constructor() {
    super();
  }

  override render() {
    return html`
      <label for="ad-password-field">Password</label>
      <input id="ad-password-field" type="password" />
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ad-password-field': AdPasswordField;
  }
}
