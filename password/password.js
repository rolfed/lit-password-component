var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
let AdPassword = class AdPassword extends LitElement {
    constructor() {
        super();
    }
    handleSubmit(event) {
        console.log('EVENT: ', event);
    }
    render() {
        return html `
        <form class="ad-password" @submit=${this.handleSubmit}>
            <ad-password-field></ad-password-field>
            <ad-password-confirm></ad-password-confirm>
        </form>
        `;
    }
};
AdPassword = __decorate([
    customElement('ad-password')
], AdPassword);
export { AdPassword };
//# sourceMappingURL=password.js.map