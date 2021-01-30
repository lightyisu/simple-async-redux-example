# A SIMPLE REDUX ASYNC

简洁的异步Action演示应用

基于Promise构建异步请求

## Available Scripts

**`npm start`**

当调用异步 API 时，有两个非常关键的时刻：发起请求的时刻，和接收到响应的时刻（也可能是超时）。





这两个时刻都可能会更改应用的 state；为此，你需要 dispatch 普通的同步 action。一般情况下，每个 API 请求都需要 dispatch 至少三种 action：

- **一种通知 reducer 请求开始的 action。**

  对于这种 action，reducer 可能会切换一下 state 中的 `isFetching` 标记。以此来告诉 UI 来显示加载界面。

- **一种通知 reducer 请求成功的 action。**

  对于这种 action，reducer 可能会把接收到的新数据合并到 state 中，并重置 `isFetching`。UI 则会隐藏加载界面，并显示接收到的数据。

- **一种通知 reducer 请求失败的 action。**

  对于这种 action，reducer 可能会重置 `isFetching`。另外，有些 reducer 会保存这些失败信息，并在 UI 里显示出来。

  

Action

* 请求开始 requestPosts() => 改变state.isFetching=>改变展示组件
* 请求成功 receivePosts()  => 改变state.isFetching&items=>改变展示组件

容器组件

`VisibleInterface.js`

* ```js
  import { connect } from 'react-redux';
  import Interface from '../interface';
  const mapStateToProps=(state)=>{
      return{
          isFetching:state.isFetching,
          items:state.items
      }
  }
  let VisibleInterface=connect(mapStateToProps)(Interface)
  export default VisibleInterface;
  ```

  