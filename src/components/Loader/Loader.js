import React, { Component } from "react";
import styles from "./Loader.module.css";

export class Loader extends Component {
  render() {
    return (
      <div>
        <div className={styles.ellipse1}></div>
        <div className={styles.ellipse2}></div>
        <div className={styles.ellipse3}></div>
      </div>
    );
  }
}

export default Loader;
