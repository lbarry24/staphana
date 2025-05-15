import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


/**
* `portfolio-page`
* @element portfolio-page
*/
export class PortfolioPage extends DDDSuper(I18NMixin(LitElement)) {
 static get tag() {
   return "portfolio-page";
 }


 constructor() {
   super();
   this.title = "";
   this.breakpoint = "";
  
 }
 static get properties() {
   return {
     ...super.properties,
     title: { type: String },
     breakpoint: { type: Number }
   };
 }


 static get styles() {
   return [
     super.styles || [],
     css`
       :host {
         background-color: var(--ddd-theme-accent, #f0f0f0);
         font-family: var(--ddd-font-navigation, Arial, sans-serif);
         width: 100%;
         margin-bottom: 20px;
         display: inline-block;
       }
     `
   ];
 }


 render() {
   return html`
     <div class="wrapper">
       <slot></slot>
     </div>
   `;
 }


 connectedCallback() {
   super.connectedCallback();
   const breakpoint = this.getAttribute('breakpoint');
   this.dispatchEvent(new CustomEvent('new-page', {
     detail: { breakpoint },
     bubbles: true,
     composed: true
   }));
 }


 static get haxProperties() {
   return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
 }
}


globalThis.customElements.define(PortfolioPage.tag, PortfolioPage);