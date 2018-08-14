/** @format */
import React from "react"
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Header from "./src/Components/header";

const App = () => (
    <Header headerText={'Albums! Choice is yours!'}/>
);

AppRegistry.registerComponent(appName, () => App);
