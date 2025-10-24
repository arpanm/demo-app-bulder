import { HTMLAttributes } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'amp-story': HTMLAttributes<HTMLElement> & {
        standalone?: string;
        'publisher-logo-src'?: string;
        poster?: string;
      };
      'amp-story-page': HTMLAttributes<HTMLElement>;
      'amp-story-grid-layer': HTMLAttributes<HTMLElement> & {
        template?: string;
      };
      'amp-img': HTMLAttributes<HTMLElement> & {
        src: string;
        width: number;
        height: number;
        layout: string;
        alt: string;
      };
      html: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement> & {
        amp?: boolean;
      };
      'amp-analytics': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          type?: string;
          config?: string;
        },
        HTMLElement
      >;
      'amp-sidebar': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          id?: string;
          layout?: string;
          side?: string;
        },
        HTMLElement
      >;
      'amp-form': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          action?: string;
          'action-xhr'?: string;
          method?: string;
          target?: string;
        },
        HTMLElement
      >;
      'amp-script': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          width?: number;
          height?: number;
          layout?: string;
        },
        HTMLElement
      >;
      'amp-carousel': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          type?: string;
          width?: number;
          height?: number;
          layout?: string;
          autoplay?: boolean;
          delay?: number;
          loop?: boolean;
        },
        HTMLElement
      >;
      'amp-lightbox': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          id?: string;
          layout?: string;
        },
        HTMLElement
      >;
      'amp-accordion': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          expandSingleSection?: boolean;
          animate?: boolean;
        },
        HTMLElement
      >;
      'amp-section': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          expanded?: boolean;
        },
        HTMLElement
      >;
    }
  }
}

export {};
