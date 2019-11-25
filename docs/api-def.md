# API Definition

## Admin

### Administrator

```bash
GET /admin/admin/
Obtener lista de administradores
Headers:
{
  "Authorization": <token>
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
  "Authorization": <token>
}

Cuerpo:
{
  "name": string,
  "lastname": string,
  "email": string
}

Respuesta:
{
  "total": number,
  "admins": {"name": string}[]
}

```

```bash
GET /admin/admin/:id
Obtener un administrador específico
Headers:
{
  "Authorization": <token>
}

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
PATCH /admin/admin/:id
Actualiza a un administrador
Headers:
{
  "Authorization": <token>
}

Cuerpo:
{
  "name": string,
  "lastname": string,
  "email": string,
  "status": string
}

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
  "Authorization": <token>
}

Respuesta:
{
  "success": true
}

```

### User

### Place event

### Place event group

### Issue

### Net promoter score

## Client

### Place event

### Issue

### Net promoter score