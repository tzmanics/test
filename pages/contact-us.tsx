import Container from "@mui/material/Container";

import Layout from "@components/Layout";
import Hero, { HeroProps } from "@components/Hero";
import Form from "@components/Form";

const hero: HeroProps = {
  overline: "start",
  title: "Building the",
  subtitle: "Modern Web",
  image: {
    title: "Hero Illustration",
    src: "/images/illustration-1.svg",
  },
  actions: [
    {
      id: "contact-us-cta",
      text: "Contact Us",
      href: "/contact-us",
      variant: "button-contained",
      color: "primary",
    },
  ],
};

export default function ContactUsPage() {
  return (
    <Layout title="Contact Us - Starter">
      <Hero {...hero} />
      <Container maxWidth="xl">
        <Form
          name="contact-form"
          title="Get in Touch"
          body="Send us a message, we will get in touch as soon as possible."
          submitLabel="Submit"
          fields={[
            {
              id: "email",
              name: "email",
              label: "Email",
              type: "email",
              placeholder: "Add your email",
            },
          ]}
        />
      </Container>
    </Layout>
  );
}
