import { observable, action, computed } from 'mobx';
import history from '$config/history';
import menuTree from './model';


class Store {
  @observable activedMenuKey = history.location.pathname;

  @observable menuTree = [];


  @action.bound
  setStore(value = {}) {
    Object.assign(this, value);
  }

  fetchMenuTree = () => {
    setTimeout(() => {
      this.setStore({ menuTree });
    }, 500);
  }

  @computed get subMenus() {
    let arr = [];
    Object.keys(this.menuTree).some(key => this.menuTree[key].menus.some((menu) => {
      if (menu.path === this.activedMenuKey) {
        arr = menu.subMenus;
        return true;
      }
      return false;
    }));
    return arr;
  }
}

export default new Store();
