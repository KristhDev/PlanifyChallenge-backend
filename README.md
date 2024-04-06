# PlanifyChallenge backend

Está es la API para una prueba técnica de una postulación de trabajo. Este documento explica cómo levantar el proyecto. Puede 
probar el API en el siguiente link: [https://planify-challenge-backend.vercel.app](https://planify-challenge-backend.vercel.app).

## Lenvatar proyecto
Esta API usa json server para crearla, lo único que necesita es el archivo db.json con los datos que se van a consultar.

### Clonar el repositorio
Lo primero que se debe hacer es clonar el repositorio con el siguiente comando:

```bash
git clone https://github.com/KristhDev/PlanifyChallenge-backend.git
```

### Instalar dependecias
Ahora se deben instalar las dependencias del proyecto, haga un ```cd``` al directorio del proyecto y ejecute el siguiente comando:

```bash
pnpm install
```

Como habra notado el proyecto usa pnpm como gestor de dependencias, pero no está obligado a usarlo, puede cambiarlo por yarn o npm.
Solo asegurese de borrar el archivo ```pnpm-lock.yaml```.

### Levantar API
Ya con las dependencias instaladas ejecute el siguiente comando:

```bash
pnpm dev
```

Y listo, la api estará corriendo.
