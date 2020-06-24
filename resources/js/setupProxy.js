const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        proxy("/users-details",{
            target:"http://localhost/baba_sales-master/baba_sales-master/api",
            changeOrigin:true
        })
    );
};