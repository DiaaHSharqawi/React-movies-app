import { Box } from "@mui/system";
import MoviPlexLogo from "../MoviPlexLogo/MoviPlexLogo";

function HeaderLogo() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <MoviPlexLogo />
      </Box>
    </>
  );
}

export default HeaderLogo;
