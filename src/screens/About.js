import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Icon,
  H2,
  H3
} from "native-base";
import Headery from "./myHeader";

export default class About extends Component {
  static navigationOptions = {
    header: props => <Headery {...props} title="About Us" />
  };
  render() {
    return (
      <Container>
        <Content
          style={styles.myContainer}
          padder={false}
          contentContainerStyle={{ backgroundColor: "#fff" }}
        >
          <Card>
            <CardItem>
              <Body>
                <Text selectable={true}>
                  All thanks and praises be to Allah. May his peace and blessing
                  be on the noble Prophet (sallallahu aleihi wa sallam), his
                  companions and those who follow his path till the day of
                  resurrection.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Body>
                <Text selectable={true}>
                  The dawahnigeria.com project arose out of a desire to provide
                  a platform for reaching out to the teeming Nigerian Muslim
                  populace. It aims to be a convergence point for Muslims in
                  Nigeria and around the world to learn more about the beautiful
                  religion of Allah among other features. The project is being
                  executed and maintained by Edawah Technologies, the technology
                  partner of the main body, The Edawah Foundation. The Edawah
                  Foundation This foundation is a non-governmental organization
                  (NGO) formed to expand the frontiers of IT in the propagation
                  of Islam through increasing the IT awareness of Muslims and
                  championing dawah activities in Nigeria through the
                  application of world-class IT practices
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Text style={{ color: "#458d10" }} selectable={true}>
                Objectives
              </Text>
            </CardItem>

            <CardItem>
              <Icon active name="arrow-forward" />
              <Text>Convergence point for Muslims</Text>
            </CardItem>

            <CardItem>
              <Icon active name="arrow-forward" />
              <Text>Better propagation of dawah</Text>
            </CardItem>

            <CardItem>
              <Icon active name="arrow-forward" />
              <Text>Enhancement of IT skills amongst the Muslim populace</Text>
            </CardItem>

            <CardItem>
              <Icon active name="arrow-forward" />
              <Text>Creation of jobs for the Muslims</Text>
            </CardItem>

            <CardItem>
              <Icon active name="arrow-forward" />
              <Text>
                Making the works of indigenous resource persons available
                internationally
              </Text>
            </CardItem>

            <CardItem>
              <Icon active name="arrow-forward" />
              <Text>
                Encourage intellectualism through e-publishing of quality
                resources
              </Text>
            </CardItem>

            <CardItem>
              <Icon active name="arrow-forward" />
              <Text>
                Providing online Islamic courses to make it easier to learn
                about Islam
              </Text>
            </CardItem>

            <CardItem>
              <Icon active name="arrow-forward" />
              <Text>
                Partnering with other dawah efforts to achieve better results
              </Text>
            </CardItem>

            <CardItem>
              <Icon active name="arrow-forward" />
              <Text>
                Raise money to accomplish other Edawah Foundation projects
              </Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Text style={{ color: "#458d10" }} selectable={true}>
                Support and Contribution
              </Text>
            </CardItem>

            <CardItem>
              <Body>
                <Text selectable={true}>
                  The enormity of the project has made its full execution
                  impossible with the resources at our disposal now. We are in
                  need for assistance in the execution of the remaining phases
                  and maintenance of our current infrastructure. {`\n`}
                </Text>
                <H3
                  style={{
                    marginLeft: 100
                  }}
                >
                  [SIGNED]
                </H3>
                <H3 style={{ justifyContent: "center", fontSize: 16 }}>
                  {`\n`}
                  Coordinator The E-dawah Foundation GEM Building, Klm 2,
                  Arulogun Road, Ojoo, Ibadan
                </H3>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  myContainer: {
    flex: 1
  }
});
