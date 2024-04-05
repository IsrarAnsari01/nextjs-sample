import React, { memo } from "react";
import { useTheme } from "@mui/material/styles";

import styles from "./Footer.module.css";
import { Text } from "../../controls";
import { useMediaQuery } from "@mui/material";
import clsx from "clsx";

const Footer = () => {
  const theme = useTheme();
  const smallerThanSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      className={clsx(
        styles.container,
        smallerThanSmall && styles.containerSmall
      )}
    >
      <div
        className={clsx(styles.fistColumn, smallerThanSmall && "mt-2 w-100")}
      >
        <Text sx={{ flex: 1 }} variant="body2">
          Privacy Policy
        </Text>
        <Text sx={{ flex: 1 }} variant="body2">
          Terms and Conditions
        </Text>
        <Text sx={{ flex: 1 }} variant="body2">
          Version 1.0.0.0
        </Text>
      </div>
      <div className={clsx(styles.secondColumn, smallerThanSmall && "mt-2")}>
        <Text variant="body2">Copyright 2024. All rights reserved</Text>
      </div>
    </div>
  );
};

export default memo(Footer);
