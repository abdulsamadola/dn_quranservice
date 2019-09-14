import React, { Component } from "react";
import { ScrollView, StyleSheet, Linking } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body
} from "native-base";
import Headery from "./myHeader";

export default class Initiatives extends Component {
  static navigationOptions = {
    header: props => <Headery {...props} title="Our Initiatives" />
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
                <Text>
                  The Dawahnigeria project is a huge initiative crafted to
                  address the present and future needs of Nigerian Muslims. Our
                  goal, as a body, is to expand the frontiers of IT in the
                  propagation of Islam. The dynamic nature of IT imposes
                  dynamism on our methodology. Below are some of our projects:
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text
                style={{ color: "#458d10" }}
                onPress={() => Linking.openURL("http://quranopedia.com")}
              >
                Quranopedia.com
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  A huge initiative, in its first phase, to bring the Quran
                  closer to people, with a vision of becoming an encyclopedia of
                  the Quran.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text
                style={{ color: "#458d10" }}
                onPress={() => Linking.openURL("http://deenquiz.com")}
              >
                DeenQuiz.com
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  A quiz app with almost 4500 objective questions (easy,
                  intermediate and advanced), with answers and little
                  explanation on various areas of Islamic field of knowledge.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text
                style={{ color: "#458d10" }}
                onPress={() =>
                  Linking.openURL("http://dawahnigeria.com/highlight")
                }
              >
                DN Highlight Project
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  The Highlight project was initiated to deliver short audio
                  daily reminders to the Ummah, especially those who might not
                  be too comfortable with full dawahcast lectures due to time or
                  bandwidth constraint.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text
                style={{ color: "#458d10" }}
                onPress={() => Linking.openURL("http://dawahnigeria.com/discs")}
              >
                DN Dawahcast(R)
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Provision of lecture in audio format of more than 30 resource
                  persons in 5 languages (English, Hausa, Igbo, Ebira & Yoruba)
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text
                style={{ color: "#458d10" }}
                onPress={() =>
                  Linking.openURL("http://dawahnigeria.com/articles")
                }
              >
                DN Articles
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Provision of quality articles from various sources. The well
                  tagged articles cover almost 70 topic areas relevant to both
                  Muslims and non-Muslims.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text
                style={{ color: "#458d10" }}
                onPress={() =>
                  Linking.openURL("http://dawahnigeria.com/recitations")
                }
              >
                DN Qur’an
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Provision of qur’an recitations in various Nigerian
                  intonations.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text
                style={{ color: "#458d10" }}
                onPress={() =>
                  Linking.openURL("http://dawahnigeria.com/dawahcast")
                }
              >
                DN e-Tafseer Project
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Initiative to enable people follow-up on daily tafseer
                  sessions of numerous centers across the country. We started
                  with 7 centers in Ramadan 1433AH and the number has been
                  growing significantly since then.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text
                style={{ color: "#458d10" }}
                onPress={() => Linking.openURL("http://dawahnigeria.com/qs")}
              >
                DN Qur'an Service
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  24/7 online Quran stations that stream quran from various
                  Nigerian reciters. It is available on Android, iOS, and
                  mobile-optimized Web version.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text
                style={{ color: "#458d10" }}
                onPress={() =>
                  Linking.openURL("http://dawahnigeria.com/marketplace")
                }
              >
                DN Marketplace
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  An online store to sell dawah works of various resource
                  persons, magazine subscriptions etc. It is primarily for
                  assisting and encouraging resource persons to publish and
                  profit from their quality works.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text
                style={{ color: "#458d10" }}
                onPress={() =>
                  Linking.openURL("http://dawahnigeria.com/directory")
                }
              >
                DN Directory
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  It is a platform with an audacious mission to track and index
                  information about numerous facets relevant to the deen of an
                  average Nigerian Muslim.
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text
                style={{ color: "#458d10" }}
                onPress={() =>
                  Linking.openURL("http://dawahnigeria.com/showcase")
                }
              >
                DN Showcase
              </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Pinterest-like display of Islamic art, calligraphy, mosques
                  and other beneficial images by NIGERIAN designers. Aims to be
                  a central point for Nigerian designers who signup and upload
                  their works.
                </Text>
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
