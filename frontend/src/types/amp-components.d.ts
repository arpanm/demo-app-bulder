import React from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    'publisher-logo-src'?: string;
    'action-xhr'?: string;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'amp-story': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          standalone?: string;
          title?: string;
          publisher?: string;
          'publisher-logo-src'?: string;
          poster?: string;
        },
        HTMLElement
      >;
      'amp-story-page': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          id?: string;
        },
        HTMLElement
      >;
      'amp-story-grid-layer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          template?: string;
        },
        HTMLElement
      >;
      'amp-img': React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement> & {
          layout?: string;
          width?: number;
          height?: number;
        },
        HTMLImageElement
      >;
      'amp-analytics': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'amp-script': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'amp-sidebar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'amp-carousel': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'amp-form': React.DetailedHTMLProps<
        React.FormHTMLAttributes<HTMLFormElement>,
        HTMLFormElement
      >;
      'amp-iframe': React.DetailedHTMLProps<
        React.IframeHTMLAttributes<HTMLIFrameElement>,
        HTMLIFrameElement
      >;
      'amp-video': React.DetailedHTMLProps<
        React.VideoHTMLAttributes<HTMLVideoElement>,
        HTMLVideoElement
      >;
      'amp-audio': React.DetailedHTMLProps<
        React.AudioHTMLAttributes<HTMLAudioElement>,
        HTMLAudioElement
      >;
      'amp-social-share': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          type?: string;
          width?: number;
          height?: number;
          'data-url'?: string;
          'data-text'?: string;
        },
        HTMLElement
      >;
    }
  }
}
