const fullURL = location.href;
// output: https://www.devmedia.ir/search?q=book
const fullDomain = location.hostname; // document.domain
// output: www.devmedia.ir
const protocol = location.protocol;
// output: https:
const path = location.pathname;
// output: /search
const queryString = location.search;
// output: ?orderBy=course-title&orderType=asc

const origin = location.origin;
const port = location.port;
const fragment = location.hash.substring(1);

// querystring
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let queryStringValue = params.queryStringKey;

// custom url
const url = "https://www.example.com/blog?search=hello&world";
let domain = new URL(url);

domain = domain.hostname;
// output: www.example.com
const urlDomainName = domain.split(".")[1];
// output: example
const urlPathname = domain.pathname;
// output: /blog
const urlProtocol = domain.protocol;
// output: https
const urlSearch = domain.search;
// output: ?search=hello&world
