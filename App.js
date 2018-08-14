/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Header from "./src/Components/header";

export default class App extends Component {

    render() {
        return (
            <View>
                <Header/>
            </View>
        );
    }
}

