import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PortfolioSidebar extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-sidebar";
  }

  constructor() {
    super();
  }

  static get styles() {
    return [super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
        }

        .wrapper {
          width: 280px;
          height: 100vh;
          position: fixed;
          top: 0;
          overflow-x: hidden;
          background-color: black; 
          display: flex;
          flex-direction: column;
          align-items: center;
          border-right: 4px solid white;
          padding: 2rem 1rem;
        }

        .links {
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="links">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(PortfolioSidebar.tag, PortfolioSidebar);
