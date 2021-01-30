function posts(state={isFetching:false,items:[]},action){
    switch(action.type){
        case 'REQUEST_POSTS':
            return Object.assign({},state,{
                isFetching:true
            })
        case 'RECEIVE_POSTS':
            return Object.assign({},state,{
                isFetching:false,
                items:action.items
            })
        default:
            return state
    }
}
export default posts;
//请求reducers