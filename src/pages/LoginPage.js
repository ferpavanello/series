import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import FormRow from "../components/FormRow";

export default class LoginPage extends React.Component {
  render() {
    return (
      <View>
        <FormRow>
          <TextInput style={style.input} placeholder="user@mail.com" />
        </FormRow>
        <FormRow>
          <TextInput style={style.input} placeholder="*****" secureTextEntry />
        </FormRow>
      </View>
    );
  }
}

const style = StyleSheet.create({
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5
  }
});
