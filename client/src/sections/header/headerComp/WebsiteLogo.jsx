/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "@mui/material/Link";
import { IconButton } from "@mui/material";

const WebsiteLogo = () => {
  return (
    <Link
      sx={{ height: "4em", display: "flex", flexDirection: "start" }}
      component="button"
      variant="body1"
      onClick={() => {
        console.info("I'm a button.");
      }}
    >
      <IconButton className="border">
        <img
          alt="L"
          src="../../public/assets/logo3.png"
          width="150px"
          height="45px"
        />
      </IconButton>
    </Link>
  );
};

export default WebsiteLogo;
