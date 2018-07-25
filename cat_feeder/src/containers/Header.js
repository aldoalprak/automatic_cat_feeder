import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";

class HeaderComponent extends Component {
  render() {
    return (
      <Header
        androidStatusBarColor="#01AC9A"
        style={{ backgroundColor: "#01AC9A" }}
      >
        <Left style={{ flex: 1 }}>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body style={{ flex: 1 }}>
          <Title>AutoFeed</Title>
        </Body>
        <Right style={{ flex: 1 }}>
          <Button transparent>
            <Icon name="ios-notifications" />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default HeaderComponent;
