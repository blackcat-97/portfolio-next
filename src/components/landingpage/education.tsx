import { Typography, Box } from "@mui/material";
import { SubHeader } from "@/components/common/subheader";
import { Education as EducationCard } from '@/components/common/education'
import { Sector } from '@/components/common/sector'
import React from "react";

export const Education = () => {
  return (
    <Sector title="Education">
      <EducationCard 
        logo="/assets/education/university-logo.png" 
        title="The University of Texas at Austin"
        location=""
        degree="Bachelor's degree in Computer Science"
      />
    </Sector>
  );
};
