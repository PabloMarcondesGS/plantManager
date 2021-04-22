import React from 'react';

import { 
    StyleSheet,
    Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';

interface PlantProps extends RectButtonProps{
    data: {
        name: string;
        photo: string;
    }
}

export const PlantCardPrimary = ({ data, ...rest}: PlantProps ) => {
    return(
        <RectButton
            style={styles.container}
            {...rest}
        >

            <Text style={styles.text}>
                {data.name}
            </Text>

        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        alignItems: 'center',
        margin: 10
    },
    text: {
        color: colors.green_dark
    }
})