const $get = function(id){
    return document.getElementById(id);
}

const addFunc = function(v1, v2){
    v1 = getNumber(v1);
    v2 = getNumber(v2);
    return v1 + v2;
}
