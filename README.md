# NodeJS_Express_Sequelize_React_test_task
How to run:

Backend:
1. Make sure you have installed npx(need to run sequelize migration)
2. npm install
3. Start mysql server
4. Check .env file to change settings database
5. npm run initdb(or manual: "npx sequelize db:create test_task", "npx sequelize db:migrate") 
6. npm start

Frontend:

In new terminal:

7. cd client && npm install && npm start

If your server port is not 2000, change proxy address on client in package.json

Default address 

for Frontend: http://localhost:3000/

for Backend: http://localhost:2000/api/items
