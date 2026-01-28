<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Ejecutar en desarrollo

1. Clonar el repositorio

2. Ejecutar

```bash
$ yarn install
```

```bash
$ yarn start:dev
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Crear un recurso (--no-spec para no incluir test)

```
nest g res pokemon --no-spec
```

5. Levantar la base de datos

```
docker-compose up -d
```

6. Instalar libreria para conectar a mongo

```
yarn add @nestjs/mongoose mongoose
```

7. Instalar libreria de validacion (npm / yarn)

```
npm i class-validator class-transformer
```

```
yarn add  class-validator class-transformer
```

## Stack usado

- MongoDB
- Nest
