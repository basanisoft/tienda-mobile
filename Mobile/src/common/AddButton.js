import React from 'react';
import { Text, TouchableOpacity,Image } from 'react-native';

const AddButton = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ alignSelf: 'flex-end', paddingRight: 15}}>
           <Image
            style={styles.button}
            source={require('../images/add1.png')}
         />
        </TouchableOpacity>
    );
};

const styles = {

    button: {
        width:20,
        height:20,
        marginBottom:5
    }

};

export { AddButton };
