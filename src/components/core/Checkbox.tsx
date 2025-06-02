import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

export interface CheckboxProps {
    label: any,
    selected: any,
    onSelect: (e: any) => any,
    containerStyle?: React.CSSProperties[],
    touchableStyle?: React.CSSProperties[],
};

export const Checkbox = (props: CheckboxProps) => {
    return (
        <View style={props.containerStyle as StyleProp<ViewStyle>}>
            <TouchableOpacity style={[styles.radioButtonArea, props.touchableStyle as StyleProp<ViewStyle>]} onPress={props.onSelect}> 
                <View style={[styles.radioButton, props.selected ? styles.radioButtonSelected : null]}>
                    <View style={[styles.radioButtonInner, props.selected ? styles.radioButtonInnerSelected : null]}></View>
                </View>
                { props.label ?
                    <Text style={[styles.radioButtonText, props.selected ? styles.radioButtonTextSelected : null]}> 
                        {props.label} 
                    </Text> 
                    : null
                }
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({ 
    radioButtonArea: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },
    radioButton: { 
        borderWidth: 2, 
        borderColor: '#d9d9d9',
    }, 
    radioButtonSelected: {
        borderColor: '#368200', 
    },
    radioButtonInner: {
        width: 8,
        height: 8,
        backgroundColor: '#d9d9d9', 
        margin: 3
    },
    radioButtonInnerSelected: {
        backgroundColor: '#368200', 
    },
    radioButtonText: { 
        fontSize: 14, 
    }, 
    radioButtonTextSelected: {
        
    }
}); 
  
