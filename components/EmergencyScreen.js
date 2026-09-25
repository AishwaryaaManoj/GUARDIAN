import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking
} from "react-native";

export default function EmergencyScreen() {

  const callEmergency = () => {
    Linking.openURL("tel:112");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.warning}>🚨</Text>

      <Text style={styles.title}>
        EMERGENCY DETECTED
      </Text>

      <Text style={styles.message}>
        An emergency event has been detected.
      </Text>

      <View style={styles.card}>

        <Text style={styles.item}>
          ❤️ Heart Rate: 78 BPM
        </Text>

        <Text style={styles.item}>
          📍 Location: Available
        </Text>

        <Text style={styles.item}>
          🏃 Movement: Abnormal
        </Text>

      </View>

      <TouchableOpacity
        style={styles.callButton}
        onPress={callEmergency}
      >
        <Text style={styles.callText}>
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

  callButton: {
    backgroundColor: "#d32f2f",
    padding: 18,
    borderRadius: 12,
    marginTop: 25,
  },

  callText: {
    color: "white",
    fontWeight: "bold",
  },

});
