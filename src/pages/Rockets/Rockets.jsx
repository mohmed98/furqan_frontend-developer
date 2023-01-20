import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Select,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import ContentLoader from "react-content-loader";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";

import {
  getFilterRocketData,
  getRocketData,
} from "../../redux/Rocket/rocket.action";
import RocketCard from "./RocketCard";

const Rockets = () => {
  const { loading, error, errorMessage, rockets } = useSelector(
    (s) => s.rocket
  );
  const dispatch = useDispatch();



  useEffect(() => {
  
    dispatch(getRocketData());
  }, []);

  if (loading) {
    return (
      <ContentLoader
        speed={2}
        width={340}
        height={84}
        viewBox="0 0 340 84"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        // {...props}
      >
        <rect x="0" y="0" rx="3" ry="3" width="67" height="11" />
        <rect x="76" y="0" rx="3" ry="3" width="140" height="11" />
        <rect x="127" y="48" rx="3" ry="3" width="53" height="11" />
        <rect x="187" y="48" rx="3" ry="3" width="72" height="11" />
        <rect x="18" y="48" rx="3" ry="3" width="100" height="11" />
        <rect x="0" y="71" rx="3" ry="3" width="37" height="11" />
        <rect x="18" y="23" rx="3" ry="3" width="140" height="11" />
        <rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
      </ContentLoader>
    );
  }
  if (error) {
    return (
      <Box>
        <Heading>error ... {errorMessage}</Heading>
      </Box>
    );
  }
  return (
    <Box mt={"1rem"}>
      <Box mt={"1rem"}>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={10}
        >
          {rockets.map((el) => (
            <GridItem key={el.id}>
              <RocketCard {...el} />
            </GridItem>
          ))}
        </Grid>
      </Box>
     
    </Box>
  );
};

export default Rockets;
