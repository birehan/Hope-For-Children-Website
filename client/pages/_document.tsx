// import * as React from "react";
// import Document, {
//   Html,
//   Head,
//   Main,
//   NextScript,
//   DocumentProps,
//   DocumentContext,
// } from "next/document";
// import createEmotionServer from "@emotion/server/create-instance";
// import { AppType } from "next/app";
// import theme, { roboto } from "../src/theme";
// import createEmotionCache from "../src/createEmotionCache";
// import { MyAppProps } from "./_app";

// interface MyDocumentProps extends DocumentProps {
//   emotionStyleTags: JSX.Element[];
// }

// export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
//   return (
//     <Html lang="en" className={roboto.className}>
//       <Head>
//         {/* PWA primary color */}
//         <meta name="theme-color" content={theme.palette.primary.main} />
//         <link rel="shortcut icon" href="/favicon.ico" />
//         <meta name="emotion-insertion-point" content="" />
//         {emotionStyleTags}
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

// MyDocument.getInitialProps = async (ctx: DocumentContext) => {

//   const originalRenderPage = ctx.renderPage;

//   const cache = createEmotionCache();
//   const { extractCriticalToChunks } = createEmotionServer(cache);

//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (
//         App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>
//       ) =>
//         function EnhanceApp(props) {
//           return <App emotionCache={cache} {...props} />;
//         },
//     });

//   const initialProps = await Document.getInitialProps(ctx);

//   const emotionStyles = extractCriticalToChunks(initialProps.html);
//   const emotionStyleTags = emotionStyles.styles.map((style) => (
//     <style
//       data-emotion={`${style.key} ${style.ids.join(" ")}`}
//       key={style.key}
//       dangerouslySetInnerHTML={{ __html: style.css }}
//     />
//   ));

//   return {
//     ...initialProps,
//     emotionStyleTags,
//   };
// };

import * as React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import { AppType } from "next/app";
import theme, { roboto } from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { MyAppProps } from "./_app";

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (
          App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>
        ) =>
          function EnhanceApp(props) {
            return <App emotionCache={cache} {...props} />;
          },
      });

    const initialProps = await Document.getInitialProps(ctx);

    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      emotionStyleTags,
    };
  }

  render() {
    return (
      <Html lang="en" className={roboto.className}>
        <Head>
          {/* PWA primary color */}
          {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
          {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
          <meta name="emotion-insertion-point" content="" />
          {/* Add Google Fonts link */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}