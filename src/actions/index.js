export function requestPosts(){
    return{
        type:'REQUEST_POSTS'
    }
}
export function receivePosts(items){
    return {
        type:'RECEIVE_POSTS',
        items:items
    }
}
