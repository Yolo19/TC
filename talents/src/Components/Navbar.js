import React from "react";
import { Segment, Header } from "semantic-ui-react";

export default function Navbar() {
  return (
    <Segment basic inverted color="blue" vertical textAlign='center' placehoder='a'>
      <Header as="h3">Navbar</Header>
    </Segment>
  );
}