import React, { ReactElement } from "react";
import { Text } from "react-native";

interface Props {}

export function TestComponent({}: Props): ReactElement {
  return <Text>Hello</Text>;
}
