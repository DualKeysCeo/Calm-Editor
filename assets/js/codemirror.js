var js = CodeMirror(document.getElementById("jsCode"), {
    lineNumbers: true,
    theme: "darcula",
    tabSize: 4,
    indentUnit: 4,
    smartIndent: true,
    lineWrapping: true,
    mode: "javascript"
});

var html = CodeMirror(document.getElementById("htmlCode"), {
    lineNumbers: true,
    theme: "darcula",
    tabSize: 4,
    indentUnit: 4,
    smartIndent: true,
    lineWrapping: true,
    mode: "xml",
    htmlMode: true
});

var css = CodeMirror(document.getElementById("cssCode"), {
    lineNumbers: true,
    theme: "darcula",
    tabSize: 4,
    indentUnit: 4,
    smartIndent: true,
    lineWrapping: true,
    mode: "css"
});

function update() {
    var frame = document.getElementById("out");
    frame = frame.contentWindow || frame.contentDocument.document || frame.contentDocument;
    frame.document.open();
    // draw
    console.log({
        1: html.getValue(),
        2: css.getValue(),
        3: js.getValue()
    })
    frame.document.write(`<style>${css.getValue()}<\/style>${html.getValue()}<script>${js.getValue()}<\/script>`);
    frame.document.close();
}

document.getElementById("jsCode").addEventListener("keyup", update, true);
document.getElementById("cssCode").addEventListener("keyup", update, true);
document.getElementById("htmlCode").addEventListener("keyup", update, true);