"use strict";

require("express")()
.use(function (req, res) { res.end("Hello world!\n"); })
.listen(8080, function () { console.log("Listening on port 8080"); })
;
