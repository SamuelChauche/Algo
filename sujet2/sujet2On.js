function countBuildingsWithSunsetView_ON(arr) {
    let maxSoFar = -Infinity;
    let count = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > maxSoFar) {
            count++;
            maxSoFar = arr[i];
        }
    }
    return count;
}
