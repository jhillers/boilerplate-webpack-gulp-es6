/**
 * Created by jose.hillers on 06/06/2016.
 */

  export function init () {
        var header = document.createElement("H1");
        var text = document.createTextNode("Webpack, gulp & es6 Boilerplate.");
        header.appendChild(text);

        var checkBox = document.createElement("DIV");
        checkBox.className = "checkBox";

        document.body.appendChild(header);
        document.body.appendChild(checkBox);
    }