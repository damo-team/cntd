import {createLocation} from 'history';
import {Component} from 'react';
import {Link} from 'react-router';

class BLink extends Component{
  render(){
    const props = this.props;
    if(Object(props.to) === props.to){
      props.to.query = Object.assign(props.to.query || {}, BreadCrumb.query);
    }else{
      props.query = Object.assign(props.query || {}, BreadCrumb.query);
    }
    return (<Link {...props} />);
  }
}
// see:
// https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md
export default class BreadCrumb {
  static Link = BLink;

  static query = {};
  /**
   * 这里的参数不能为混淆处理
   * see: http://blog.csdn.net/raphealguo/article/details/26075943
   */
  static $inject = ['router'];

  constructor(router) {
    this.$router_ = router;
  }

  setPrevLocation(location) {
    location.query = Object.assign(location.query || {}, BreadCrumb.query);
    this.$prevLocation_ = location;
  }

  canGoBack(location) {
    if (Object(location) === location) {
      return false;
    } else {
      return this.$prevLocation_ && this
        .$prevLocation_
        .pathname
        .indexOf(location) > -1;
    }
  }

  goBack(location, query) {
    if (this.canGoBack(location)) {
      this
        .$router_
        .replace(this.$prevLocation_);
    } else {
      this.go(location, query);
    }
  }

  go(location, query, isUpdate) {
    if (typeof location === 'string') {
      location = createLocation(location);
    }
    query = Object.assign(query || {}, BreadCrumb.query);
    location.query = query;
    if(isUpdate){
      this.$prevLocation_ = location;
    }
    this
      .$router_
      .replace(location);
  }

  link(location, query) {
    if (typeof location === 'string') {
      location = createLocation(location);
    }
    query = Object.assign(query || {}, BreadCrumb.query);
    location.query = query;
    this
      .$router_
      .push(location);
  }
}
