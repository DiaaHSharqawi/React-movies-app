import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import MoviPlexLogo from "../MoviPlexLogo/MoviPlexLogo";

function HeaderLogo() {
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          cursor: "pointer",
        }}
        onClick={navigateToHomePage}
      >
        <MoviPlexLogo />
      </Box>
    </>
  );
}

export default HeaderLogo;
