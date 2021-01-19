import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Header(props) {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
    </View>
    );
  }
  const styles = StyleSheet.create({
    header: {
      backgroundColor: "blue",
      width: "100%",
      height: 50,
      justifyContent:"center",
      alignItems:"center",
    },
    title: {
      color: "white",
      fontWeight: "bold",
    },
  });