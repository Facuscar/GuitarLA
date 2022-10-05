module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ccuc91qen0hklj3jjcmg-a.ohio-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_op0d'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'isI2IE5YsCslaTAIlNgfsffL8lcEC3lL'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
