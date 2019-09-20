const users = [{
  "id": "101",
  "name": "Stefan",
  "email": "az@gmail.com",
  "age": 27
}, {
  "id": "102",
  "name": "ivan",
  "email": "ti@gmail.com",
  "age": 22
}, {
  "id": "103",
  "name": "Gosho",
  "email": "toi@gmail.com",
  "age": 23
}]

const posts = [{
  "id": "1",
  "title": "Title 1",
  "body": "Az sum body 1",
  "published": true,
  "author": "101"
}, {
  "id": "2",
  "title": "Title 2",
  "body": "Az sum body 2",
  "published": false,
  "author": "101"
}, {
  "id": "3",
  "title": "Title 3",
  "body": "Az sum body 3",
  "published": false,
  "author": "102"
}]

const comments = [{
  "id": "1001",
  "text": "This is comment 1",
  "author": "101",
  "post": "1"
}, {
  "id": "1002",
  "text": "This is comment 2",
  "author": "102",
  "post": "2"
}, {
  "id": "1003",
  "text": "This is comment 3",
  "author": "101",
  "post": "1"
}, {
  "id": "1004",
  "text": "This is comment 4",
  "author": "101",
  "post": "1"
}]

const db = {
    users,
    posts,
    comments
}

export { db as default }