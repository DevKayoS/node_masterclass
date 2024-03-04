import fastfy from 'fastify'
import { memoriesRoutes } from './routes/memories'

const app = fastfy()

app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('👨‍💻 HTTP server running on http://localhost:3333')
  })
