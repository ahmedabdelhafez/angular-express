import * as path from "path";
import * as express from "express";
import * as http from "http";
import * as socketIo from "socket.io";
import * as morgan from "morgan";
import * as dotenv from "dotenv";
import * as cors from "cors";
import * as helmet from "helmet";
import * as mongoose from "mongoose";
import * as bodyparser from "body-parser";
import * as passport from "passport";
import { passportconfig } from "./security/passport";
import { mainRouter } from "./routes/mainroute";
import { socketEvents } from "./chat_events/socket_events";
//  < ################################################### > //

dotenv.config();

// << get express instance >> //
(async () => {
  const app = express();
  const defaultPort = 8000;
  await mongoose
    .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((conn) => {
      console.log("mongodb connected well");
    })
    .catch((err) => {
      console.log("an error while connect to mongodb");
    });

  app.use(cors());
  app.use(helmet());
  app.disable("x-powered-by");
  app.use(morgan("dev"));
  app.use(bodyparser.json());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(mainRouter);
  // << create the server for socket io >> //
  const server = http.createServer(app);
  // << socket io instance >> //
  const io = socketIo(server);
  http.globalAgent.maxSockets = 4;
  // << use sockwt events module >> //
  socketEvents(io);
  // << load angular app index.html file >> //
  let currdir = __dirname;
  let workDir = currdir.substr(0, currdir.lastIndexOf("\\"));
  app.use(express.static(path.join(workDir)));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(workDir, "index.html"));
  });

  // Start the app by listening on the default Heroku port
  await server.listen(process.env.PORT || defaultPort, () => {
    console.log(path.join(workDir, "index.html"));

    console.log(
      "app run well ya man on port: " + process.env.port || defaultPort
    );
  });
})();
