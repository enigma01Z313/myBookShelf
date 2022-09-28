const generateRandom = (numberOnly = false, length = 10) => {
  const charPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const numPool = '0123456789';
  let result = '';
  let poolLength, pool;

  if( numberOnly ) {
    poolLength = numPool.length;
    pool = numPool;
  }else{
    poolLength = charPool.length;
    pool = charPool;
  }
  for (let i = 0; i < length; i++) {
    result += pool.charAt(Math.floor(Math.random() * poolLength));
  }
  
  return result
}

module.exports = generateRandom;