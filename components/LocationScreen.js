import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LocationScreen() {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Live Location</Text>

      <View style={styles.card}>

        <Text style={styles.label}>GPS Status</Text>
        <Text style={styles.connected}>● Connected</Text>

        <Text style={styles.label}>Latitude</Text>
        <Text style={styles.value}>12.9716</Text>

        <Text style={styles.label}>Longitude</Text>
        <Text style={styles.value}>77.5946</Text>

        <Text style={styles.info}>
          Location received from GPS module.
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 25,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 15,
  },

  label: {
    fontSize: 14,
    marginTop: 15,
  },

  value: {
    fontSize: 20,
    fontWeight: "bold",
  },

  connected: {
    fontSize: 18,
    fontWeight: "bold",
  },

  info: {
    marginTop: 25,
  },

});
