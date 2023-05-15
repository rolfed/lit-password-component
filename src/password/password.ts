import {LitElement, TemplateResult, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import './password-field';
import './password-confirm';

@customElement('ad-password')
export class AdPassword extends LitElement {
  static override styles = css`
      :host {
          --child-element-margin: 15px;


          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
      }

      form {
          display: flex;
          flex-direction: column;
          align-items: stretch;
      }

      form > * {
          margin: var(--child-element-margin) 0 var(--child-element-margin) 0;
      }

      button {
          align-items: strecht;
      }
  `;

  constructor() {
    super();
  }

  private handleSubmit(event: Event) {
    console.log('EVENT: ', event);
  }

  override render(): TemplateResult {
    return html`
      <form @submit=${this.handleSubmit}>
        <ad-password-field></ad-password-field>
        <ad-password-confirm></ad-password-confirm>
        <button>Submit</button>
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ad-password': AdPassword;
  }
}
