import React, { useState } from "react";
import { Button, Container, Flex, Box, Label, Input } from "theme-ui";
import Nav from "../../components/common/Nav";

export default function Auth() {
  const [loginCreds, setLoginCreds] = useState({
    email: "",
    contact1: "",
    contact2: "",
  });

  const onChange = (e, type) => {
    setLoginCreds({ ...loginCreds, [type]: e.target.value });
  };

  const onSubmit = () => {
    console.log(loginCreds, "loginCreds");
  };

  return (
    <Container>
      <Nav />
      <Flex sx={{ flexDirection: "column" }} px={[3, 5]} pt={[3, 5]}>
        <Box mb={3}>
          <Label pb={2}>Email</Label>
          <Input
            value={loginCreds.email}
            onChange={(e) => onChange(e, "email")}
            placeholder="EMail Id"
            sx={{
              width: ["inputMobile", "inputDesktop"],
            }}
          />
        </Box>
        <Box mb={3}>
          <Label pb={2}>Contact Number 1</Label>
          <Input
            value={loginCreds.contact1}
            onChange={(e) => onChange(e, "contact1")}
            placeholder="Contact No 1"
            sx={{
              width: ["inputMobile", "inputDesktop"],
            }}
          />
        </Box>
        <Box mb={3}>
          <Label pb={2}>Contact Number 2</Label>
          <Input
            value={loginCreds.contact2}
            onChange={(e) => onChange(e, "contact2")}
            placeholder="Contact No 2"
            sx={{
              width: ["inputMobile", "inputDesktop"],
            }}
          />
        </Box>

        <Box>
          <Button onClick={onSubmit}>Submit</Button>
        </Box>
      </Flex>
    </Container>
  );
}
