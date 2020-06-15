const PORT= Number(process.env.PORT) ||2000;
const JWT_SECRET=process.env.JWT_SECRET||'JWT_SECRET_LOCAL';
const EXPIRES='1h';
const PHOTO_SIZE_LIMIT=1000000;
const PROCESS_ENV_PROD=process.env.NODE_ENV || 'dev';
let DATABASE_URL='';
if(PROCESS_ENV_PROD==='dev'){
    DATABASE_URL='mongodb://localhost:27017/tienda';
}else{
    DATABASE_URL=String(process.env.DATABASE_URL);
}

export{
    PORT,
    DATABASE_URL,
    JWT_SECRET,
    EXPIRES,
    PHOTO_SIZE_LIMIT
}