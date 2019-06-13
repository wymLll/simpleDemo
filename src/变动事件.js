
var EventUntil ={
    addHandler:function(element, type, handler){
        if(element.addEventListener){
            element.addEventListener(type, handler,false);
        }else if(element.attachEvent){
            element.attachEvent('on'+type,handler);
        }else{
            element['on'+type] = handler;
        }
    }
}

EventUntil.addHandler(window,"load",function(event){
    var list = document.getElementById('myList');
    EventUntil.addHandler(document,'DOMSubtreeModified',function(event){
        alert(event.type);
        alert(event.target);
    });

    EventUntil.addHandler(document,'DOMNodeRemoved',function(event){
        alert(event.type);
        alert(event.target);
        alert(event.relatedNode);
    });

    EventUntil.addHandler(document,'DOMNodeRemovedFromDocument',function(event){
        alert(event.type);
        alert(event.target);
    });

    list.parentNode.removeChild(list);
})