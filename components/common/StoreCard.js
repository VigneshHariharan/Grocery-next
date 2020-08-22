import { Card, Box, Text, Button, Grid, Message, Progress } from "theme-ui";

export default () => {
  return (
    <Card
      sx={{
        width: "storeCardWidth",
        height: "storeCardHeight",
        border: "1px solid",
      }}
      mb={3}
    >
      <Progress></Progress>
      <Text> STORE CARD NAME</Text>
    </Card>
  );
};
