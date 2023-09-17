"use client";

import {
  TextField,
  Stack,
  Box,
  Typography,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import { Sector } from '@/components/common/sector'

export const Contact = () => {
  return (
    <Sector title="Contact Me">
      <Grid container spacing={6} my={2}>
        <Grid item xs={6}>
          <Stack gap={3}>
            <TextField label="Name" />
            <TextField label="Email Address" />
            <TextField multiline rows={4} label="About the project" />
            <Button fullWidth variant="contained">
              Send
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" color="white" gutterBottom>
            Get in Touch
          </Typography>
          <br />
          <Typography color="gray" variant="h6">
            Interested in collaborating or have a question? <br /> Feel free to
            reach out to me using the contact form below. I'm eager to hear from
            you and discuss potential opportunities. <br /> I'll make sure to
            get back to you promptly. <br />
            <br /> Thank you for your interest!
          </Typography>
        </Grid>
      </Grid>
      <Grid container mt={10} spacing={5}>
        <Grid item xs={4} pb={4} borderRight="1px solid #333"></Grid>
        <Grid item xs={4} pb={4} borderRight="1px solid #333">
          <Typography fontWeight="bold" color="white" gutterBottom>
            Make a call here!
          </Typography>
          <Typography color="gray">+1 587 887 1442</Typography>
        </Grid>
        <Grid item xs={4} pb={4}>
          <Typography fontWeight="bold" color="white" gutterBottom>
            Message me here!
          </Typography>
          <Typography color="gray">nobertcasper@gmail.com</Typography>
        </Grid>
      </Grid>
    </Sector>
  );
};
