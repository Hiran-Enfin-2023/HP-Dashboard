const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

// // Replace 'your-database-file.db' with the desired SQLite database file name
// const db = new sqlite3.Database('/home/efin/Code/Hp_dashboard/db/Chatbot.sqlite');

// // Replace 'path/to/your/file.sql' with the actual path to your .sql file
// const sqlFilePath = '/home/efin/Code/Hp_dashboard/db/backup.sql';

// // Read the contents of the .sql file
// const sqlQueries = fs.readFileSync(sqlFilePath, 'utf8');

// // Split the file content into individual queries
// const queries = sqlQueries.split(';').filter(query => query.trim() !== '');

// // Execute each query
// queries.forEach(query => {
//     db.run(query, err => {
//         if (err) {
//             console.error('Error executing query:', err);
//         } else {
//             console.log('Query executed successfully');
//         }
//     });
// });

// // Close the database connection when done
// db.close();


const sqlQueries = fs.readFileSync('/home/efin/Code/Hp_dashboard/db/backup.sql', 'utf8');

// Create an SQLite database in memory
const db = new sqlite3.Database('/home/efin/Code/Hp_dashboard/db/Chatbot.sqlite');

// Execute the SQL queries
db.serialize(() => {
  db.exec(sqlQueries, (err) => {
    if (err) {
      console.error('Error executing SQL queries:', err.message);
    } else {
      console.log('SQL queries executed successfully.');
    }

    // Close the database connection
    db.close();
  });
});