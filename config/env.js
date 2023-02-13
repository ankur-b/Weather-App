if(process.env.NODE_ENV==="PROD"){
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}