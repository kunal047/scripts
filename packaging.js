const noOfWOrkers = 4
const totalNumberOfItems = 17
const timeTakenForEachWorker = [7, 11, 13, 9]

const minTime = (arr, n, m) => {
    let t = 0;
    while(true) {
        let items = 0;
        for (let index = 0; index < n; index++) {
            items += (Math.floor(t/arr[index]));
        }
        if(items >= m) {
            return t;
        }
        t++;
    }
    return t;
}

const timeTaken = minTime(timeTakenForEachWorker, noOfWOrkers, totalNumberOfItems);
console.log(timeTaken);