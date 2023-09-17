"use client";

import { Box, Typography, IconButton, Stack, CardActionArea } from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Project as ProjectType } from "@/utils/data.types";


const Root = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  background: "none",
  border: "1px solid #333",
  overflow: "hidden",
  color: theme.palette.getContrastText("#333"),
  boxShadow: theme.shadows[10],
}));

const Content = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  paddingBottom: theme.spacing(2),
  background: "none",
}));

export const Project = (props: ProjectType) => {
  return (
    <Root>
      <CardActionArea sx={{ height: 300 }}>
        <img
          src={props.image}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          alt="project image"
        />
      </CardActionArea>
      <Content>
        <Typography variant="h5" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant='body2'>
          { props.description }
        </Typography>

        <Stack direction="row" justifyContent="flex-end">
          <Typography variant="caption" color={"grey"} mt={2}>
            September 16, 2023 - Present
          </Typography>
        </Stack>
      </Content>

      <Stack direction="row" justifyContent="flex-end" px={3} pb={3}>
        <Stack direction="row" gap={1}>
          <IconButton>
            <GitHub sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <Launch sx={{ color: "white" }} />
          </IconButton>
        </Stack>
      </Stack>
    </Root>
  );
};
