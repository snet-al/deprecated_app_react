import React from 'react';
import { connect } from 'react-redux';
import { toggleDrawerAction } from '../../store/actions/ui';
import Header from '../../components/Header/Header';
import PrimaryButton from '../../components/buttons/PrimaryButton';

function HeaderContainer({ toggleDrawer }) {
  return (
    <Header>
      <div className="mr-auto p-4">Logo</div>
      <div>
        <PrimaryButton xl actionBtn icon="Layout" onClick={toggleDrawer} />
      </div>
    </Header>
  );
}

const mapDispatchToProps = {
  toggleDrawer: toggleDrawerAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(HeaderContainer);
