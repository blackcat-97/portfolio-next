"use client";

import { Grid } from "@mui/material";
import { Project } from "@/components/common/project";
import { projects } from "@/utils/data.types";
import { Sector } from '@/components/common/sector'

export const Work = () => {
  return (
    <Sector title="Projects">
      <Grid container my={5} spacing={3}>
        {projects.map((item) => (
          <Grid item xs={12} md={6} lg={4} key={item.image}>
            <Project {...item} />
          </Grid>
        ))}
      </Grid>
    </Sector>
  );
};
