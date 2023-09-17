import { Typography, Stack, Divider, IconButton } from "@mui/material";
import { Link } from "@mui/icons-material";

type Props = {
  title: string;
};

export const SubHeader = ({ title }: Props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={1}
      mb={1}
      sx={{ color: "white" }}
    >
      <Typography variant="h4" color="#fff" fontWeight="bold">
        {title}
      </Typography>
      <IconButton href={`/#${title}`}>
        <Link sx={{ color: "white" }} />
      </IconButton>
      <Divider
        sx={{ flexGrow: 1, borderColor: (theme) => theme.palette.grey[800] }}
      />
    </Stack>
  );
};
