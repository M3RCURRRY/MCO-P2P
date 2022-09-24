import styles from "./SwitchButton.module.scss";
import { useState, useCallback } from "react";
import styled from "styled-components";

type SwitchButtonProps = {
  onClick: () => void;
  emoji: string[];
};

type SpanProps = {
  isActive: boolean;
  active: string;
  inactive: string;
};

const EmojiSpan = styled.span<SpanProps>`
  &:before {
    content: "${(props) => (props.isActive ? props.active : props.inactive)}";
  }
`;

export default function SwitchButton(props: SwitchButtonProps) {
  const [isChecked, setChecked] = useState(false);

  const checkHandler = (isChecked: boolean) => setChecked(!isChecked);

  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={() => checkHandler(isChecked)}></input>
      <EmojiSpan
        className={styles.slider}
        isActive={isChecked}
        active={props.emoji[1]}
        inactive={props.emoji[0]}
      />
    </label>
  );
}