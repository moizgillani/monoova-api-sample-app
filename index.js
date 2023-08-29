const { json } = require("body-parser");
const express = require("express");

const {
  ApiError,
  BPAYController,
  Client,
  Environment
} = require("sdksio-monoova-sdk");

// init app
const app = express();
var bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname);

const client = new Client({
  timeout: 0,
  environment: Environment.Environment2,
  basicAuthUserName: "basicAuthUserName",
  basicAuthPassword: "basicAuthPassword",
});

const bPAYController = new BPAYController(client);

/* ################# API ENDPOINTS ###################### */

app.get("/", async (req, res) => {
  res.render('index.html');  
});

app.post("/validate", async (req, res) => {
  try {
    const { result, ...httpResponse } = await bPAYController.bPAYValidate(
      req.body.billerCode,
      req.body.custRef,
      req.body.amount
    );
    res.render('validate',{data:result.validation});
    // Get more response info...
    // const { statusCode, headers } = httpResponse;
  } catch (error) {
    if (error instanceof ApiError) {
      const errors = error.result;
      // const { statusCode, headers } = error;
    }
  } 
});

function getPort() {
  return process.env.PORT || 3000;
}

/* ################# end UTILS ###################### */

// Start server
app.listen(getPort(), () =>
  console.log(`Server started -> http://localhost:${getPort()}`)
);
