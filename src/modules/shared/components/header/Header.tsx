import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/system/Container";
import HeaderActions from "./HeaderActions";
import HeaderLogo from "./HeaderLogo";

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
    </>
  );
}

export default Header;
