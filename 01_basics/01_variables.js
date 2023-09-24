const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2;

console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity])

/*
Prefer not to use var
because of issue in block scope and function scope
*/