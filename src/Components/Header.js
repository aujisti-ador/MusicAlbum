import React from 'react';
import {View, Text} from 'react-native';


const Header = (props) => {
    const {viewStyle, textStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {props.headerText}
            </Text>
        </View>
    );
};

const styles = {

    viewStyle: {
        backgroundColor: '#e8e8e8',
        height: 60,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
export default Header;