function getParameterByName(name, url) {
    //console.info(name);
    if (!url) url = window.location.href;
    //url = url.toLowerCase(); // This is just to avoid case sensitiveness  
    //name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function setInputByName(name, value) {
    $(("#"+name)).val(value);
}

function copyfromUrlParameters() {
    let debug = getParameterByName("debug") == "true" ? true : false;
    if (debug) {console.info('copyfromUrlParameters');}
    let url = window.location.href;
    let url_params = url.split("?");
    if (url_params.length == 2){
        // https://www.geeksforgeeks.org/how-to-get-url-parameters-using-javascript
        let params = new URLSearchParams(url_params[1]).entries();
        for (let pair of params) {
            if (debug){
                console.log("Key is: " + pair[0]);
                console.log("Value is: " + pair[1]);
            }
            setInputByName(pair[0], pair[1]);
            
        }
    }else{
        if (debug) {console.info("NO URL PARAMS!!");}
    }
}