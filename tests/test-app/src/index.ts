import { H2, ox } from "oxidizer";
import App from "./App";

const app = App();

document.body.append(app);

ox('#utils-append-here')(
  H2({id: 'utils-app-subheader'}, 'Utils Subheader')
);