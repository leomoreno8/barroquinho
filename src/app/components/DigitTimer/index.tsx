"use client";

import styles from "../../home.module.scss";

type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  compactDays?: boolean;
};

const two = (n: number) => n.toString().padStart(2, "0");

function toDigits(str: string) {
  return str.split("");
}

export default function DigitTimer({
  days, hours, minutes, seconds, compactDays = true,
}: Props) {
  const dayStr = compactDays ? String(days).padStart(3, "0") : String(days);
  const hrsStr = two(hours);
  const minStr = two(minutes);
  const secStr = two(seconds);

  return (
    <div className={styles.bar} aria-label="Tempo desde abertura">
      <div className={styles.group}>
        {toDigits(dayStr).map((d, i) => (
          <span className={styles.tile} key={`d-${i}`}>
            <span className={styles.face}>{d}</span>
          </span>
        ))}
        <span className={styles.label}>dias</span>
      </div>

      <div className={styles.group}>
        {toDigits(hrsStr).map((d, i) => (
          <span className={styles.tile} key={`h-${i}`}>
            <span className={styles.face}>{d}</span>
          </span>
        ))}
        <span className={styles.label}>horas</span>
      </div>

      <div className={styles.group}>
        {toDigits(minStr).map((d, i) => (
          <span className={styles.tile} key={`m-${i}`}>
            <span className={styles.face}>{d}</span>
          </span>
        ))}
        <span className={styles.label}>minutos</span>
      </div>

      <div className={styles.group}>
        {toDigits(secStr).map((d, i) => (
          <span className={styles.tile} key={`s-${i}`}>
            <span className={styles.face}>{d}</span>
          </span>
        ))}
        <span className={styles.label}>segundos</span>
      </div>
    </div>
  );
}
