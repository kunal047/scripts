const t2 = [79, 82, 42, 44, 43, 55, 62, 87, 85, 88, 89, 81] // eggs bought by customers day before yesterday
const t1 = [81, 77, 45, 41, 39, 48, 71, 78, 81, 84, 82, 72] // eggs bought by customers yesterday
const t = [77, 53, 33, 32, 49, 53, 68, 71] // eggs bought by customers today till 6 pm

let sum2 = 0, sum1 = 0, sum0 = 0;
let avgt2t1 = 0, avgt1t0 = 0
for (let index = 0; index < 8; index++) {
    sum2 += t2[index];
    sum1 += t1[index];
    sum0 += t[index];

    avgt2t1 += ( t1[index]/t2[index] - 1)*100
    avgt1t0 += (t[index]/t1[index] - 1)*100
    
}


// console.log("Absolute change in the demand from t2 to t1 in 8 hours ", ((sum1-sum2)/sum2)*100 );
console.log("Avg. Per hour change in the demand from t2 to t1 in 8 hours ", avgt2t1/8);

// console.log("Absolute change in the demand from t1 to t in 8 hours ", ((sum0-sum1)/sum1)*100);

console.log("Avg. Per hour change in the demand from t1 to t in 8 hours ", avgt1t0/8);

sum1 = 0, sum2 = 0, avgt2t1 = 0
for (let index = 8; index < 12; index++) {
    sum2 += t2[index];
    sum1 += t1[index];

    avgt2t1 += ( t1[index]/t2[index] - 1)*100 
}

const last4Avg = avgt2t1/4;

for (let index = 8; index < 12; index++) {
    const element = t1[index] + ((t1[index]*last4Avg)/100);
    t.push(Math.floor(element))
}

// console.log("Absolute change in the demand from t2 to t1 in last 4 hours ", ((sum1-sum2)/sum2)*100 );
const orderSum = t.reduce(function(a, b){
    return a + b;
}, 0);

console.log("Order eggs ", orderSum );