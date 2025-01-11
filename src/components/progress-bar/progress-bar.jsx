"use client";

import { useProgress } from "./use-progress";

import styles from "./progress-bar.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";

export const ProgressBar = ({ viewVariant = "default" }) => {
  const progress = useProgress();

  const { value } = useTheme();

  return (
    <div
      className={classNames(styles.progressBar, {
        [styles.default]: viewVariant === "default",
        [styles.colored]: viewVariant === "colored",
        [styles.light]: value === "light",
      })}
      style={{
        width: progress,
      }}
    />
  );
};
