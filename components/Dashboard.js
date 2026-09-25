import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default function Dashboard({ onEmergency }) {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>NIRMAAN</Text>

      <Text style={styles.subtitle}>
        Safety & Emergency Monitoring
      </Text>

      <View style={styles.statusBox}>
        <Text style={styles.statusTitle}>SYSTEM STATUS</Text>
        <Text style={styles.safe}>● SAFE</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>❤️ Heart Rate</Text>
        <Text style={styles.value}>78 BPM</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🏃 Movement</Text>
        <Text style={styles.value}>Normal</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📡 Device</Text>
        <Text style={styles.value}>Connected</Text>
      </View>

      <TouchableOpacity
        style={styles.sosButton}
        onPress={onEmergency}
      >
        <Text style={styles.sosText}>SOS</Text>
        <Text style={styles.sosSubText}>
          Emergency
        </Text>
      </TouchableOpacity>

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
    fontSize: 32,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 15,
    marginBottom: 25,
  },

  statusBox: {
    backgroundColor: "#e8f5e9",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  statusTitle: {
    fontSize: 14,
  },

  safe: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 5,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 16,
  },

  value: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },

  sosButton: {
    marginTop: 20,
    backgroundColor: "#d32f2f",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
  },

  sosText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },

  sosSubText: {
    color: "white",
  },

});
