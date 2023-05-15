import { LitElement, TemplateResult } from 'lit';
import './password-field';
import './password-confirm';
export declare class AdPassword extends LitElement {
    static styles: import("lit").CSSResult;
    constructor();
    private handleSubmit;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'ad-password': AdPassword;
    }
}
//# sourceMappingURL=password.d.ts.map