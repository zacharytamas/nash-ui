export const withStyles = (Base = HTMLElement) =>
  class extends Base {
    static inheritStyles = true;
    static styles: string[] = [];

    static gatherStyles(): string[] {
      if (!this.inheritStyles) {
        return this.styles;
      }

      let styles = [...this.styles];
      let parent = Object.getPrototypeOf(this);

      while (parent) {
        if (parent.styles) {
          styles = [...parent.styles, ...styles];
        }
        parent = Object.getPrototypeOf(parent);
      }

      return styles;
    }
  };
