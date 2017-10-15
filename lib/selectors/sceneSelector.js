import {createLocation} from 'history';
import SI from 'seamless-immutable';
import {RxSelector} from '@ali/naza-react-starter';

export default class SceneSelector extends RxSelector {
  constructor(initParams, forceKeep) {
    super();
    this.$initParams_ = initParams;
    this.$query_ = SI(initParams);
    this.$forceKeep_ = forceKeep;
  }

  _sync(ownProps) {
    this.$pathname_ = ownProps.location.pathname;

    const newParams = {};
    for (let key in this.$initParams_) {
      if (ownProps.location.query[key] === undefined) {
        newParams[key] = this.$initParams_[key];
      }else{
        newParams[key] = ownProps.location.query[key];
      }
    }
    this.setQuery(newParams);
  }

  setQuery(params) {
    if(params){
      for (let key in this.$query_) {
        if (params[key] !== undefined) {
          let type = typeof(this.$query_[key]);
          if(typeof params[key] === type){
            this.$query_ = this.$query_.set(key, params[key]);
          }else{
            this.$query_ = this.$query_.set(key, new Function('return ' + params[key])());
          }
        }
      }
    }
  }

  getQuery() {
    return this.$query_;
  }

  replace() {
    const breadCrumb = this.getService('breadCrumb');
    breadCrumb && breadCrumb.go(this.$pathname_, this.$query_.asMutable(), true);
  }

  initialize(ownProps, parentSelector) {
    const prevQuery = this.getQuery();
    this._sync(ownProps);
    const nextQuery = this.getQuery();

    let keep = !this.$forceKeep_;
    if(keep){
      for(let key in prevQuery){
        if(prevQuery[key] !== nextQuery[key]){
          keep = false;
          break;
        }
      }
    }

    if(keep){
      this.once('afterInitialize', () => {
        const breadCrumb = this.getService('breadCrumb');
        breadCrumb && breadCrumb.setPrevLocation(ownProps.location);
      });
    }
  }
}
