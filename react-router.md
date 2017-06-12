# React Router 回忆篇

标签（空格分隔）： react react-router

---

```
import react from 'react`
import {Router, Route} from 'react-router'
<Route name='index' path='/'>
    <Route name='home' path='/home'></Router>
</Route>


actionClassname
Link
export default Route
```

`Router` is component.
`hashHistory` is record hash change
`Route` router config, `component path`
`<Link to='path' activeClassName='active'>` 链接组件
`router nested {this.props.children}`
`url params` 通过props.pramas可以取到
`<IndexRoute>` 默认url， 然而在组件中渲染地址的时候还是使用`<Link onlyActiveOnIndex>` 来避免`IndexRoute`始终高亮的问题
`browserHistory` 利用现在浏览器的特性，另url看起来和后端渲染的一致
```
export default React.createClass({

  // ask for `router` from context
  contextTypes: {
    router: React.PropTypes.object
  },
  handleSubmit(event) {
    // ...
    this.context.router.push(path)
  },
})
```
通过上面的方式或者browserHistory.push(path)去手动跳转url

- router config
- IndexRoute/IndexRedirect
- route params
- route nested
- lifecycle
- plain routes
```
<Router history={hashHistory/browserHistory/createMemoryHistory>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <IndexRedirect to='/about'/>
      <Redirect from='about' to='/'/>
      <Route path='terms' component={Terms}>
        <Route path='termOne' component={one}/>
        <Route path='termTwo' component={two}/>
        <Route path='termThree/:id/:username' component={three}/>
      </Route>
    </Route>
</Router>

// 链接写法
<Link activeClassName='active' onlyActiveOnIndex to='' to={{pathname: '/about', query: {foo: 'bar'}}}/>

// plain routes
const routes = {
  path: '',
  childRoutes: [
    aRoute,
    bRoute,
    cRoute
  ]
}

// lifecycle
onEnter(nextState, replace, cb?)
onChange(prevState, nextState, replace, cb?)
onLeave()
```
