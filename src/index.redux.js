const ADD_GUN = "add";
const REMOVE_GUN = "reduce";
//新建stroe
//通过reducur建立
//根据老的状态(state)和action生产新的状态(state)
export function counter(state = 0, action) {
  switch (action.type) {
    case "add":
      return state + 1
    case "reduce":
      return state - 1
    default:
      return 10
  }
}

//action
export function addGun() {
  return {type: ADD_GUN}
}
export function removeGun() {
  return {type: REMOVE_GUN}
}

// export function addGunAsync() {
//   return function(dispatch) {
//     setTimeout(function() {
//       return dispatch(addGun())
//     }, 2000)
//   }
// }

//es6
export function addGunAsync() {
  return dispatch => {
    setTimeout(() => {
      return dispatch(addGun())
    }, 2000)
  }
}

//新建stroe
//通过reducur建立
//根据老的状态(state)和action生产新的状态(state)
// function counter(state = 0, action) {
//   switch (action.type) {
//     case "add":
//       return state + 1
//     case "reduce":
//       return state - 1
//     default:
//       return 10
//   }
// }
//
// const store = createStore(counter);
//
// const init = store.getState();
// console.log(init);
//
// function listener() {
//   const current = store.getState();
//   console.log(`我是测试数据${current}`);
// }
//
// //监听状态
// store.subscribe(listener);
//
// store.dispatch({type: "add"});
// store.dispatch({type: "add"});
// store.dispatch({type: "reduce"});
