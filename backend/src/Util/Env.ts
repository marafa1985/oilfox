const InitEnv = ()=>{
    process.env = {
        "FROM": "'Mahmoud Arafa - MieterEngel coding challenge'",
        "TO": "coding-challenge@mieterengel.de,mahmoud.arafa.1985@gmail.com",//"mahmoud.arafa.1985@gmail.com","coding-challenge@mieterengel.de",
        "SUBJECT": "'Mahmoud Arafa - MieterEngel coding challenge'",
        "MAILACCOUNT": "mahmoud.arafa.testing@gmail.com",
        "MAILPASSWORD": "Abc-123456",
        "NODE_TLS_REJECT_UNAUTHORIZED" :'0'
      };
}

export default InitEnv;