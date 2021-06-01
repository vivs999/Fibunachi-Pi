n1 = 0;
n2 = 1;
n3 = 0;

var answer = [];

for (var j = 1; j <= 101; j++){
    answer+=", "+n3;
    n1 = n2;
    n2 = n3;
    n3=n1+n2;
}
document.getElementById("enter").innerHTML = answer;



let i = 1n;
let x = 3n * (10n ** 10020n);
let pi = x;
while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
}
let pi_final = (pi / (10n ** 20n));
document.getElementById("pi").innerHTML = pi_final;