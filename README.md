# Client Gateway

Este proyecto es parte de una arquitectura de microservicios desarrollada con NestJS. El gateway es el punto de comunicación entre nuestros clientes y nuestros servicios. Es el encargado de recibir las peticiones, enviarlas a los servicios correspondientes y devolver la respuesta al cliente.

## Características

- **Microservicios**: Comunicación con otros servicios mediante patrones de mensajería.
- **NestJS**: Framework modular y escalable para Node.js.
- **Gateway**: Punto central para manejar solicitudes de clientes.

## Requisitos

- Node.js v16 o superior
- npm v8 o superior
- Docker (opcional, para contenedores)

## Dev

1. Clonar el repositorio
2. Instalar dependencias
3. Crear un archivo `.env` basado en el `env.template`
4. Tener levantados los microservicios que se van a consumir
5. Levantar proyecto con `npm run start:dev`

# Nats

- Mediante docker levantamos Nats con el siguiente comando:
`docker run -d --name nats-server -p 4222:4222 -p 6222:6222 -p 8222:8222 nats`
