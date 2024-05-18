import React from 'react';
import {View, Text} from 'react-native';

const Greeting=(props)=> {
    return (
        <View>
            <Text>안녕하세요. {props.name}를 만들어 봅시다.</Text>
        </View>
    );
}

export default Greeting;