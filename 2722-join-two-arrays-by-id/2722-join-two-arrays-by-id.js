/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    var obj = {}
    for(a of arr1) {obj[a.id] = a;}
    for(b of arr2) {
        if (obj[b.id]){
            for(const key in b) obj[b.id][key] = b[key];
        } else { obj[b.id]= b;}
    }
    return Object.values(obj);
};