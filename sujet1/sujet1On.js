function hasPairWithSum_ON(arr, k) {
    const complements = new Set();
    for (const num of arr) {
        if (complements.has(num)) return true;
        complements.add(k - num);
    }
    return false;
}