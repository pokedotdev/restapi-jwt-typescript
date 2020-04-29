export default {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
  DB: {
    URI: process.env.MONGODB_URI || 'mongodb://localhost/jwttutorial',
    USER: process.env.MONGODB_USER || '',
    PASSWORD: process.env.MONGODB_PASSWORD || '',
  },
};
