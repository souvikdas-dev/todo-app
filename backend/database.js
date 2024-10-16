import Database from "better-sqlite3";
const db = new Database("db/todo-app.sqlite", { verbose: console.log });
db.pragma("journal_mode = WAL");

// Create the `todos` table if it doesn't exist
db.exec(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      category TEXT,
      completed BOOLEAN DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`);

export default db;
