function countBuildingsWithSunsetView_N2(buildings) {
    let count = 0;
    for (let i = 0; i < buildings.length; i++) {
        let hasView = true;
        for (let j = i + 1; j < buildings.length; j++) {
            if (buildings[j] >= buildings[i]) {
                hasView = false;
                break;
            }
        }
        if (hasView) count++;
    }
    return count;
}