import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import HeaderActions from "./HeaderActions";
import HeaderLogo from "./HeaderLogo.tsx";

function Header() {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#fff", py: 1 }}>
        <Container>
          <Toolbar>
            <HeaderLogo />
            <HeaderActions />
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar sx={{ my: 2 }} />
    </>
  );
}

export default Header;
