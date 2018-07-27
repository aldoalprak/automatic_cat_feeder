import React, { Component } from "react"
import { View } from "react-native";
import { Button, Text, Icon } from "native-base";
import styles from "../styles";
import Header from "../components/Header";
import PercentageCircle from "react-native-percentage-circle";
import db from "../helpers/firebase.js"

class Home extends Component {

  state = {
    foodStatus: {}
  }


  componentDidMount() {
    // Other file
    // alert(db);
    console.log(db.ref)
    // console.log(firebase.database());
    db.ref('done/').on("value", snapshot => {
      // this.state.foodStatus = snapshot.val()
      alert(snapshot.val())
      console.log(snapshot.val())
    })
  }

  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} />
        <View style={styles.container}>
          <PercentageCircle
            radius={120}
            percent={100}
            color={"green"}
            innerColor={"white"}
            bgcolor={"#e3e3e3"} // sisa
            borderWidth={25}
            children={<Text> Food Meter</Text>}
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
