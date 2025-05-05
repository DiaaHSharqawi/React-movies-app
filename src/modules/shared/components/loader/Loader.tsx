import { BeatLoader } from "react-spinners";
import { StyledLoader } from "./Loader.style";

function Loader() {
  return (
    <StyledLoader>
      <BeatLoader size={25} color="#083c84" />
    </StyledLoader>
  );
}

export default Loader;
