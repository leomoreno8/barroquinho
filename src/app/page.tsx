"use client"

import Image from "next/image";
import styles from "./home.module.scss";
import { doneItems, openTasks } from "./tasks";
import { useEffect, useState } from "react";
import DigitTimer from "./components/DigitTimer";
import { FaSquareCheck } from "react-icons/fa6";

function formatElapsed(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function Home() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 1000); // tick de 1s
    return () => clearInterval(i);
  }, []);

  const ultimoIndice = openTasks.length - 1;
  const ultimaPendencia = openTasks[ultimoIndice];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <Image src={"/barroquinho.png"} alt="Barroquinho" width={1024} height={1536} className={styles.barroquinho} />
          <Image src={"/lavida.png"} alt="La vida" width={1024} height={1536} className={styles.lavida} />
        </div>
        <div className={styles.cardBox}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h1>Pendências</h1>
              <div className={styles.boxHeader}>
                <p>
                  {ultimaPendencia.id}
                </p>
                <p>Atrasadas</p>
              </div>
            </div>
            <div className={styles.pendencias}>
              {openTasks.map((task) => {
                const opened = new Date(task.openedAt).getTime();
                const { days, hours, minutes, seconds } = formatElapsed(now - opened);
                
                return (
                  <li key={task.id} className={styles.item}>
                    <div className={styles.meta}>
                      <div className={styles.titleHeader}>
                        <h3 className={styles.title}>{task.title}</h3>
                        <h4>Atrasada</h4>
                      </div>
                      <p className={styles.caption}>
                        Estamos há <strong>{days}</strong> {days === 1 ? "dia" : "dias"} aguardando
                      </p>
                    </div>
                    
                    <DigitTimer
                      days={days}
                      hours={hours}
                      minutes={minutes}
                      seconds={seconds}
                    />
                  </li>
                );
              })}
            </div>
          </div>
          <div className={styles.card}>
            <h1>Tarefas concluídas</h1>
            <div className={styles.pendencias}>
              {doneItems.map((task) => {
                return (
                  <li key={task.id} className={styles.item}>
                    <div className={styles.meta}>
                      <h3 className={styles.title}>{task.title}</h3>
                      <p className={styles.caption}>
                        {task.description}
                      </p>
                    </div>

                    <div className={styles.counterDone} aria-label="Tempo desde abertura">
                      <div className={styles.captionDone}>
                        <FaSquareCheck />
                        <p>Concluída!</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
