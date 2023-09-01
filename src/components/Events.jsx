import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Image,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  CloseButton,
  Flex,
  Center,
} from "@chakra-ui/react";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");
  const [newEventLocation, setNewEventLocation] = useState("");
  const [newEventStartTime, setNewEventStartTime] = useState("");
  const [newEventEndTime, setNewEventEndTime] = useState("");
  const [newEventImage, setNewEventImage] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/events?${Date.now()}`)
      .then((response) => {
        console.log("Fetched data:", response.data);

        setEvents(response.data);

        localStorage.setItem("events", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const handleAddEventClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddEvent = () => {
    const newEvent = {
      title: newEventTitle,
      description: newEventDescription,
      location: newEventLocation,
      startTime: newEventStartTime,
      endTime: newEventEndTime,
      image: newEventImage,
    };

    axios
      .post("http://localhost:3000/events", newEvent)
      .then((response) => {
        console.log("Event added successfully:", response.data);

        const updatedEvents = [...events, response.data];
        setEvents(updatedEvents);
        setIsModalOpen(false);
        setSuccessMessage("Event added successfully!");

        setNewEventTitle("");
        setNewEventDescription("");
        setNewEventLocation("");
        setNewEventStartTime("");
        setNewEventEndTime("");
        setNewEventImage(null);

        localStorage.setItem("events", JSON.stringify(updatedEvents));
      })
      .catch((error) => {
        console.error("Error adding event:", error);
      });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target.result;
        setNewEventImage(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const closeSuccessMessage = () => {
    setSuccessMessage("");
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      textAlign="center"
    >
      <Box>
        <Heading textAlign="center" marginBottom="20px" fontSize="50">
          {" "}
          {/* Adjust the fontSize value as needed */}
          Events Page
        </Heading>

        <FormControl style={{ marginBottom: "30px" }}>
          <FormLabel style={{ marginLeft: "360px", marginBottom: "-19px" }}>
            Search Events
          </FormLabel>
          <Input
            placeholder="Search events by title, description, or location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </FormControl>
        <Button
          onClick={handleAddEventClick}
          colorScheme="blue"
          marginBottom="30px"
        >
          Add Event
        </Button>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap="20px"
        >
          {events
            .filter(
              (event) =>
                event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.description
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                event.location.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((event) => (
              <a href={`/event-details/${event.id}`} key={event.id}>
                <Box
                  borderWidth="1px"
                  padding="20px"
                  borderRadius="5px"
                  boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                >
                  <Heading size="md">{event.title}</Heading>
                  {event.image && (
                    <Image
                      src={event.image}
                      alt={event.title}
                      maxW="100%"
                      mb="10px"
                    />
                  )}
                  <Text>{event.description}</Text>
                  <Text>Location: {event.location}</Text>
                  <Text>Start Time: {event.startTime}</Text>
                  <Text>End Time: {event.endTime}</Text>
                </Box>
              </a>
            ))}
        </Box>
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <ModalOverlay />
          <ModalContent
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            {" "}
            {/* <ModalHeader>
              <Heading size="xl" fontWeight="bold" mb="4">
                Add Event
              </Heading>
            </ModalHeader> */}
            <style>
              {`
                /* Customize the close button size */
                .chakra-modal__close-btn {
                  width: 32px; /* Adjust the width to your desired size */
                  height: 32px; /* Adjust the height to your desired size */
                }
              `}
            </style>
            {/* <ModalCloseButton size="sm" /> */}
            <ModalBody>
              <Center>
                {" "}
                {/* Center the "Add Event" form */}
                <Box
                  bg="#beaed4"
                  borderWidth="1px"
                  padding="20px"
                  borderRadius="5px"
                  boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
                  maxWidth="400px"
                  margin="0 auto"
                >
                  <ModalCloseButton size="sm" style={{ marginLeft: "200px" }} />

                  <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input
                      placeholder="Event Title"
                      value={newEventTitle}
                      onChange={(e) => setNewEventTitle(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Input
                      placeholder="Event Description"
                      value={newEventDescription}
                      onChange={(e) => setNewEventDescription(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Location</FormLabel>
                    <Input
                      placeholder="Event Location"
                      value={newEventLocation}
                      onChange={(e) => setNewEventLocation(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Start Time</FormLabel>
                    <Input
                      type="datetime-local"
                      value={newEventStartTime}
                      onChange={(e) => setNewEventStartTime(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>End Time</FormLabel>
                    <Input
                      type="datetime-local"
                      value={newEventEndTime}
                      onChange={(e) => setNewEventEndTime(e.target.value)}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Image</FormLabel>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </FormControl>
                  <Button mt="4" colorScheme="blue" onClick={handleAddEvent}>
                    Add Event
                  </Button>
                </Box>
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
        {successMessage && (
          <Alert status="success" mt="4">
            <AlertIcon boxSize="16px" />
            {successMessage}
            <CloseButton
              position="absolute"
              right="5px"
              top="5px"
              onClick={closeSuccessMessage}
            />
          </Alert>
        )}
        <Button
          mt="4"
          colorScheme="blue"
          onClick={() => {
            setSearchQuery("");
            handleModalClose();
          }}
        >
          Clear Search
        </Button>
      </Box>
    </Flex>
  );
};

export default EventsPage;
