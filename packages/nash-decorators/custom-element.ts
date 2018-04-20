/**
 * A convenience decorator for declaring and registering a Custom Element at
 * the same time.
 *
 * @param tagName Name to use as the element's tagName.
 */
export const customElement = (tagName: string) => (klass: any) => {
  window.customElements.define(tagName, klass);
};
