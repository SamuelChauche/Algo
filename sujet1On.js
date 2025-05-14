function hasPairWithSum_OnePass(arr, k) {
    const seen = new Set();
    for (const num of arr) {
        if (seen.has(k - num)) return true;
        seen.add(num);
    }
    return false;
}
