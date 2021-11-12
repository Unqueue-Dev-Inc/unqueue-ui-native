import React, { ReactElement } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors.js";

const Btn = styled.View`
  background: ${(props) =>
    props.disabled
      ? colors.disabled
      : props.secondary
      ? "transparent"
      : colors.copy};
  border: ${(props) =>
    props.secondary ? `1px solid ${colors.base}` : `1px solid transparent`};
  width: 100%;
  border-radius: 9px;
  height: 49px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;
const Label = styled(Text)`
  color: ${(props) => (props.secondary ? colors.base : "white")};
  font-size: 18px;
  font-weight: 600;
  padding: 0 50px;
`;

interface Props {
  style?: Object;
  buttonStyle?: Object;
  destructive?: boolean;
  clickHandler: () => void;
  disabled?: boolean;
  title: string;
  icon?: string;
  secondary?: boolean;
}

export function Button({
  style,
  buttonStyle,
  clickHandler,
  disabled,
  title,
  icon,
}: Props): ReactElement {
  return (
    <TouchableOpacity
      style={{ ...style, width: "100%" }}
      disabled={disabled}
      onPress={() => {
        // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        clickHandler();
      }}
    >
      <Btn disabled={disabled} style={{ ...buttonStyle }}>
        {icon && <View style={{ position: "absolute", left: 25 }}>{icon}</View>}
        <Label>{title}</Label>
      </Btn>
    </TouchableOpacity>
  );
}
