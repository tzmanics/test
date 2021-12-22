import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import styled from "@mui/system/styled";
import { SxProps, Breakpoint } from "@mui/system";

import Text, { TextProps } from "@components/Text";
import Media, { MediaProps } from "@components/Media";
import Link, { LinkProps } from "@components/Link";

export interface HeroProps {
  overline?: string;
  title?: string;
  subtitle?: string;
  body?: TextProps;
  backgroundColor?: string;
  background?: MediaProps;
  color?: string;
  actions?: LinkProps[];
  image?: MediaProps;
  sx?: SxProps;
  maxWidth?: false | Breakpoint | undefined;
}

export const Hero = ({
  overline,
  title,
  subtitle,
  body,
  backgroundColor,
  background,
  color,
  actions,
  image,
  sx,
  maxWidth = "xl",
}: HeroProps) => {
  return (
    <Root
      color={color}
      sx={{
        position: !!background ? "relative" : undefined,
        overflow: !!background ? "hidden" : undefined,
        ...sx,
      }}
    >
      {background ? (
        <Box
          sx={{
            position: "absolute",
            zIndex: 0,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Media {...background} layout="fill" />
        </Box>
      ) : null}
      <Box
        bgcolor={backgroundColor}
        sx={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0), rgb(247, 250, 255) 100%)",
        }}
        zIndex={1}
        width={1}
        height={1}
        py={4}
        pt={10}
      >
        <ContentContainer maxWidth={maxWidth}>
          <Grid container rowSpacing={5} columnSpacing={5} alignItems="center">
            {title || subtitle || body || actions ? (
              <Grid
                item
                container
                direction="column"
                spacing={2}
                xs={12}
                md={6}
              >
                <Grid item>
                  {overline ? (
                    <Typography
                      variant="overline"
                      sx={{ color: !subtitle ? "secondary.main" : undefined }}
                    >
                      {overline}
                    </Typography>
                  ) : null}
                  {title ? (
                    <Typography
                      variant="h1"
                      component="h1"
                      sx={{ color: !subtitle ? "secondary.main" : undefined }}
                    >
                      {title}
                    </Typography>
                  ) : null}
                  {subtitle ? (
                    <Typography
                      variant={!title ? "h1" : "h2"}
                      component={!title ? "h1" : "h2"}
                      sx={{ color: !title ? "secondary.main" : undefined }}
                    >
                      {subtitle}
                    </Typography>
                  ) : null}
                  {body ? <Text {...body} /> : null}
                  {actions ? (
                    <Box
                      pt={title || subtitle || body ? 3 : undefined}
                      display="flex"
                      alignItems="center"
                    >
                      {actions?.map((link) => (
                        <Box key={link.id} pr={1}>
                          <Link {...link} />
                        </Box>
                      ))}
                    </Box>
                  ) : null}
                </Grid>
              </Grid>
            ) : null}
            {image ? (
              <Grid item xs={12} md={6}>
                <Media {...image} objectFit="contain" />
              </Grid>
            ) : null}
          </Grid>
        </ContentContainer>
      </Box>
    </Root>
  );
};

const Root = styled(Box, {
  name: "Hero",
  slot: "Root",
})(() => ({
  width: "100%",
  minHeight: "auto",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
}));

const ContentContainer = styled(Container, {
  name: "Hero",
  slot: "ContentContainer",
})(({ theme }) => ({
  alignSelf: "center",
  height: "100%",
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
}));

export default Hero;
