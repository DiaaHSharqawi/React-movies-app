import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MoviPlexLogo from "../MoviPlexLogo/MoviPlexLogo";

function Header() {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <MoviPlexLogo />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
