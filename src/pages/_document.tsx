import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    const title = "Robotz";
    const keywords = "design de logo, progamação, aplicativos, website";
    const description = "Traga sua marca, produtos e serviços para o metaverso";
    const url = "https://www.robotz.com.br";

    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />
          <meta name="description" content={description}></meta>
          <meta name="keywords" content={keywords} />
          <meta property="og:title" content={title} key="ogtitle" />
          <meta
            property="og:description"
            content={description}
            key="ogdescription"
          />
          <meta property="og:image" content="/robotz.png" key="ogimage" />
          <meta property="og:site_name" content={title} key="ogsitename" />
          <meta property="og:url" content={url} />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
