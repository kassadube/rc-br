const dbProd = {
  host: 'localhost',
  port: 28015,
  db: 'bursadb',
};
const dbTest = {
  host: 'localhost',
  port: 28015,
  db: 'bursatestdb',
};
export const db = (process.env.NODE_ENV === 'debug' ? dbTest : dbProd);
export const auth = {
  passwordSalt: process.env.EXPERTS_AUTH_PASSALT ||
  'Gq0twQYeoP6YWZY7iBc!NyhVavauPHB5Q6jPU$LMzCxw@SM&y$udLVnmF0qu!%XR',
  sessionSecret: process.env.EXPERTS_AUTH_SESSECRET ||
  'RGP84d%XZ$tck7TPpQ^zn#7Q$i&duxS2K!8ZR!87!9vJ2yZe@ZFqSMIvdvv4EseS',
  jwtSecret: process.env.EXPERTS_AUTH_JWTSECRET ||
  'uaeldt!2D9iVrOv1KEH#KRuaiEdJty6rRXJij$FN&D$oYKITos14Utok6W0kt83@',
};
