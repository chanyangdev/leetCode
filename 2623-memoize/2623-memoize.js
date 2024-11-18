/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // create an empty object to store previously computed results
    const cache = {};

    return function(...args) {
    // convert arguments into a string to use as a key for the cache object
    const key = JSON.stringify(args);
    // check if key already exists in the cache object. if it does, return cache value
    if (key in cache) {
        return cache[key];
    }
    // if the key doesn't exist in the cache, call the original function fn using apply() to pass the arguments and store the sresult in the cache object using the key as the property name
    const result = fn.apply(this, args);
    cache[key] = result;
// return computed result
    return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */