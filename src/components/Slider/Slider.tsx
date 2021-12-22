import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/system";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

export interface SliderProps extends SwiperProps {
  title?: string;
  sx?: SxProps;
}

export default function Slider({ children, title, sx, ...props }: SliderProps) {
  return (
    <Box sx={sx}>
      {title && (
        <Typography variant="h3" textAlign="center" sx={{ mb: 6 }}>
          {title}
        </Typography>
      )}
      <Swiper spaceBetween={16} slidesPerView="auto" {...props}>
        {children && !Array.isArray(children) && (
          <SwiperSlide>{children}</SwiperSlide>
        )}
        {children &&
          Array.isArray(children) &&
          children.map((item) => (
            <SwiperSlide key={item.key}>{item}</SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
}
