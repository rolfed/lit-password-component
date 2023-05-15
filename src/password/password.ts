import { LitElement, TemplateResult, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('ad-password')
export class AdPassword extends LitElement {
    constructor() {
        super();
    }
    
    private handleSubmit(event: Event) {
        console.log('EVENT: ', event);
    }

    override render(): TemplateResult {
        return html`
        <form class="ad-password" @submit=${this.handleSubmit}>
            <ad-password-field></ad-password-field>
            <ad-password-confirm></ad-password-confirm>
        </form>
        `
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'ad-password': AdPassword;
    }
}
