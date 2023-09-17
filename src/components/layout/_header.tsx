import {
  AppBar,
  Toolbar,
  Button,
  Stack,
  IconButton,
  Container,
  AppBarProps,
} from "@mui/material";
import { GitHub, Twitter, Mail } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

type ExtendedAppBar = AppBarProps & {
  scroll: string;
};

const Root = styled(AppBar)<ExtendedAppBar>(({ theme, scroll }) => ({
  background: scroll === "true" ? "#33333366" : "none",
  boxShadow: "none",
  paddingTop: scroll === "false" ? theme.spacing(2) : 0,
  paddingBottom: scroll === "false" ? theme.spacing(2) : 0,
  transition: theme.transitions.create(["padding", "background"]),
  backdropFilter: scroll === "true" ? "blur(30px)" : "blur(0px)",
  borderBottom: scroll === "true" ? "1px solid #444" : "none",
}));

const NavBtn = styled(Button)({
  background: "none",
  color: "#fff",
});

const ContactIconBtn = styled(IconButton)({
  border: "1px solid #aaa",
});

export const Header = () => {
  const [scroll, setScroll] = useState("false");

  useEffect(() => {
    const onScroll = () => {
      console.log("ey");
      if (document.body.scrollTop > 0) {
        setScroll("true");
      } else {
        setScroll("false");
      }
    };

    document.body.addEventListener("scroll", onScroll);

    return () => {
      document.body.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Root scroll={scroll}>
      <Toolbar>
        <Container maxWidth="xl">
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            gap={3}
            alignItems="center"
          >
            <ContactIconBtn>
              <GitHub sx={{ color: "white" }} />
            </ContactIconBtn>
            <ContactIconBtn>
              <Twitter sx={{ color: "white" }} />
            </ContactIconBtn>
            <ContactIconBtn>
              <Mail sx={{ color: "white" }} />
            </ContactIconBtn>

            <div style={{ flexGrow: 1 }} />

            <NavBtn href="/#Projects" disableRipple>Projects</NavBtn>
            <NavBtn href="/#Education" disableRipple>Education</NavBtn>
            <NavBtn href="/#Skills" disableRipple>Skills</NavBtn>
            <NavBtn href="/#Contact Me" disableRipple>Contact</NavBtn>
          </Stack>
        </Container>
      </Toolbar>
    </Root>
  );
};
