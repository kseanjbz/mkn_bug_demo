import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

// avoid CSS animation transition flashing
export const DISABLE_SSR_TRANSITION = 'disable-SSR-transition';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="no-js">
        <Head />
        <body>
          <Main />
          <NextScript />

        </body>
      </Html>
    );
  }
}
