import React, { Component } from "react";
import { Linking } from "react-native";
import { Container, Body } from "native-base";

export default class myInitiatives extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <CardItem header bordered>
          <Text selectable={true}>{title}</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text selectable={true}>{body}</Text>
          </Body>
        </CardItem>
      </Container>
    );
  }
}
