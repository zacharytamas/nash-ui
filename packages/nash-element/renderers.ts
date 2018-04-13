import { render } from 'lit-html/lib/lit-extended';

export const withLitHtml = (Base = HTMLElement) =>
  class extends Base {
    renderer(root, call) {
      render(call(), root);
    }
  };
