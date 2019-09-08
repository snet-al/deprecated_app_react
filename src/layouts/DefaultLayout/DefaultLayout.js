import React from 'react';

import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import AsideContainer from '../../containers/AsideContainer/AsideContainer';

function DefaultLayout({ AsideSlot, FooterSlot, children }) {
  return (
    <div className="flex flex-col h-full overflow-auto">
      <HeaderContainer />
      <AsideContainer>{AsideSlot}</AsideContainer>
      <main className="flex-1 pt-24 px-8 pb-8 flex-col">{children}</main>
      <footer>{FooterSlot}</footer>
    </div>
  );
}

export default DefaultLayout;
