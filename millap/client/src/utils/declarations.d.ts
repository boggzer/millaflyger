import 'styled-components';
import { constants } from '.';

declare module 'svg-text-wrap';
declare module 'react-grid-gallery';
declare module 'react-app-polyfill/ie9';
declare module 'svg-text-wrap'
declare module 'styled-components' {
  export interface DefaultTheme {
    main: {
      background: string;
      pageMargin: Record<'mobile' | 'desktop', string>;
      baseTextSize: number;
      gap: Record<'mobile' | 'desktop', string>;
      text: {
        sizes: { base: number } & Record<'mobile' | 'desktop', Record<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', number>>;
        family: Record<'main' | 'heading', string>;
      },
    }
    utils: {
      visuallyHidden: Record<'height' | 'width' | 'overflow' | 'position' | 'clip' | 'white-space' | 'clip-path', string>;
      devices: Record<'phone' | 'tablet' | 'laptop', number>;
      mq: {
        min: Record<'tablet' | 'laptop' | 'desktop', string>;
        max: Record<'phone', 'tablet' | 'laptop', string>;
      };
    }
  }
}