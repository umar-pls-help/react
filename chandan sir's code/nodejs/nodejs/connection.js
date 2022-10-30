const sql=require('mssql');

const sqlConfig = {
  user: 'sa',
  password: 'chandan',
  database: 'vcet',
  port:55360, 
  server: '127.0.0.1',

 pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}



var a= async()=>{
try{
var q= await sql.connect(sqlConfig);
const result =await sql.query("select * from inft");
console.log(result.recordsets);
}catch(err)
{console.log(err);
}
}
a();