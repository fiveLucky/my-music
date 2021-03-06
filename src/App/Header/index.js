import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Icon from '$component/Icon';
import styles from './index.less';
import Item from './Item';
import FixedContent from './FixedContent';

import store from '../store';

@withRouter
@observer
class Header extends Component {
  render() {
    const { subMenus } = store;
    const { location, history } = this.props;
    console.log(history, location);
    return (
      <div className={styles.container}>
        <div className={styles.history}>
          <div className={styles.block}>
            <Icon
              name="left"
              className={styles.icon}
              onClick={history.goBack}
            />
            <Icon
              name="right"
              className={styles.icon}
              onClick={history.goForward}
            />
          </div>
        </div>
        <div className={styles.subMenu}>
          {
            subMenus.map(menu => (
              <Item
                {...menu}
                key={menu.path}
                active={location.pathname === menu.path}
              />
            ))
          }
        </div>
        <FixedContent />
      </div>
    );
  }
}

export default Header;
