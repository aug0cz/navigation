import Document, { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentContext, DocumentInitialProps } from 'next/document'
export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="color-scheme" content="light dark" />
          {/* <meta
            name="theme-color"
            content="#22c55e"
            media="(prefers-color-scheme: light)"
          />
          <meta
            name="theme-color"
            content="#e7d2d2"
            media="(prefers-color-scheme: dark)"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
