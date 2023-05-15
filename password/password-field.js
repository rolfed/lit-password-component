var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
let AdPasswordField = class AdPasswordField extends LitElement {
    constructor() {
        super();
    }
    render() {
        return html `
        <label for="ad-password-field">Password</label>
        <input id="ad-password-field" type="password">
        `;
    }
};
AdPasswordField = __decorate([
    customElement('ad-password-field')
], AdPasswordField);
export { AdPasswordField };
//# sourceMappingURL=password-field.js.map