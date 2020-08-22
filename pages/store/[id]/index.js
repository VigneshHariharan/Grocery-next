import { Box, Container, Text } from "theme-ui";
import { useRouter } from "next/router";
import { Chat } from "../../../components/common";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <Text>Store {id}</Text>
      <Chat />
    </Container>
  );
};
