import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const RocketCard = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    active,
    stages,
    cost_per_launch,
    success_rate_pct,
    country,
    first_flight,
  } = props;

  return (
    <>
      <Box
        key={props.id}
        display="flex"
        flexDirection={"column"}
        justifyContent="space-evenly"
        alignItems={"center"}
        h="180px"
        bgColor={"rgb(83,76,135)"}
        color="whitesmoke"
      >
        <Heading textAlign={"center"} size="md">
          {props.company ? props.company : "Click on view Button for details"}
        </Heading>
        <Button
          _hover={{
            backgroundColor: "pink",
          }}
          onClick={onOpen}
          variant={"ghost"}
        >
          View Details
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Active:{active ? "YES" : "NO"}</Text>
            <Text>Stages:{stages}</Text>
            <Text>Cost Per Launch:{cost_per_launch}</Text>
            <Text>Success Rate:{success_rate_pct}</Text>
            <Text>First Landings:{first_flight}</Text>
            <Text>Country:{country}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RocketCard;
