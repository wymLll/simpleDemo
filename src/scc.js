var states = [0, 1, 2, 3, 4, 5];
var map = new Map();
// map.set(0, [1,2]);
// map.set(1, [3]);
// map.set(2, [3, 4]);
// map.set(3, [0,5]);
// map.set(4, [5]);
// map.set(5, []);


// map.set(0, [1]);
// map.set(1, [2]);
// map.set(2, [3, 5]);
// map.set(3, [4]);
// map.set(4, [2]);
// map.set(5, [4]);

map.set(0, [1]);
map.set(1, [2]);
map.set(2, [1, 3]);
map.set(3, []);

// 存储每个状态的dfsnum以及current
var dfsnum = [0, 0, 0, 0, 0, 0];
var current = [];

var roots = [];
var count = 0;
var sccs = [];
// function couc() {
//   count = 0;
//   count = couv_dfs(0, count, map);
// }

// couc();

couv_dfs(0, 0);

function couv_dfs(s) {
  count += 1;
  dfsnum[s] = count;

  roots.push(s);
  current[s] = true;

  // console.log("dfsnum: [" + dfsnum +"]");
  // console.log("roots: [" + roots +"]");
  // console.log("current: [" + current +"]");

  var posts = map.get(s);
  // console.log("posts: [" + posts +"]");

  for (let t of posts.values()) {
    if (dfsnum[t] === 0) couv_dfs(t);
    else if (current[t]) {
      for (;;) {
        var u = roots.pop();
        // console.log("u: " + u);
        if (dfsnum[u] <= dfsnum[t]) {
          roots.push(u);
          break;
        }
      }
    }
  }
  // console.log("dfsnum: [" + dfsnum +"]");
  // console.log("roots: ["+ roots +"]");
  var len = roots.length;
  if (roots[len - 1] === s) {
    // console.log("roots remove...");
    roots.pop();
    remove(s);
    // console.log("s: ",s , "current: [" + current +"]");

    var scc = [];
    current.forEach((element, index) => {
      // console.log("ele: ", element, " index",index);
      if(element === false){
        current[index] = undefined;
        scc.push(index);
      }

    });

    sccs.push(scc);
    console.log(scc);
  }
}

function remove(s) {
  // console.log("remove.....", current[s]);
  if (!current[s]) return;
  current[s] = false;
  var posts = map.get(s);

  posts.forEach(element => {
    remove(element);
  });
}


// console.log(!undefined);

// sccs.forEach(ele=>{
//   console.log("sccs: [" + ele +"]");
// })