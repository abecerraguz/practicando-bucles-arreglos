var h = [2,4,6,8,10];
for (var i = 0; i < h.length; i++) {
    console.log(i);
    // i = 0
    // 0 < 5
    // 0,1,2,3,4
   
    console.log(h[i]);
    /*
      0,1,2,3,4
      2,4,6,8,10  
    */
}

var j = [2,4,6,8,10];
for (var k = j.length - 1; k > 0; k--) {
    // k = 5 - 1---> 4
    console.log(k);
    // Salida ---> 4,3,2,1

    console.log(j[k]);
    // Salida ----> 10,8,6,4
}

var m = [2,4,6,8,10];
for (var n = 0; n < m.length; n += 2) {
    // n = 0
    // 0 < 5
    // 2 < 5
    // 4 < 5
    console.log(n);
    // 0,2,4
    console.log(m[n]);
    // 2,6,10
}


var p = [-1,0,5,-3,2];
for (var q = 0; q < p.length; q++) {
    // 0 < 5
    // 0,1,2,3,4
    if (p[q] < 0) {
        // p[0]--> -1 Okey
        // p[1]--> 0  No
        // p[2]--> 5  No
        // p[3]--> -3 Okey
        // p[4]--> 2  No
        p[q] = "Dojo";
    }
}
console.log(p);
/*
["Dojo",0,5,"Dojo",2]
*/

var r = [-1,0,5,-3,2];
for (var s = 0; s < r.length; s++) {
    // 0 < 5 
    // s --> 0,1,2,3,4
    if (r[s] > 0) {

        //r[0] ---> -1 > 0 Not
        //r[1] --->  0 > 0 Not
        //r[2] --->  5 > 0 Okey
        //r[3] --->  -3 >0 Not
        //r[4] --->  2 > 0 Okey

        r[s] = r[s] * r[s];
        // r[2] = 25
    }
}
console.log(r);
// [-1,0,25,-3,2]


var t = [];
for (var u = 0; u < 4; u++) {
    // 0 < 4 Okey
    // 0,1,2,3
    t.push(u);
}
console.log(t);
// [0,1,2,3]


var v = [1,2,3,4,5];
for (var w = 0; w < v.length; w++) {
    // 0 < 5
    // 0,1,2,3,4
    v.pop();  
}
console.log(v);
// Array Vacio

function b() {
    console.log('hola');
    return 15;
}
var x = b();
console.log('x es', x);


