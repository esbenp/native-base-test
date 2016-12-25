/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Test from './test'
import {
  Button,
  Container,
  Content,
  InputGroup,
  Input,
  List,
  ListItem,
  Icon,
  Text
} from 'native-base'

export default class NativeBaseTest extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Test />
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input inlineLabel label="Some label" placeholder="What the devil" />
              </InputGroup>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NativeBaseTest', () => NativeBaseTest);
