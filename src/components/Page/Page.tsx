import { Box } from "@mui/material";
import React, { type PropsWithChildren } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

type PageProps = {};
const Page = ({ children }: PropsWithChildren<PageProps>) => {
  return (
    <Box minHeight={"100vh"}>
      <Box py={"2rem"} px={"7.5rem"} bgcolor={"#FAFAFA"}>
        <Box mb={"3.125rem"}>
          <NavBar />
        </Box>
        {children}
      </Box>
      <Box bgcolor={"white"}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Page;
