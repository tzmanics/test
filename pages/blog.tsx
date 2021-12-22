import { GetStaticProps } from "next";
import Grid from "@mui/material/Grid";
import fs from "fs";
import matter from "gray-matter";

import Layout from "@components/Layout";
import Hero, { HeroProps } from "@components/Hero";
import Collection from "@components/Collection";
import Card from "@components/Card";

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

interface Article {
  title: string;
  description: string;
  thumbnail: string;
  slug: string;
}

interface BlogPageProps {
  articles: Article[];
}

export default function BlogPage({ articles }: BlogPageProps) {
  return (
    <Layout title="Blog - Starter">
      <Hero {...hero} />
      <Collection
        title="It has never been more critical to have a robust digital presence"
        body={`At Last Rev, we strive not just to be a development shop for our clients but to partner with your team to provide guidance and support as you take the next step to building the technology end of your business. We've been building enterprise SaaS solutions alongside engineering, marketing, and operations teams for over 15 years, and work hard to create scalable, easy-to-use solutions to meet your business goals.`}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="flex-start"
        >
          {articles.map((article) => (
            <Grid item key={article.slug}>
              <Card
                title={article.title}
                body={article.description}
                variant="blog"
                media={{
                  title: article.title,
                  src: article.thumbnail,
                }}
                link={{ href: article.slug }}
              />
            </Grid>
          ))}
        </Grid>
      </Collection>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync("articles");

  const articles = files.map((file) => {
    const data = fs.readFileSync(`articles/${file}`).toString();

    return {
      ...matter(data).data,
      slug: `blog/${file.split(".")[0]}`,
    };
  }) as Article[];

  const props: BlogPageProps = {
    articles,
  };
  return { props };
};
