import Container from "@mui/material/Container";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import matter from "gray-matter";

import Layout from "@components/Layout";
import Hero, { HeroProps } from "@components/Hero";
import Text from "@components/Text";
import Card from "@components/Card";

interface BlogArticlePageProps {
  content: string;
  meta: {
    title: string;
    description: string;
    thumbnail: string;
    image: string;
  };
}

export default function BlogArticlePage({
  meta,
  content,
}: BlogArticlePageProps) {
  return (
    <Layout title="Blog - Starter" disabledScroll>
      <Hero
        title={meta.title}
        subtitle={meta.description}
        background={{ title: meta.title, src: meta.image }}
        sx={{ "& div:nth-of-type(1)": { minHeight: 500, pt: 5 } }}
        maxWidth="lg"
      />
      <Container maxWidth="lg">
        <Text>{content}</Text>
      </Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("articles");
  const paths = files.map((file) => ({
    params: {
      slug: `${file.split(".")[0]}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const slug = context.params?.slug;

    const content = fs.readFileSync(`articles/${slug}.md`).toString();

    const info = matter(content);

    const article = {
      meta: {
        ...info.data,
        slug,
      },
      content: info.content,
    };

    return {
      props: {
        ...article,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
