# Client Gateway

Este proyecto es parte de una arquitectura de microservicios desarrollada con NestJS. El cliente gateway actúa como un punto de entrada para interactuar con los servicios relacionados con la gestión de productos.

## Características

- **Microservicios**: Comunicación con otros servicios mediante patrones de mensajería.
- **NestJS**: Framework modular y escalable para Node.js.
- **Gateway**: Punto central para manejar solicitudes de clientes.

## Requisitos

- Node.js v16 o superior
- npm v8 o superior
- Docker (opcional, para contenedores)

## Instalación

1. Clona el repositorio:
  ```bash
  git clone https://github.com/Microservicios-Nest-Nicolas/client-gateway.git
  cd client-gateway
  ```

2. Instala las dependencias:
  ```bash
  npm install
  ```

3. Configura las variables de entorno:
  Crea un archivo `.env` en la raíz del proyecto y define las variables necesarias:
  ```env
  PORT=3000
  SERVICE_URL=http://localhost:4000
  ```

## Uso

1. Inicia el servidor:
  ```bash
  npm run start
  ```

2. Accede al gateway en `http://localhost:3000`.

## Scripts Disponibles

- `npm run start`: Inicia el servidor en modo producción.
- `npm run start:dev`: Inicia el servidor en modo desarrollo.
- `npm run test`: Ejecuta las pruebas unitarias.

## Estructura del Proyecto

```
src/
├── app.module.ts
├── main.ts
├── controllers/
├── services/
└── dtos/
```
