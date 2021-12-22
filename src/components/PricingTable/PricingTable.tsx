import React from "react";
import Grid from "@mui/material/Grid";

import PricingItem, { PricingItemProps } from "@components/PricingItem";

const mock: PricingItemProps[] = [
  {
    title: "Starter",
    subtitle: "The basics for personal projects, hobby sites, or experiments.",
    price: "Free",
    isFree: true,
    action: {
      text: "Contact Us",
      href: "/contact-us",
    },
    features: ["1 Seat", "Email Support"],
  },
  {
    title: "Pro",
    subtitle:
      "Advanced features and support for private organization Git repos.",
    price: "$190",
    isPrimary: true,
    action: {
      text: "Contact Us",
      href: "/contact-us",
    },
    features: ["Starter features: plus:", "API access"],
  },
  {
    title: "Enterprise",
    subtitle:
      "Collaboration, security, & compliance for scaling web apps and dev teams.",
    price: "$390",
    action: {
      text: "Contact Us",
      href: "/contact-us",
    },
    features: ["Pro features, plus:", "24/7 Phone support"],
  },
];

const Main = (): JSX.Element => {
  return (
    <Grid container spacing={4}>
      {mock.map((item) => (
        <Grid item xs={12} md={4} key={item.title}>
          <PricingItem {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Main;
