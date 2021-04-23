import React from 'react';
import { 
    StyleSheet,
    Alert,
    Text,
    View,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import {SvgFromUri} from 'react-native-svg';

import waterdrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSave(){
    return(
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri={waterdrop}
                    height={150}
                    width={150}
                />

                <Text style={styles.plantName}>
                    Nome da Planta
                </Text>
                <Text style={styles.plantAbout}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sunt earum, ex harum non ad officiis, aliquid quaerat, culpa iure sint quae dicta dolor fugiat perferendis excepturi consequuntur. Vero, corporis inventore.
                </Text>
            </View>
        
            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image 
                        source={waterdrop}
                        style={styles.tipImage}
                    />

                    <Text style={styles.tipText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>
                </View>

                <Text style={styles.alertLabel}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>

                <Button 
                    title="Cadastrar planta"
                    onPress={() => {}}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape,
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape
    },
    plantName: {
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 15,
    },
    plantAbout: {
        textAlign: 'center',
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 17,
        marginTop: 10
    },
    controller: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: getBottomSpace() || 20
    },
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 60
    },
    tipImage: {
        width: 56,
        height: 56,
    },
    tipText: {
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 17,
        textAlign: 'justify'
    },
    alertLabel: {
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5
    }
})