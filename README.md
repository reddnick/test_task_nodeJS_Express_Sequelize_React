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


Screenshots: 

![alt tag](http://i.piccy.info/i9/0047148e9cd41c4279de910b9c58f854/1582027112/122223/1363141/screenshot_1267.jpg)
![alt tag](http://i.piccy.info/i9/88a5cf983bfc02dfea576c5ed689b473/1582027143/98542/1363141/screenshot_1268.jpg)
![alt tag](http://i.piccy.info/i9/5791d1c7f39310e3d5f0bfa19e46ffc4/1582027178/56336/1363141/screenshot_1269.jpg)
