function countBuildingsWithSunsetView_OnePass(buildings) {
    let count = 0;
    let maxHeight = -Infinity;

    for (let i = buildings.length - 1; i >= 0; i--) {
        if (buildings[i] > maxHeight) {
            count++;
            maxHeight = buildings[i];
        }
    }

    return count;
}
