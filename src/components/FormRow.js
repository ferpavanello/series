import React from "react";
import { StyleSheet, View } from "react-native";

const FormRow = props => {
  const { children } = props;
  return <View style={style.container}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 5,
    elevation: 1
  }
});

export default FormRow;
