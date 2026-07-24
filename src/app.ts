import fastify, { FastifyInstance } from 'fastify';

export function buildApp(): FastifyInstance {
  const app = fastify({ logger: true });

  app.get('/health', async () => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  });

  app.get('/', async () => {
    return { message: 'Hello World', version: '1.0.0' };
  });

  return app;
}

export const app = buildApp();
