import React, { Component } from "react"
import { View, TouchableOpacity } from 'react-native'
import { Text, Content, Form, Item, Input, Button } from "native-base"


export default class Register extends Component {
    render() {
        return (
            <View>
                <View style={{ marginTop: 200 }}>
                    <Form>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item>
                            <Input placeholder="Email" />
                        </Item>
                        <Item>
                            <Input placeholder="Password" />
                        </Item>
                        <Item>
                            <Input placeholder="Cat Name" />
                        </Item>
                    </Form>
                    <Button style={{ marginTop: 30, marginBottom: 5 }} block success rounded large>
                        <Text>Register</Text>
                    </Button>
                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('Logout')}><Text>Already have an account?</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}