import React, { useState } from "react";
import { msToTime } from "../../usefulFunctions/useful";
import styles from "./ModalWindow.module.css";
import logo from "../../images/logo.png";
import { Button, Modal } from "react-bootstrap";

const ModalWindow = (person) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className={styles.leftBlock}
        title="Подробнее... "
        variant="primary"
        style={{}}
        onClick={handleShow}
      >
        <div className={styles.avatar}>
          {/*поставил logo для соблюдения геометрии , так как авы не получаю , когда делаю запрос */}
          <img src={logo} className={styles.avatar__img} alt="avatar" />
        </div>
        <div className={styles.name}>
          <p className={styles.name__text}>
            {person.person.fname} {person.person.name.substr(0, 1) + "."}{" "}
            {person.person.mname.substr(0, 1) + "."}
          </p>
        </div>
        <div className={styles.balance}>
          <p className={styles.balance__text}>
            Баланс: {" " + person.person.balance.toFixed(2)}
          </p>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Данные о пользователе</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <p>
              ФИО : {person.person.fname} {person.person.name}{" "}
              {person.person.mname}{" "}
            </p>
          </div>
          <div className="modal-body">
            <p>Баланс : {person.person.balance.toFixed(2)}</p>
          </div>
          <div className="modal-body">
            <p>
              {"Последнее изменение" +
                " " +
                ":" +
                " " +
                msToTime(Date.now() - Date.parse(person.person.lastUpdatedAt)) +
                " " +
                "назад"}
            </p>
          </div>
          <div className="modal-body">
            {person.person.status === 0 && <p>Cтатус : приостановлена</p>}
            {person.person.status === 1 && <p>Статус : подписка активна</p>}
            {person.person.status === 2 && <p>Статус : заблокирован</p>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalWindow;
