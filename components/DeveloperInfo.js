import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeveloperInfo = () => {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.title}>Shevchenko Daryna IPZ-20-3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5
    }
});

export default DeveloperInfo;