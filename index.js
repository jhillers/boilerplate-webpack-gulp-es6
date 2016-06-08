/**
 * Created by jose.hillers on 06/06/2016.
 */

import * as app from "./src/app.js"

class App {
    constructor() {
        console.log("HELLO Webpack-gulp! from index.js");
        app.init();
    }
}
export default new App();