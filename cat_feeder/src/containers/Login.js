import React, { Component } from "react"
import { View, TouchableOpacity } from 'react-native'
import { Text, Content, Form, Item, Input, Button } from "native-base"


export default class Login extends Component {
    render() {
        return (
            <View>
                <View style={{ marginTop: 250 }}>
                    <Form>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item>
                            <Input placeholder="Password" />
                        </Item>
                    </Form>
                    <Button style={{ marginTop: 30, marginBottom: 5 }} block success rounded large>
                        <Text>Sign In</Text>
                    </Button>
                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('Register')}><Text>Create Account</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}