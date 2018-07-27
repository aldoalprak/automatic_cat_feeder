import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
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
  Text,
  List
} from "native-base";
import DateTimePicker from 'react-native-modal-datetime-picker';
import { observer } from 'mobx-react'
import Store from '../mobx/store.js'
import styles from "../styles/index.js";

@observer class Mode extends Component {
  state = {
    isDateTimePickerVisible: false,
    isDateTimePickerVisible2: false,
    timeMorning: "",
    timeEvening: "",
  };

  _showDateTimePicker() {
    this.setState(
      {
        isDateTimePickerVisible: true
      });
  }

  _showDateTimePicker2() {
    this.setState(
      {
        isDateTimePickerVisible2: true
      });
  }

  _hideDateTimePicker() {
    this.setState(
      {
        isDateTimePickerVisible: false
      });
  }

  _hideDateTimePicker2() {
    this.setState(
      {
        isDateTimePickerVisible2: false
      });
  }

  statusChange() {
    if (!Store.state.modeStatus) {
      Store.state.modeStatus = true
    } else {
      Store.state.modeStatus = false
    }
  }

  _handleDatePicked(time) {
    console.log("====", time)
    this._hideDateTimePicker();
    this.setState({
      timeMorning: time.toLocaleTimeString('it-IT')
    })
  };

  _handleDatePicked2(time) {
    console.log("====", "timezzz")
    this._hideDateTimePicker2();
    this.setState({
      timeEvening: time.toLocaleTimeString('it-IT')
    })
  };

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
            <Button style={{ backgroundColor: "#1d6b99" }}>
              <Icon active name="clock" />
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

        {Store.state.modeStatus ?

          <View style={{ marginTop: 50 }}>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Button rounded style={{ backgroundColor: "#f2f20e" }}>
                    <Icon active name="cloud" />
                  </Button>
                </Left>
                <Body>
                  <Text>Morning Feed</Text>
                  <Text note numberOfLines={1}>{this.state.timeMorning}</Text>
                </Body>
                <Right>
                  <Button success rounded onPress={this._showDateTimePicker.bind(this)}>
                    <Text>Set</Text>
                  </Button>
                </Right>
              </ListItem>
              <ListItem thumbnail style={{ marginTop: 45 }}>
                <Left>
                  <Button rounded style={{ backgroundColor: "#4155f4" }}>
                    <Icon active name="moon" />
                  </Button>
                </Left>
                <Body>
                  <Text>Evening Feed</Text>
                  <Text note numberOfLines={1}>{this.state.timeEvening}</Text>
                </Body>
                <Right>
                  <Button success rounded onPress={this._showDateTimePicker2.bind(this)}>
                    <Text>Set</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>

            <DateTimePicker
              mode="time"
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked.bind(this)}
              onCancel={this._hideDateTimePicker.bind(this)}
              is24Hour={true}
            />
            <DateTimePicker
              mode="time"
              isVisible={this.state.isDateTimePickerVisible2}
              onConfirm={this._handleDatePicked2.bind(this)}
              onCancel={this._hideDateTimePicker2.bind(this)}
              is24Hour={true}
            />
          </View>
          : <Text />}
      </View>
    );
  }
}

export default Mode;
