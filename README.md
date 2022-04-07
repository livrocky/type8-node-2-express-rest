# type8-node-2-express-rest

## steps

1. git init
2. npm init -y
3. create express app
4. add script "start": "node src/index.js"

## Terms

1. REST -restful state transfer. Standartas kaip aplikacijos bendrauja tarpusavyje.
2. API - application programming interface
3. Resource - informacijos vienetas, grupe. pvz posts, comments, book,
4. Request - siunciama uzklausa is kliento i Node(BE). Gali tureti parametrus ir body.
5. Respnse - musu atsakymas i request'a. Pranesti apie klaida, nustatyti https koda.
6. PORT - http adreso dalis, leidzia atsikrti paleistas aplikacijas. 3000, 3001, 3002, 3003, 5000, 5050, 8000, 8008

## uzklausa

GET https://jsonplaceholder.typicode.com/api/users
GET - http metodas
host - https://jsonplaceholder.typicode.com/
/api/users - endpoint
users - resursas
