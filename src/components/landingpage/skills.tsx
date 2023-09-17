import { Typography, Stack, Chip, Grid } from "@mui/material";
import { Sector } from '@/components/common/sector'
import { styled } from "@mui/material/styles";
import { skills } from "@/utils/data.types";
import React from "react";

const SkillChip = styled(Chip)(({ theme }) => ({
  padding: theme.spacing(2),
  color: "gold",
  border: "1px solid",
  borderColor: theme.palette.warning.main,
}));

export const Skills = () => {
  return (
    <Sector title="Skills">
      <Grid container spacing={3} alignItems="baseline" mt={3}>
        {skills.map((item) => (
          <React.Fragment key={item.category}>
            <Grid item xs={2}>
              <Typography align="right" color='white'>
                {item.category}
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Stack direction="row" gap={1} flexWrap="wrap">
                {item.children.map((child) => (
                  <SkillChip key={child} label={child} />
                ))}
              </Stack>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Sector>
  );
};
