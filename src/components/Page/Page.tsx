import * as React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Header, { HeaderProps } from "@components/Header";
import Hero, { HeroProps } from "@components/Hero";
import Footer, { FooterProps } from "@components/Footer";

export interface PageProps {
  id: string;
  title?: string;
  header?: HeaderProps;
  hero?: HeroProps;
  content?: any[];
  footer?: FooterProps;
}

export default function Page({
  id,
  title,
  header,
  hero,
  content,
  footer,
}: PageProps) {
  return (
    <>
      <Head>{title && <title>{title}</title>}</Head>
      <Box id={id}>
        {header && <Header {...header} />}
        {hero && <Hero {...hero} />}
        {/* {content?.map((item, idx) => (
          <Container
            key={item.id}
            maxWidth={item?.type === "Collection" ? false : "xl"}
            disableGutters={item?.type === "Collection"}
            sx={{
              py: 2,
              pb: idx === content.length - 1 ? 0 : 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ContentModule {...item} />
          </Container>
        ))} */}
        {footer && <Footer {...footer} />}
      </Box>
    </>
  );
}
