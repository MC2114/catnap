export class ObjectData{
    dbStore;
    constructor(dbName, dbStore) {
        this.dbName = dbName;
        this.dbStore = dbStore;
    }

    //open database
    async openDatabase() {
        return new Promise((resolve, reject) => {
            const newDBstore = this.dbStore;
            if (this.dbName === "") {
                reject("Database name cannot be empty.");
                return;
            }
            let request = indexedDB.open(this.dbName, 1);
            request.onupgradeneeded = function (event) {
                let db = event.target.result;
                if (!db.objectStoreNames.contains(newDBstore)) {
                db.createObjectStore(newDBstore, { keyPath: "id", autoIncrement:true });
                }
            };
            request.onsuccess = function (event) {
                resolve(event.target.result);
            };
            request.onerror = function (event) {
                reject(event.target.error);
            };
        });
    }

    //add a task to the database
    async addTask(task) {
        const newDBstore = this.dbStore;
        const db = await this.openDatabase();
        return new Promise((resolve, reject) => {
            const tx = db.transaction([newDBstore], "readwrite");
            const store = tx.objectStore(newDBstore);
            const x = store.add(task);
            x.onsuccess = event => {
                return resolve(event.target.result);
            };
            x.onerror = function () {
                reject("Failed to add task.");
            };
        });
    }

    //get all the task from the database
    async getAllTasks() {
        const newDBstore = this.dbStore;
        const db = await this.openDatabase();
        const alltask = db.transaction([newDBstore], "readwrite").objectStore(newDBstore).getAll();
        return new Promise((resolve, reject) => {
            alltask.onsuccess = function() {
                resolve(alltask.result);
            }
            alltask.onerror = function(){
                reject("Method not implemented.");
            }
        });
      }

    //delete a task from the database
    async deleteTask(taskId) {
        const newDBstore = this.dbStore;
        const db = await this.openDatabase();
        const del = db.transaction([newDBstore], "readwrite").objectStore(newDBstore).delete(taskId);
        return new Promise((resolve, reject) => {
          del.onsuccess = function() {
            resolve("Task deleted successfully!");
          }
          del.onerror = function(){
          reject("Method not implemented.");}
        });
    }
}
