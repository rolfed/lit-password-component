import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';


@customElement('ad-password-confirm')
export class AdPasswordConfirm extends LitElement {
    constructor() {
        super();
    }

    override render() {
        return html`
        <label class="hidden" for="ad-password-confirm">Password Confirm</label>
        <input id="ad-password-confirm" type="password">
        `
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'ad-password-confirm': AdPasswordConfirm;
  }
}
