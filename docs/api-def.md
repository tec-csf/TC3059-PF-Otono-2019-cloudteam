# API Definition

## Admin

### Administrator

```bash
GET /admin/admin/
Obtener lista de administradores
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Respuesta:
{
  "total": number,
  "admins": Object[]
}

```

```bash
POST /admin/admin/
Crea un nuevo administrador
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Cuerpo:
{
  "name": string,
  "lastname": string,
  "email": string
}

Respuesta:
{
  "admin": Object
}

```

```bash
GET /admin/admin/:id
Obtener un administrador específico
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Respuesta:
{admin: {
  "name": string,
  "lastname": string,
  "email": string,
  "registerDate": Date,
  "status": string
}}

```

```bash
PATCH /admin/admin/:id
Actualiza a un administrador
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Cuerpo:
{admin:{
  "name": string,
  "lastname": string,
  "email": string,
  "status": string
}}

Respuesta:
{
  "name": string,
  "lastname": string,
  "email": string,
  "registerDate": Date,
  "status": string
}

```

```bash
DELETE /admin/admin/:id
Elimina un administrador
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Respuesta:
{
  "success": true
}

```

### Usuario

```bash
GET /admin/user/
Obtener lista de usuarios
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Respuesta:
{
  "total": number,
  "users": Object[]
}

```

```bash
POST /admin/user/
Crea un nuevo usuario
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Cuerpo:
{
  "name": string,
  "lastname": string,
  "email": string
}

Respuesta:
{
  "user": Object
}

```

```bash
GET /admin/user/:id
Obtener un usuario específico
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Respuesta:
{user: {
  "name": string,
  "lastname": string,
  "email": string,
  "registerDate": Date,
  "status": string
}}

```

```bash
PATCH /admin/user/:id
Actualiza a un usuario
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Cuerpo:
{user: {
  "name": string,
  "lastname": string,
  "email": string,
  "status": string
}}

Respuesta:
{
  "name": string,
  "lastname": string,
  "email": string,
  "registerDate": Date,
  "status": string
}

```

```bash
DELETE /admin/user/:id
Elimina un usuario
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Respuesta:
{
  "success": true
}

```

### Espacio/Evento

```bash
GET /admin/place-event/
Obtener lista de espacios/eventos
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Respuesta:
{
  "total": number,
  "placeEvents": Object[]
}

```

```bash
POST /admin/place-event/
Crea un nuevo espacio/evento
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Cuerpo:
{
  "name": string,
  "type": string,
}

Respuesta:
{
  "placeEvents": Object
}

```

```bash
GET /admin/place-event/:id
Obtener un espacio/evento específico
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Respuesta:
{placeEvents: {
  "name": string,
  "type": string,
  "registerDate": Date,
  "status": string
}}

```

```bash
PATCH /admin/place-event/:id
Actualiza a un espacio/evento
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Cuerpo:
{placeEvents: {
  "name": string,
  "type": string,
  "registerDate": Date,
  "status": string
}}

Respuesta:
{
  "name": string,
  "lastname": string,
  "email": string,
  "registerDate": Date,
  "status": string
}

```

```bash
DELETE /admin/place-event/:id
Elimina un espacio/evento
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Respuesta:
{
  "success": true
}

```

### Grupo de espacios/eventos

```bash
GET /admin/place-event-group/
Obtener lista de grupo de espacios/eventos
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Respuesta:
{
  "total": number,
  "docs": Object[]
}

```

```bash
POST /admin/place-event-group/
Crea un nuevo grupo de espacio/evento
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Cuerpo:
{
  "name": string,
}

Respuesta:
{
  "item": Object
}

```

```bash
GET /admin/place-event-group/:id
Obtener un grupo de espacio/evento específico
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Respuesta:
{item: {
  "name": string,
  "registerDate": Date,
  "status": string
}}

```

```bash
PATCH /admin/place-event-group/:id
Actualiza a un grupo de espacio/evento
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Cuerpo:
{item: {
  "name": string,
  "status": string
}}

Respuesta:
{
  "name": string,
  "registerDate": Date,
  "status": string
}

```

```bash
DELETE /admin/place-event-group/:id
Elimina un grupo de espacio/evento
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Respuesta:
{
  "success": true
}

```

### Queja

```bash
GET /admin/issue/
Obtener lista de quejas
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Respuesta:
{
  "total": number,
  "issues": Object[]
}

```

```bash
GET /admin/issue/:id
Obtener un grupo de queja específica
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Respuesta:
{issue: {
  "name": string,
  "uId": string,
  "placeEvent": string,
  "description": string,
  "manager": string,
  "registerDate": Date,
  "status": string
}}

```

```bash
PATCH /admin/issue/:id
Actualiza a un grupo de queja
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Cuerpo:
{issue: {
  "status": string
}}

Respuesta:
{
  "name": string,
  "uId": string,
  "placeEvent": string,
  "description": string,
  "manager": string,
  "registerDate": Date,
  "status": string
}

```

### Net promoter score

```bash
GET /admin/issue/
Obtener lista de quejas
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Respuesta:
{
  "total": number,
  "issues": Object[]
}

```

```bash
GET /admin/issue/:id
Obtener un grupo de queja específica
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Respuesta:
{score: {
  "placeEvent": string,
  "scire": number,
  "registerDate": Date,
  "status": string
}}

```

```bash
PATCH /admin/issue/:id
Actualiza a un grupo de queja
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Cuerpo:
{score: {
  "status": string
}}

Respuesta:
{
  "placeEvent": string,
  "scire": number,
  "registerDate": Date,
  "status": string
}

```

## Cliente

### Place event

```bash
GET /client/placeEvent
Obtener lista de espacios y eventos
Headers:
{
  "Content-Type": "application/json"
}

Respuesta:
{
  "placeEventGroups": Object[]
}
```

### Issue

```bash
GET /client/issue
Obtener lista de quejas del cliente
Headers:
{
  "Content-Type": "application/json"
}

Respuesta:
{
  "issues": Object[]
}
```

```bash
POST /client/issue/:uId
Crea una queja del cliente
Headers:
{
  "Authorization": <token>, "Content-Type": "application/json"
}

Cuerpo:
{
  "placeEvent": string,
  "description": string,
}

Respuesta:
{
  "issue": Object
}
```

```bash
GET /client/issue/:id
Obtener una queja del cliente
Headers:
{
  "Content-Type": "application/json"
}

Respuesta:
{
  "issue": Object
}
```

### Net promoter score

```bash
POST /client/score
Crea una net promoter score del cliente
Headers:
{
  "Content-Type": "application/json"
}

Cuerpo:
{
  "placeEvent": string,
  "score": number,
}

Respuesta:
{
  "netPromoterScore": Object
}
```
