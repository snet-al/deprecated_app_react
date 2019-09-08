import React from 'react';
import { connect } from 'react-redux';
import { selectDraweIsOpen } from '../../store/reducers/ui';
import { toggleDrawerAction } from '../../store/actions/ui';
import Aside from '../../components/Aside/Aside';

function AsideContainer({ drawerIsOpen, toggleDrawer, children }) {
  return (
    <Aside show={drawerIsOpen} closeDrawer={toggleDrawer} onKe>
      {children}
    </Aside>
  );
}

const mapStateToProps = state => ({
  drawerIsOpen: selectDraweIsOpen(state.ui),
});

const mapDispatchToProps = {
  toggleDrawer: toggleDrawerAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AsideContainer);
