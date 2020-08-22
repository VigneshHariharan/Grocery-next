import { Box, Flex, Text, Card, Heading } from "theme-ui";
import Router from "next/router";

export default () => {
  return (
    <Flex
      py={4}
      px={3}
      sx={{
        justifyContent: "flex-end",
        borderBottom: "1px solid",
      }}
    >
      <Card
        sx={{ border: "1px solid", cursor: "pointer" }}
        px={2}
        py={1}
        mx={2}
        onClick={() => Router.push("/")}
      >
        <Text>Home</Text>
      </Card>
      <Card
        sx={{ border: "1px solid", cursor: "pointer" }}
        px={2}
        py={1}
        mx={2}
        onClick={() => Router.push("/login")}
      >
        <Text>Login</Text>
      </Card>
    </Flex>
  );
};
