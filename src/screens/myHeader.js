import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon
} from "native-base";
export default class myHeader extends Component {
  constructor(props) {
    super(props);
    this.data = this.props;
  }
  navc = () => {
    this.props.navigation.navigate("IndexScreen");
  };
  render() {
    return (
      <Header style={{ backgroundColor: "#43991a" }}>
        <Left>
          <Button onPress={this.navc} transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{this.data.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
