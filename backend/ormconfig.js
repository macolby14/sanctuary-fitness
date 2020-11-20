module.exports = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: process.env.NODE_ENV === 'production' ? ['build/entity/**/*.js'] : ['entity/**/*.ts'],
  logging: true,
  synchronize: true,
};
