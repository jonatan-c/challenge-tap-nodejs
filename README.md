## Challenge TAP - API REST Backend de un juego de minas


### Rutas disponibles: GET/id y   POST


### Ejecutar APP


Clonar repo 
```
git clone http...
```

Instalar dependencias
```
npm install
```

Crear Base de datos MySQL 
```
CREATE DATABASE game_minas;
```

Crear archivo `.env` en el directorio raiz del proyecto y completar:
```
PORT_SERVER=3000

DB_USERNAME='usario de base de datos'
DB_PASSWORD='password de base de datos'
DB_NAME=game_minas
DB_HOST=localhost
```

Ejecutar para migrar la base de datos:

```
npx sequelize-cli db:migrate
```

Ejecutar
```
npm run dev
```

Para correr test, ejecutar:

```
npm run test
```

Listo para usar!!!

Rutas:


POST --> http://localhost:3000/game
GET --> http://localhost:3000/game/:id
Documentacion SWAGGER -->http://localhost:3000/api/docs
