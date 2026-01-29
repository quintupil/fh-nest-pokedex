<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Ejecutar en desarrollo

1. Clonar el repositorio

2. Ejecutar

```bash
yarn install
```

3. Tener Nest CLI instalado

```bash
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```bash
docker-compose up -d
```

## Documentación implementación servicio Pokemon

### Crear recurso (--no-spec para no incluir test)

```bash
nest g res pokemon --no-spec
```

### Instalar libreria para conectar a mongo

```bash
yarn add @nestjs/mongoose mongoose
```

### Instalar libreria de validacion (npm / yarn)

```bash
npm i class-validator class-transformer
```

```bash
yarn add  class-validator class-transformer
```

### Crear Modulo/Pipe

```bash
nest g mo common
```

```bash
nest g pi common/pipes/parseMongoId --no-spec
```

### Ejecutar en desarrollo

```bash
yarn start:dev
```

### Stack usado

- MongoDB
- Nest
