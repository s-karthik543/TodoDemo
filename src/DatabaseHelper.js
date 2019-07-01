import SQLite from 'react-native-sqlite-2';

const db = SQLite.openDatabase('test.db', '1.0', '', 1);

export const initDatabase = () => {
    db.transaction(function (txn) {
        txn.executeSql('CREATE TABLE IF NOT EXISTS TODO(user_id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30), description VARCHAR(100), timestamp INTEGER, status VARCHAR(100))', []);
    });
}

export const getAllTodos = () => new Promise((resolve, reject) => {

    db.transaction(function (txn) {
        txn.executeSql('SELECT * FROM `TODO`', [], function (tx, res) {
            resolve(res.rows._array);
        });
    });
})

export const updateTodoStatus = (status, id) => new Promise((resolve, reject) => {

    db.transaction(function (txn) {
        txn.executeSql(`UPDATE TODO SET STATUS=? where user_id=?`, [status, id])
        resolve()
    });
})

export const addTodoToDB = (name, description, status, timeStamp) => new Promise((resolve, reject) => {

    db.transaction(function (txn) {
        txn.executeSql('INSERT INTO TODO (name,description, timestamp, status) VALUES (?,?,?, ?)',
            [name, description, timeStamp, status])
        resolve()
    });
})

export const deleteTodoFromDB = (id) => new Promise((resolve, reject) => {

    db.transaction(function (txn) {
        txn.executeSql('DELETE FROM TODO where user_id=?',
            [id])
        resolve()
    });
})