import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

function SimpleBreadcrumbs({ title }) {
  const breadcrumbs = useBreadcrumbs();
  return (
    <Box sx={{}}>
      <div className="background-breadcrump">
        <div className="container breadcrump">
          <h1>{title}</h1>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <i
              className="fa-solid fa-house"
              style={{ marginRight: "2rem" }}
            ></i>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs.map(({ breadcrumb, match }, index) => (
                <Link to={match.pathname || ""} key={match.pathname}>
                  <Typography
                    color="text.primary"
                    sx={{
                      fontFamily: "Montserrat",
                    }}
                  >
                    {breadcrumb}
                  </Typography>
                </Link>
              ))}
              ;
            </Breadcrumbs>
          </Box>
        </div>
        {/* End container */}
      </div>
    </Box>
  );
}
export default SimpleBreadcrumbs;
