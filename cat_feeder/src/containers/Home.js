import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text, Icon } from "native-base";
import styles from "../styles";
import Header from "./Header.js";
import PercentageCircle from "react-native-percentage-circle";

class Home extends Component {
  componentDidMount() {
    // alert(this.props.navigation);
  }

  render() {
    // closeDrawer = () => {
    //   this.drawer._root.close();
    // };
    // openDrawer = () => {
    //   this.drawer._root.open();
    // };
    return (
      <View>
        <Header navigation={this.props.navigation} />
        <View style={styles.container}>
          <PercentageCircle
            radius={120}
            percent={70}
            color={"#e3e3e3"}
            innerColor={"#e3e3e3"}
            bgcolor={"#000"} // sisa
          >
            {/* <Image style={{width:20,height:20}} source={{require('your image')}} /> */}
          </PercentageCircle>
          <Button iconLeft rounded success style={styles.feedButton}>
            <Icon name="paw" />
            <Text>Feed ME!</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default Home;
