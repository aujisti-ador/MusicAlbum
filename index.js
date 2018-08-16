/** @format */
import React from "react"
import {AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';
import Header from "./src/Components/Header";
import AlbumList from "./src/Components/AlbumList";

const App = () => (
    <View style={{flex: 1}}>
        <Header headerText={'Albums! Choice is yours!'}/>
        <AlbumList/>
    </View>
);

AppRegistry.registerComponent(appName, () => App);
