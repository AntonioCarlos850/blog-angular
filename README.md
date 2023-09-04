# Blog

Esse projeto foi feito com [Angular CLI](https://github.com/angular/angular-cli) versão 14.0.0.

Esse projeto foi feito com Node versão 16.14.2.

## Requisitos

Docker ou Node na versão 16.14.2.

##  Rodando a aplicação

### Docker

Execute os seguintes comandos
```
docker compose build
docker compose up -d
```

Após isso você terá um container com a aplicação, acesse ele e execute os comandos a seguir

### Docker e NodeJS

Em um terminal execute
```
cp /usr/app/backend/data.json.example /usr/app/backend/data.json
cd /usr/app/backend && npm start
```

Em outro terminal execute
```
cd /usr/app && npm start
```

## OBS

Foi utilizado nessa aplicação um backend fake, com a ajuda do json-server
