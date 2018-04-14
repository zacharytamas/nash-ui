import { withComponent, withRenderer } from 'skatejs/dist/esnext';

import { withStyles } from 'nash-mixins';
import { withLitHtml } from './renderers';
import { html } from 'lit-html';

const ComponentLitHtml = withStyles(withComponent(withRenderer(withLitHtml())));

export class NashElement extends ComponentLitHtml {
  html = html;

  get template() {
    return html``;
  }

  render() {
    const klass = this.constructor as any;

    if (klass.gatherStyles) {
      return html`${klass
        .gatherStyles()
        .map(css => html`<style>${css}</style>`)} ${this.template}`;
    }

    return html`${this.template}`;
  }
}
