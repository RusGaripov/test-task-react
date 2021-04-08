import React from "react";
import styles from "./UsersList.module.css";
import axios from "axios";
import { Users } from "../Users/Users";
import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";
export default class UsersList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`https://watchlater.cloud.technokratos.com/get/array`)
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
      });
  }

  render() {
    const { persons } = this.state;

    if (persons.length === 0) {
      return (
        <div className={styles.container}>
          <Navbar />
          <Loader />
        </div>
      );
    }

    return (
      <div className={styles.container}>
        <Navbar />
        <div className={styles.list}>
          <Users persons={this.state.persons} />
        </div>
      </div>
    );
  }
}
