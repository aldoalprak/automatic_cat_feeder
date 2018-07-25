import React, { Component } from "react";
import { View } from "react-native";
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Switch,
  ListItem,
  Text
} from "native-base";
import { observer } from 'mobx-react'
import Store from '../mobx/store.js'

@observer class Mode extends Component {
  state = {
    status: false
  };

  statusChange() {
    if (Store.state.modeStatus === false) {
      Store.state.modeStatus = true
    } else {
      Store.state.modeStatus = false
    }
  }

  render() {
    return (
      <View>
        <Header
          androidStatusBarColor="#01AC9A"
          style={{ backgroundColor: "#01AC9A" }}
        >
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Mode</Title>
          </Body>
        </Header>

        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#FF9501" }}>
              <Icon active name="plane" />
            </Button>
          </Left>
          <Body>
            <Text>Automatic Mode</Text>
          </Body>
          <Right>
            <Switch
              value={Store.state.modeStatus}
              onValueChange={this.statusChange.bind(this)}
            />
          </Right>
        </ListItem>
      </View>
    );
  }
}

export default Mode;
