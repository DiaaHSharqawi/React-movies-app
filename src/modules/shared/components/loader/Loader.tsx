import { Stack } from "@mui/system";
import { BeatLoader } from "react-spinners";

function Loader() {
  return (
    <Stack
      sx={{
        width: 1,
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BeatLoader size={25} color="#083c84" />
    </Stack>
  );
}

export default Loader;
