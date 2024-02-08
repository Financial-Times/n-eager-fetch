> [!WARNING]<br />
> n-eager-fetch has been deprecated as of **2024-02-08**. It will reach end-of-life on **2024-07-01** at which point no further security patches will be applied. The library will continue to work in currently-supported versions of Node.js but **it should not be used in new projects**.
>
> [Further information is available in this blog post](https://financialtimes.atlassian.net/l/cp/Mde8hutd).

# n-eager-fetch

Extension of fetch which supports passing a `retry` value in to `options`. `retry` should be an integer, `n`, and a fetch will be retried `n` times (i.e. `n + 1` fetches in total) before failing.

Supports an `allowedStatusCodes` value in `options`. This is an array of integers of status codes that if responded with, won't attempt to retry.

Fetches also have a `stopRetrying()` method which will fulfil the promise with the reult of the current in-flight fetch and not send any more requests
