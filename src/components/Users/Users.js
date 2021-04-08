import React from "react";
import ModalWindow from "../Modal/ModalWindow";
import styles from "./Users.module.css";
import { msToTime } from "../../usefulFunctions/useful";
import arrow from "../../images/arrow.png";
import logo from "../../images/logo.png";

export const Users = (value) => {
  return (
    <>
      <ul className={styles.container}>
        <div className={styles.auth}>
          <img src={logo} className={styles.auth__logo} alt="logo" />
          <p className={styles.auth__text}>Authorization required</p>
        </div>
        {value.persons.map((person, index) => (
          <li key={index} className={styles.user}>
            <ModalWindow person={person} />
            <div className={styles.rightBlock}>
              <div className={styles.lastUpdatedAt}>
                <p className={styles.lastUpdatedAt__text}>
                  {"Последнее изменение" +
                    ":" +
                    " " +
                    msToTime(Date.now() - Date.parse(person.lastUpdatedAt)) +
                    " " +
                    "назад"}
                </p>
              </div>
              <div className={styles.status}>
                {person.status === 0 && (
                  <select className={styles.selectedStatus}>
                    <option value={"Приостановлена"}>Приостановлена</option>
                    <option>Подписка активна</option>
                    <option>Заблокирован</option>
                  </select>
                )}
                {person.status === 1 && (
                  <select
                    className={styles.selectedStatus}
                    defaultValue={"Подписка активна"}
                  >
                    <option>Приостановлена</option>
                    <option value={"Подписка активна"}>Подписка активна</option>
                    <option>Заблокирован</option>
                  </select>
                )}
                {person.status === 2 && (
                  <select
                    className={styles.selectedStatus}
                    defaultValue={"Заблокирован"}
                  >
                    <option className={styles.ret} value="1">
                      Приостановлена
                    </option>
                    <option className={styles.ret2} value="2">
                      Подписка активна
                    </option>
                    <option className={styles.ret3} value={"Заблокирован"}>
                      Заблокирован
                    </option>
                  </select>
                )}
                <img src={arrow} alt="Arrow" className={styles.arrow} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
