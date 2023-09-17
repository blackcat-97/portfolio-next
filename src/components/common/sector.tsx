import react, { ReactNode } from "react";
import { Box, useTheme } from "@mui/material";
import { SubHeader } from "./subheader";

type Props = {
  title: string;
  children: ReactNode;
};

export const Sector = ({ title, children }: Props) => {
  const theme = useTheme();

  return (
    <div id={title} style={{ paddingTop: theme.spacing(10) }}>
      <Box pb={10}>
        <SubHeader title={title} />
        {children}
      </Box>
    </div>
  );
};
