import { withComponent } from 'skatejs';
import { withLitHtml } from './renderers';

const ComponentLitHtml = withLitHtml(withComponent());

export class NashElement extends ComponentLitHtml {}
