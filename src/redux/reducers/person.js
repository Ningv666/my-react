/**
 * Reducer会接两个参数，一个是之前的状态，一个是动作对象
 * @param {*} preState 
 * @param {*} action 
 * @returns 
 */

 const initState = [{id:'001',name:'tom',age:18}]
 export default function countReducer(preState = initState, action) {
     // if(preState === undefined) preState = 0
     console.log('action>>>', action);
     const { type, data } = action
     switch (type) {
         case "addperson":
             return [data,...preState];
         default:
             return preState;
     }
 }