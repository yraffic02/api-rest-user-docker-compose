API User test

A API USER é uma API RESTful que permite o acesso a dados sobre usuários.
Endpoints

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ docker-compose up -d
$ npm run dev
```

A API possui os seguintes endpoints disponíveis:
POST /users

Este endpoint permite realizar cadastro de usuários com os envios de dados em JSON. Para realizar um cadastro, é necessário enviar uma requisição POST com os seguintes campos:

    name: string;
    email: string;
    telefone: string;

Este endpoint retorna os usuários cadastrados na API em formato JSON. 

GET /users

```javascript
[
	{
		"id": "97c9d1fb-686f-4540-aef8-46bbb171f491",
		"name": "yuri",
		"email": "email@gmail.com",
		"telefone": "11111111111"
	},
]
```

Este endpoint retorna o usuário cadastrado na API em formato JSON. Através do parametro id enviado na url

GET /users/:id

```javascript
	{
		"id": "97c9d1fb-686f-4540-aef8-46bbb171f491",
		"name": "yuri",
		"email": "email@gmail.com",
		"telefone": "11111111111"
	}
```
