module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: process.env.NODE_ENV === 'production' ? ['build/entity/**/*.js'] : ['entity/**/*.ts'],
  logging: true,
  synchronize: true,
};
