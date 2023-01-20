import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bgColor={"rgb(83,76,135)"} p="14px">
      <Flex
        color={"whitesmoke"}
        justifyContent={"space-evenly"}
        alignItems="center"
      >
        <Link to={"/"}>
          <Button color={"whitesmoke"} size={["md", "md", "lg", "lg"]} variant="link">
            Capsules
          </Button>
        </Link>
        <Link to={"/rockets"}>
          <Button color={"whitesmoke"} size={["md", "md", "lg", "lg"]} variant="link">
            Rockets
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
