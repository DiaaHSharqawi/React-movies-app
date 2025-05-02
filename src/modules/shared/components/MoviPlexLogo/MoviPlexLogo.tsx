import { IconButton, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";

function MoviPlexLogo() {
  const { palette } = useTheme();

  const logoTextParts = [
    {
      partName: "MoviPle",
      color: palette.primary.main,
    },
    {
      partName: "X",
      color: palette.primary.light,
    },
  ];

  return (
    <IconButton aria-label="movie icon" color={palette.primary.main} disabled>
      <Typography variant="h4" component={"h1"}>
        {logoTextParts.map((textPart) => {
          return (
            <>
              <Box
                component={"span"}
                sx={{
                  color: textPart.color,
                  fontWeight: "bold",
                }}
                key={textPart.partName}
              >
                {textPart.partName}
              </Box>
            </>
          );
        })}
      </Typography>
    </IconButton>
  );
}

export default MoviPlexLogo;
