import { Container } from "@mui/material";
import { LandingPage } from "@/components/landingpage/landingpage";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ height: "100%" }}>
      <LandingPage />
    </Container>
  );
}
