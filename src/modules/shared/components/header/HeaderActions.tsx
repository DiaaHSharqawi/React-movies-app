import { IconButton } from "@mui/material";

import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";

function HeaderActions() {
  return (
    <>
      <IconButton aria-label="Header search" size="large">
        <SearchIcon />
      </IconButton>
      <IconButton aria-label="Header authentication" size="large">
        <Person2Icon />
      </IconButton>
    </>
  );
}
export default HeaderActions;
