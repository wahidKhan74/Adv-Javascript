// API Rate Limiter using Closures

function rateLimiter(maxRequests) {
    let requestCount = 0;

    // closure function
    return function() {
        // Validate resetting the count if time window has passed
        if (requestCount < maxRequests) {
            requestCount++;
            return true; // Request allowed
        } else {
            return false; // Request denied
        }
    };
}

// Example usage:
const limiter = rateLimiter(5, 10000); // 5 requests per 10 seconds

// Simulate requests
for (let i = 1; i <= 70; i++) {
    let response = limiter();
    if (response) {
        console.log(`Request ${i}: Allowed`);
    } else {
        console.log(`Request ${i}: Denied - Rate limit exceeded`);
    }
}