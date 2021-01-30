import { requestPosts,receivePosts } from '../actions/index';
function Interface({dispatch,isFetching,items}) {
    if(isFetching){
        return(
            <h1>loading for the data reaching</h1>
        )
    }
    else{
        return(
            <>
              <button onClick={()=>{
                  getData(dispatch)
              }}>Get the latest data</button>
              <h1>the data we got is:</h1>
              <p>{items}</p>
            </>
          
        )
    }
}
function getData(dispatch) {
    dispatch(requestPosts());
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('20210130')
        }, 4000);
    }).then((res)=>{
        dispatch(receivePosts(res))
    })
    
}
export default Interface;