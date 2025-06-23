import { Box, Stack } from "@mui/material";
import React, { type PropsWithChildren } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

type PageProps = {};
const Page = ({ children }: PropsWithChildren<PageProps>) => {
  return (
    <Stack minHeight={"100vh"}>
      <Box py={"2rem"} px={"7.5rem"} bgcolor={"#FAFAFA"} flex={1}>
        <Box mb={"3.125rem"}>
          <NavBar />
        </Box>
        {children}
      </Box>
      <Box bgcolor={"white"}>
        <Footer />
      </Box>
    </Stack>
  );
};

export default Page;
