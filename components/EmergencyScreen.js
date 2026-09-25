
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";

export default function EmergencyScreen() {
  const [status, setStatus] = useState("Ready");

  const triggerHardwareSOS = async () => {
    setStatus("Sending SOS...");

    try {
      const response = await fetch("http://192.168.4.1/SOS");

      if (response.ok) {
        setStatus("SOS sent! Buzzer activated.");
      } else {
        setStatus("Could not reach NodeMCU.");
      }
    } catch (error) {
      setStatus(
        "Connection failed. Connect your phone to NIRMAAN_SOS Wi-Fi."
      );
    }
  };

  const callEmergency = () => {
    Linking.openURL("tel:112");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.warning}>🚨</Text>

      <Text style={styles.title}>EMERGENCY DETECTED</Text>

      <Text style={styles.message}>
        An emergency event has been detected.
      </Text>

      <View style={styles.card}>
        <Text style={styles.item}>❤️ Heart Rate: 78 BPM</Text>
        <Text style={styles.item}>📍 Location: Available</Text>
        <Text style={styles.item}>🏃 Movement: Abnormal</Text>
      </View>

      <TouchableOpacity
        style={styles.sosButton}
        onPress={triggerHardwareSOS}
      >
        <Text style={styles.buttonText}>ACTIVATE HARDWARE SOS</Text>
      </TouchableOpacity>

      <Text style={styles.status}>{status}</Text>

      <TouchableOpacity
        style={styles.callButton}
        onPress={callEmergency}
      >
        <Text style={styles.buttonText}>
          CALL EMERGENCY SERVICES
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 25,
    paddingTop: 80,
  },

  warning: {
    fontSize: 60,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15,
  },

  message: {
    marginTop: 10,
    textAlign: "center",
  },

  card: {
    width: "100%",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 15,
    marginTop: 30,
  },

  item: {
    fontSize: 17,
    marginBottom: 15,
  },

  sosButton: {
    backgroundColor: "#ff9800",
    padding: 18,
    borderRadius: 12,
    marginTop: 25,
    width: "100%",
    alignItems: "center",
  },

  callButton: {
    backgroundColor: "#d32f2f",
    padding: 18,
    borderRadius: 12,
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  status: {
    marginTop: 15,
    textAlign: "center",
    color: "#333",
  },
});
