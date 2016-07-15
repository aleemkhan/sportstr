function sdb(k,v){
    if(typeof(Storage) !== "undefined") {
        localStorage.setItem(k,v);
    } else {
        console.log("No Local Database Support");
    }
}
function gdb(k){
    if(typeof(Storage) !== "undefined") {
        return localStorage.getItem(k);
    } else {
        console.log("No Local Database Support");
    }
}