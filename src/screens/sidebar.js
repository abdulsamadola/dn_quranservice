import React, { PureComponent } from "react";
import { Platform, Linking, Share } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Button,
  Title,
  Thumbnail
} from "native-base";

export default class ListIconExample extends PureComponent {
  static navigationOptions = {
    header: null
  };
  _handleShare() {
    const url = "https://dawahnigeria.com/qs/";
    const title =
        'Assalam alaykum waromotullahi wabarokatu, I am using an awesome app "DN Quran Service" to stream Quran from various Nigerian reciters, anytime anywhere. You should try it too ',
      message = `${title}\n\n${url}\n\n Shared Via DN Quran Service App`;
    return Share.share(
      {
        title,
        message,
        url: message
      },
      {
        dialogTitle: `Share ${title}`
      }
    );
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Header style={{ backgroundColor: "#fff", height: 100 }}>
          <Thumbnail
            style={{ paddingBottom: 50, marginTop: 10 }}
            large
            square
            source={require("../images/dn.png")}
          />
        </Header>
        <Content>
          <ListItem
            onPress={() => Linking.openURL("https://dawahnigeria.com/qs/")}
            icon
          >
            <Left>
              <Button style={{ backgroundColor: "#458d10" }}>
                <Icon active name="cash" />
              </Button>
            </Left>
            <Body>
              <Text>Support</Text>
            </Body>
          </ListItem>
          <ListItem
            onPress={() => this.props.navigation.navigate("InitScreen")}
            icon
          >
            <Left>
              <Button style={{ backgroundColor: "#458d10" }}>
                <Icon active name="pulse" />
              </Button>
            </Left>
            <Body>
              <Text>Our Initiatives</Text>
            </Body>
          </ListItem>
          <ListItem onPress={this._handleShare} icon>
            <Left>
              <Button style={{ backgroundColor: "#458d10" }}>
                <Icon active name="share" />
              </Button>
            </Left>
            <Body>
              <Text>Share</Text>
            </Body>
          </ListItem>
          <ListItem
            onPress={() => this.props.navigation.navigate("AboutScreen")}
            icon
          >
            <Left>
              <Button style={{ backgroundColor: "#458d10" }}>
                <Icon active name="help-circle" />
              </Button>
            </Left>
            <Body>
              <Text>About DN</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
