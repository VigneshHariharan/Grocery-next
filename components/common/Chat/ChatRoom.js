import { Container, Box } from "theme-ui";
import { MessageBox, ChatItem } from "react-chat-elements";

export default () => {
  return (
    <Container>
      Chat ROOm
      <Box
        sx={{
          width: 300,
          height: 50,
        }}
      >
        {/* <MessageBox /> */}
      </Box>
      <ChatItem
        avatar={"https://facebook.github.io/react/img/logo.svg"}
        alt={"Reactjs"}
        title={"Facebook"}
        subtitle={"What are you doing?"}
        date={new Date()}
        unread={0}
        sx={{
          backgroundColor: "red",
        }}
      />
    </Container>
  );
};
