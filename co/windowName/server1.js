let express = require('express');
let app = express();
app.use(express.static(__dirname)); ////设置静态文件目录 项目根目录+/public
app.listen(3000);