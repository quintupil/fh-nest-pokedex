<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Ejecutar en desarrollo

1. Clonar el repositorio

```
https://github.com/quintupil/fh-nest-pokedex.git
```

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

5. Clonar el archivo **.env.template** y renombrar copia a **.env**

6. Llenar las variables de entorno definidas en el `.env`

7. Ejecutar la aplicación en dev:

```bash
yarn start:dev
```

8. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/v2/seed
```

## Documentación implementación servicio Pokemon

### Crear recurso pokemon (--no-spec para no incluir test)

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

### Crear recurso seed

```bash
nest g res seed --no-spec
```

### Instalar librería axios

```bash
yarn add axios
```

### Configuracion variables de entorno

```bash
yarn add @nestjs/config
```

### Instalar libreria joi (https://www.npmjs.com/package/joi)

```bash
yarn add joi
```

```bash
npm i joi
```

### Deploy MongoDB Cloud **https://account.mongodb.com/account/login**

(Agregar las IPs de Render en MongoDB Atlas - Network Access > IP Access List)

### Deploy Render Cloud **https://dashboard.render.com/login**

(Agregar variables de entorno y ejecutar)

```
corepack enable;
corepack prepare yarn@4.12.0 --activate;
yarn install --immutable;
yarn build;
```

```
yarn start:prod
```

### Stack usado

- MongoDB
- Nest
