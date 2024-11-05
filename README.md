# Proyecto de API en ExpressJS con MySQL en Docker

Este proyecto es una API sencilla construida en **ExpressJS** que se conecta a una base de datos en **MySQL**. Ambos servicios (API y base de datos) se ejecutan en contenedores Docker independientes y se comunican entre sí a través de una red Docker definida en `docker-compose.yml`.

## Requisitos

- Tener **Docker** y **Docker Compose** instalados en tu máquina.

## Estructura del Proyecto

La estructura de carpetas y archivos en el repositorio es la siguiente:

├── .gitignore 

├── Dockerfile 

├── app.js 

├── docker-compose.yml 

├── package.json 

└── package-lock.json


## Instrucciones de Instalación

Sigue los pasos a continuación para clonar el repositorio y ejecutar el proyecto en contenedores Docker.

### 1. Clonar el repositorio

Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/mr-zero-03/politecnico-integracion-continua.git
cd politecnico-integracion-continua 
```

### 2. Construir los contenedores

Para construir los contenedores, ejecuta el siguiente comando en la raíz del proyecto:

```bash
docker-compose build
```

### 3. Ejecutar el proyecto

Para levantar los contenedores en segundo plano, utiliza:

```bash
docker-compose up -d
```

#### Esto iniciará ambos contenedores:

- MySQL en el puerto 3306
- ExpressJS API en el puerto 3000

### 4. Acceder a la API
Puedes acceder a la API en tu navegador o herramienta de pruebas (como Postman) en la siguiente URL:

```bash
http://localhost:3000/
```



### Archivos Clave
- Dockerfile: Define la imagen del contenedor de la API en ExpressJS.

- docker-compose.yml: Configura y gestiona los contenedores de MySQL y ExpressJS, permitiendo que se comuniquen entre ellos.

- app.js: Contiene el código de la API en ExpressJS, incluyendo la configuración de conexión a la base de datos MySQL.

