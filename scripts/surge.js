const { exec, echo } = require("shelljs");
require("./copy-cname");
require("./spa-gh-pages");

exec("surge dist newc.leekhub.com");

echo("Docs deployed!!");
