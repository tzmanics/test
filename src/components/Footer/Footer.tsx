import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Link, { LinkProps } from "@components/Link";
import Media, { MediaProps } from "@components/Media";

export interface FooterProps {
  title: string;
  links: LinkProps[];
  logo: MediaProps;
}

interface CopyrightProps {
  title: string;
}

function Copyright({ title }: CopyrightProps) {
  return (
    <Typography variant="body2">
      {"Copyright © "}
      <Link href="/" underline="none">
        {title}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer({ title, logo, links }: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.common.black,
        color: (theme) => theme.palette.common.white,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Box display="flex">
          <Box sx={{ "& img": { filter: "invert(1)" } }}>
            {logo && (
              <Media {...logo} width={200} height={30} objectFit="contain" />
            )}
            <Copyright title={title} />
          </Box>
          <Box flex={1} width={1} />
          <Box>
            {links && (
              <Grid container justifyContent="flex-start" sx={{ mx: 2 }}>
                {links?.map((link) => (
                  <Grid item key={link.id} sx={{ mr: 1 }}>
                    <Link {...link} underline="none" />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
