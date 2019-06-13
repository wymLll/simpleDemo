
var arr = [{
            id: 1,
            parent: null
        }, {
            id: 2,
            parent: 1
        }, {
            id: 3,
            parent: 2
        }];
var obj = {
    obj: {
        id: 1,
        parent: null,
        child: {
            id: 2,
            parent: 1,
            child: {
                id: 3,
                parent: 2
            }
        }
    }
}