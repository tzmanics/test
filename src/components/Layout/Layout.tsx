import React from "react";
import Head from "next/head";

import Header, { HeaderProps } from "@components/Header";
import Footer, { FooterProps } from "@components/Footer";

const header: HeaderProps = {
  title: "Starter",
  logo: {
    id: "starter-logo",
    title: "Starter",
    src: "/images/logo.svg",
  },
  links: [
    {
      id: "blog",
      text: "Blog",
      href: "/blog",
    },
    {
      id: "pricing",
      text: "Pricing",
      href: "/pricing",
    },
    {
      id: "contact-us",
      text: "Contact Us",
      href: "/contact-us",
      variant: "button-outlined",
    },
  ],
};

const footer: FooterProps = {
  title: "My new site",
  links: [],
  logo: {
    id: "my-new-site",
    title: "Logo Title",
    src: "/images/logo.svg",
  },
};

export interface LayoutProps {
  title?: string;
  children?: string | React.ReactElement | React.ReactElement[];
  disabledScroll?: boolean;
}

export const Layout = ({
  title = "Starter",
  children,
  disabledScroll,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header {...header} disabledScroll={disabledScroll} />
      {children}
      <Footer {...footer} />
    </>
  );
};

export default Layout;
