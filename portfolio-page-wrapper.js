import { LitElement, html, css } from 'lit';
import '@haxtheweb/scroll-button/scroll-button.js';

export class PortfolioPageWrapper extends LitElement {
  static styles = css`
    :host {
      display: flex;
      height: 100vh;
      overflow: hidden;
    }

    main {
      flex: 1;
      overflow-y: auto;
      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;
    }

    ::slotted(portfolio-page) {
      scroll-snap-align: start;
    }
  `;

  firstUpdated() {
    const main = this.shadowRoot.querySelector('main');
    main.addEventListener('scroll', () => this._onScroll());
  }

  _onScroll() {
    const pages = this.querySelectorAll('portfolio-page');
    let currentPage = 1;

    pages.forEach(page => {
      const rect = page.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        currentPage = parseInt(page.getAttribute('pagenumber'));
      }
    });

    const sidebar = document.querySelector('portfolio-sidebar');
    if (sidebar) {
      sidebar.activePage = currentPage;
    }
  }

  render() {
    return html`
      <slot name="sidebar"></slot>
      <main>
        <slot name="content"></slot>
      </main>
    `;
  }
}

customElements.define('portfolio-page-wrapper', PortfolioPageWrapper);
