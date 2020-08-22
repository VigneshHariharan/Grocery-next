import { Box, Container, Text, Button, Flex } from "theme-ui";
import Router from "next/router";
import { Nav, StoreCard } from "../components/common";

export default function Home() {
  return (
    <Container>
      <Nav />
      <Box sx={{ color: "secondary" }}>THEME UI HOME</Box>
      <Button onClick={() => Router.push("/login")} p={3}>
        Move To Login
      </Button>
      <Flex
        px={3}
        pt={3}
        sx={{
          flexDirection: "column",
        }}
      >
        <StoreCard />
      </Flex>
    </Container>
  );
}
