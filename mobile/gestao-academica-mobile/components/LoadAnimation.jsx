import React, { useState } from "react";
import { View, Alert, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Componente LoadAnimation
const LoadAnimation = ({ isLoading }) => (
    <SafeAreaView style={[styles.container, styles.horizontal]}>
        {isLoading ? (
            <ActivityIndicator size="large" color="#709BEF" />
        ) : (
            <View />
        )}
    </SafeAreaView>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      },
})

export default LoadAnimation;