## Description

Sample implementation of features presented in NestJS [docs](https://docs.nestjs.com/) overview

Nest framework TypeScript starter [repository](https://github.com/nestjs/nest)

#### Services and Controllers
- Implemented a simple `Auth` service with login and signup controllers
- Implemented `Users` service with create, get and find controllers
#### DTO
- Used `class-validator` for schema validation before creating user
#### Guards
- Implemented `authentication.guard` for Users controllers authentication
- Implemented `roles.guard` for Users controllers role authorization
#### Decorators
- Implemented `auth.decorator` to join Authentication e Authorization Guards
##### Interceptors
- Implemented `logger.interceptor` for logging incoming requests and total execution time
- Implemented `timeout.interceptor` for limiting maximum processing time
### Middleware
- Implemented `exception.logger` for catching and logging errors

## Installation

```bash
$ npm install
```
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Credits

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
