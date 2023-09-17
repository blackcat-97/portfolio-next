import { Stack, Avatar, Typography } from "@mui/material";
import { Place } from '@mui/icons-material'

type Props = {
  logo: string;
  title: string;
  location: string;
  degree: string;
};

export const Education = ({ logo, title, location, degree }: Props) => {
  return (
    <Stack p={5} gap={5} direction="row">
      <Avatar sx={{ height: 100, width: 100 }} src={logo} />
      <Stack sx={{ flexGrow: 1 }}>
        <Typography variant="h5" color="#fff" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography color="gold">{degree}</Typography>

        <Stack mt={3} gap={1} direction='row' alignItems='center'>
          <Place sx={{color: 'gray'}} />
          <Typography variant='body2' color='gray'>Austin, TX 78712, United States</Typography>
        </Stack>
      </Stack>
      <Typography variant='body2' color='gray'>May 17, 2018 - September 17, 2022</Typography>
    </Stack>
  );
};
