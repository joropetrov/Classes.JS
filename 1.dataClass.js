 newBranch
class HttpRequest{
    
    constructor(method, uri, version, message,response,fulfilled){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let myData = new HttpRequest('GET', 'http://google.com', 'HTTP/1.1', '');

class HttpRequest{
    
    constructor(method, uri, version, message,response,fulfilled){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let myData = new HttpRequest('GET', 'http://google.com', 'HTTP/1.1', '');
 main
console.log(myData);