import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Done from "@mui/icons-material/Done";

import Link, { LinkProps } from "@components/Link";

export interface PricingItemProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  action: LinkProps;
  isPrimary?: boolean;
  isFree?: boolean;
}

const PricingItem = ({
  title,
  subtitle,
  price,
  features,
  action,
  isPrimary = false,
  isFree = false,
}: PricingItemProps): JSX.Element => {
  return (
    <Box
      component={Card}
      height={1}
      display={"flex"}
      flexDirection={"column"}
      raised={isPrimary}
      variant={isPrimary ? "elevation" : "outlined"}
    >
      <CardContent
        sx={{
          padding: 4,
        }}
      >
        <Box marginBottom={2}>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            {title}
          </Typography>
          <Typography color="text.secondary">{subtitle}</Typography>
        </Box>
        <Box display="flex" alignItems="baseline" marginBottom={2}>
          <Typography variant="h3" fontWeight={700}>
            {price}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            fontWeight={700}
            sx={{ ...(isFree && { display: "none" }) }}
          >
            /y
          </Typography>
        </Box>
        <Grid container spacing={1}>
          {features.map((feature: string) => (
            <Grid item xs={12} key={feature}>
              <Box component={ListItem} disableGutters width="auto" padding={0}>
                <Box
                  component={ListItemAvatar}
                  minWidth="auto !important"
                  marginRight={2}
                >
                  <Box
                    component={Avatar}
                    color="primary.main"
                    bgcolor="transparent"
                    width={20}
                    height={20}
                  >
                    <Done />
                  </Box>
                </Box>
                <ListItemText primary={feature} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <Box flexGrow={1} />
      <CardActions sx={{ justifyContent: "flex-end", padding: 4 }}>
        <Link size="large" variant="button-contained" {...action} />
      </CardActions>
    </Box>
  );
};

export default PricingItem;
