import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Layout from "@components/Layout";
import Hero, { HeroProps } from "@components/Hero";
import Collection from "@components/Collection";
import Card from "@components/Card";
import Form from "@components/Form";
import Slider from "@components/Slider";
import Link from "@components/Link";

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

export default function HomePage() {
  return (
    <Layout title="Home - Starter">
      <Hero {...hero} />
      <Collection
        title="It has never been more critical to have a robust digital presence"
        body={`At Last Rev, we strive not just to be a development shop for our clients but to partner with your team to provide guidance and support as you take the next step to building the technology end of your business. We've been building enterprise SaaS solutions alongside engineering, marketing, and operations teams for over 15 years, and work hard to create scalable, easy-to-use solutions to meet your business goals.`}
        sx={{ my: 16 }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item>
            <Card
              title="Web and Application Development"
              variant="feature"
              media={{
                title: "Card Feature",
                src: "/images/browser.svg",
              }}
            />
          </Grid>
          <Grid item>
            <Card
              title="Web and Application Development"
              variant="feature"
              media={{
                title: "Card Feature",
                src: "/images/browser.svg",
              }}
            />
          </Grid>
          <Grid item>
            <Card
              title="Web and Application Development"
              variant="feature"
              media={{
                title: "Card Feature",
                src: "/images/browser.svg",
              }}
            />
          </Grid>
          <Grid item>
            <Card
              title="Web and Application Development"
              variant="feature"
              media={{
                title: "Card Feature",
                src: "/images/browser.svg",
              }}
            />
          </Grid>
        </Grid>
      </Collection>
      <Collection
        backgroundColor="common.black"
        title="Develop and Ship faster"
        body="The easiest way to start your new site"
        color="common.white"
        sx={{
          height: 240,
          "& .MuiContainer-root": { height: "100%" },
          "& .MuiTypography-h3": { mb: 0 },
          '& [class*="Text-root"]': { mb: 0 },
          "& .MuiTypography-body1": { color: "#888888" },
        }}
      >
        <Link
          text="Start Building"
          href="/pricing"
          variant="button-contained"
          sx={{ mt: 2 }}
        />
      </Collection>
      <Collection title="Build tools and full documentation" sx={{ my: 16 }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item xs={12}>
            <Card
              title="Building your website through experimentationt"
              body="Historically, experimentation was only done by companies like Amazon, Google, and Facebook. In 2017, brands from across the globe use web experimentation to increase conversions, inform website design and find out what message resonates best with their customers. Brad will talk about Optimizely’s experience migrating their major web properties over to Contentful and how they have baked experimentation into the content creation process."
              variant="side"
              media={{
                title: "Card Side",
                src: "/images/image-1.jpg",
              }}
              actions={[
                {
                  id: "learn-more",
                  text: "Learn More",
                  href: "/",
                  variant: "button-contained",
                  color: "secondary",
                },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <Card
              title="Building your website through experimentationt"
              body="Historically, experimentation was only done by companies like Amazon, Google, and Facebook. In 2017, brands from across the globe use web experimentation to increase conversions, inform website design and find out what message resonates best with their customers. Brad will talk about Optimizely’s experience migrating their major web properties over to Contentful and how they have baked experimentation into the content creation process."
              variant="side"
              reverse
              media={{
                title: "Card Side",
                src: "/images/image-1.jpg",
              }}
              actions={[
                {
                  id: "learn-more",
                  text: "Learn More",
                  href: "/",
                  variant: "button-contained",
                  color: "secondary",
                },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <Card
              title="Building your website through experimentationt"
              body="Historically, experimentation was only done by companies like Amazon, Google, and Facebook. In 2017, brands from across the globe use web experimentation to increase conversions, inform website design and find out what message resonates best with their customers. Brad will talk about Optimizely’s experience migrating their major web properties over to Contentful and how they have baked experimentation into the content creation process."
              variant="side"
              media={{
                title: "Card Side",
                src: "/images/image-1.jpg",
              }}
              actions={[
                {
                  id: "learn-more",
                  text: "Learn More",
                  href: "/",
                  variant: "button-contained",
                  color: "secondary",
                },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <Card
              title="Building your website through experimentationt"
              body="Historically, experimentation was only done by companies like Amazon, Google, and Facebook. In 2017, brands from across the globe use web experimentation to increase conversions, inform website design and find out what message resonates best with their customers. Brad will talk about Optimizely’s experience migrating their major web properties over to Contentful and how they have baked experimentation into the content creation process."
              variant="side"
              reverse
              media={{
                title: "Card Side",
                src: "/images/image-1.jpg",
              }}
              actions={[
                {
                  id: "learn-more",
                  text: "Learn More",
                  href: "/",
                  variant: "button-contained",
                  color: "secondary",
                },
              ]}
            />
          </Grid>
        </Grid>
      </Collection>
      <Container maxWidth="xl">
        <Form
          name="contact-form"
          body="Stay up to date with all Starter news"
          submitLabel="Subscribe"
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
      <Container maxWidth="lg">
        <Slider
          title="This is what everyone is saying"
          sx={{
            py: 8,
            "& .MuiTypography-h3": { fontSize: 24 },
            "& .swiper-slide": { maxWidth: 320 },
          }}
          slidesPerView={2}
          centeredSlides
          pagination
        >
          <Card
            key="slide-1"
            title="Kent Dodds"
            body="This is amazing"
            variant="quote"
            media={{
              title: "Card Quote",
              src: "https://gravatar.com/avatar/ca3e759828fb9f0a8bd6c38f122a16e5?s=400&d=robohash&r=x",
            }}
          />
          <Card
            key="slide-2"
            title="Kent Dodds"
            body="This is amazing"
            variant="quote"
            media={{
              title: "Card Quote",
              src: "https://gravatar.com/avatar/05428f07bbcde2696c143d33f8baa119?s=400&d=robohash&r=x",
            }}
          />
          <Card
            key="slide-3"
            title="Kent Dodds"
            body="This is amazing"
            variant="quote"
            media={{
              title: "Card Quote",
              src: "https://gravatar.com/avatar/af32b839ecd8e84cbab6363425b65ff9?s=400&d=robohash&r=x",
            }}
          />
          <Card
            key="slide-4"
            title="Kent Dodds"
            body="This is amazing"
            variant="quote"
            media={{
              title: "Card Quote",
              src: "https://gravatar.com/avatar/9cb61e19d3bc45b37c4013e3e51d1c97?s=400&d=robohash&r=x",
            }}
          />
        </Slider>
      </Container>
    </Layout>
  );
}
