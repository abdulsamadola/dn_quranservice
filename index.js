import React, { PureComponent } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Body,
  Icon,
  Text,
  List,
  ListItem,
  Drawer,
  H1,
  Thumbnail
} from "native-base";
import {
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { reciterData } from "./src/components/api";
import SideBar from "./src/screens/sidebar";
import { Audio } from "expo";

console.disableYellowBox = true;
class Index extends PureComponent {
  static navigationOptions = {
    header: null
  };

  closeDrawer() {
    this._drawer._root.close();
  }

  openDrawer() {
    this._drawer._root.open();
  }

  constructor(props) {
    super(props);
    this.state = {
      reciterList: [],
      reciter_name: "Select Reciter",
      reciterDesc: "",
      recitersData: [],
      isLoading: true
    };
    this.playBack = null;
  }
  componentDidMount() {
    this.setupAudio();
    this.reciterDataHandler();
  }

  reciterDataHandler() {
    reciterData().then(
      data => {
        this.setState({
          recitersData: data,
          isLoading: false
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  async setupAudio() {
    await Audio.setIsEnabledAsync(true);
    await Audio.setAudioModeAsync({
      staysActiveInBackground: true,
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false
    });
  }

  render() {
    const mainView = this.state.isLoading ? (
      <View style={styles.listContainer}>
        <ActivityIndicator
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25
          }}
          color="#43991a"
        />
        <Text
          style={{
            alignSelf: "center"
          }}
        >
          Loading reciters, Please Wait...
        </Text>
      </View>
    ) : (
      <View style={styles.listContainer}>
        <List
          dataArray={this.state.recitersData}
          renderRow={item => this.renderList(item)}
        />
      </View>
    );
    return (
      <Drawer
        ref={ref => {
          this._drawer = ref;
        }}
        content={
          <SideBar
            navigator={this._navigator}
            onClose={() => this.closeDrawer()}
            {...this.props}
          />
        }
        onClose={() => this.closeDrawer()}
      >
        <Container>
          <StatusBar barStyle="light-content" />
          <Header hasTabs style={{ backgroundColor: "#43991a" }}>
            <Button onPress={() => this.openDrawer()} transparent>
              <Icon name="menu" />
            </Button>
            <Body>
              <Title>DN - QURAN SERVICE</Title>
            </Body>
          </Header>
          <View style={styles.myContainer}>
            <ImageBackground
              source={require("./src/images/mp3.gif")}
              resizeMode="cover"
              style={styles.imgContainer}
            >
              <View style={styles.topContainer}>
                <H1 style={{ color: "#fff" }}>{this.state.reciter_name}</H1>
                <Text style={{ color: "#fff" }} note>
                  {this.state.reciterDesc}
                </Text>
              </View>
            </ImageBackground>
            {mainView}
          </View>
        </Container>
      </Drawer>
    );
  }
  renderList(item) {
    return (
      <ListItem onPress={() => this.playReciter(item)}>
        <Thumbnail size={80} square source={require("./src/images/dn.png")} />
        <Body>
          <Text>{item.reciter_name}</Text>
          <Text note>{item.reciterDesc}</Text>
        </Body>
      </ListItem>
    );
  }

  async playReciter(item) {
    this.setState({
      reciter_name: "Loading, Please Wait...",
      reciterDesc: ""
    });

    //Reset First
    if (this.playBack != null) {
      await this.playBack.unloadAsync();
      this.playBack.setOnPlaybackStatusUpdate(null);
      this.playBack = null;
    }

    //Start Playing
    try {
      const { sound, status } = await Audio.Sound.createAsync(
        { uri: item.mount_point },
        { shouldPlay: false }
      );

      this.playBack = sound;
      this.playBack.playAsync();

      this.setState({
        reciter_name: item.reciter_name,
        reciterDesc: item.reciterDesc
      });
    } catch (err) {
      this.setState({
        reciter_name:
          "There's a problem loading this reciter, please try again",
        reciterDesc: ""
      });
    }
  }
}

const styles = StyleSheet.create({
  myContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  topContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.55)",
    justifyContent: "center",
    paddingLeft: 20
  },
  imgContainer: {
    flex: 1
  },
  listContainer: {
    flex: 2
  }
});

export default Index;
