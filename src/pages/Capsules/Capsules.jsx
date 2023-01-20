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
  getCapsuleData,
  getFilterCapsuleData,
} from "../../redux/Capsule/capsule.action";

const Capsules = () => {
  const { loading, error, errorMessage, capsules } = useSelector(
    (s) => s.capsule
  );
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(1);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const url = `https://api.spacexdata.com/v3/capsules?${name}=${value}`;
    dispatch(getFilterCapsuleData(url));
  };

  useEffect(() => {
    const off = (offset - 1) * 10;
    dispatch(getCapsuleData(off));
  }, [offset]);
  console.log(capsules);
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
      <Stack direction={"row"} justifyContent="space-evenly">
        <Select name="status" w={"30%"} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="retired">Retired</option>
          <option value="unknown">Unknown</option>
          <option value="destroyed">Destroyed</option>
        </Select>
        <Select name="original_launch" w={"30%"} onChange={handleChange}>
          <option value="2010-12-08T15:43:00.000Z">2010</option>
          <option value="2012-05-22T07:44:00.000Z">2012</option>
          <option value="2013-03-01T19:10:00.000Z">2013</option>
          <option value="2014-09-21T05:52:00.000Z">2014</option>
          <option value="2015-04-14T20:10:00.000Z">2015</option>
          <option value="2016-07-18T04:45:00.000Z">2016</option>
          <option value="2017-02-19T14:39:00.000Z">2017</option>
          <option value="2019-03-02T07:45:00.000Z">2019</option>
          <option value="2020-05-30T19:22:00.000Z">2020</option>
        </Select>
        <Select name="type" w={"30%"} onChange={handleChange}>
          <option value="Dragon 1.0">Dragon 1.0</option>
          <option value="Dragon 1.1">Dragon 1.1</option>
          <option value="Dragon 2.0">Dragon 2.0</option>
        </Select>
      </Stack>
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
          {capsules.map((el) => (
            <GridItem>
              <Card {...el} />
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box display={"flex"} justifyContent="center" mt="1rem">
        <Box margin={"auto"}>
          <Button
            isDisabled={offset === 1}
            onClick={() => setOffset(offset - 1)}
          >
            Prev
          </Button>
          <span>{offset}</span>
          <Button
            isDisabled={offset === 2}
            onClick={() => setOffset(offset + 1)}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Capsules;
