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

const Card = ({
  capsule_serial,
  capsule_id,
  status,
  original_launch,
  original_launch_unix,
  missions: { name, flight },
  landings,
  type,
  details,
  reuse_count,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        key={capsule_serial}
        display="flex"
        flexDirection={"column"}
        justifyContent="space-evenly"
        alignItems={"center"}
        h="180px"
        bgColor={"rgb(83,76,135)"}
        color="whitesmoke"
      >
        <Heading textAlign={"center"} size="md">
          {details ? details : "Click on view Button for details"}
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
            <Text>ID:{capsule_id}</Text>
            <Text>Status:{status}</Text>
            <Text>Launch Date:{original_launch}</Text>
            <Text>Launch unix:{original_launch_unix}</Text>
            <Text>Total Landings:{landings}</Text>
            <Text>Type:{type}</Text>
            <Text>Count:{reuse_count}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Card;
