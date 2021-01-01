import React from "react";
import { Box } from "bloomer";

import "./girls_header.scss";

export const GirlsHeader = ({ name, className }) =>
  <Box className={["has-text-centered is-size-1-desktop is-size-2-tablet is-size-3-mobile", className].join(" ")}>
    {name}
  </Box>;
