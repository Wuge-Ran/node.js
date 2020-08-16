function route(pathname,handle) {
    console.log("About to route a request for " + pathname);
    let fn = handle[pathname];
    if(typeof fn === 'function'){
        fn();
    }else{
        console.log("No request handler found for " + pathname);
    }
}

exports.route = route;
  