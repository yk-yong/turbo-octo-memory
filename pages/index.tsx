import type { NextPage } from 'next';
import { FocusContext, init, useFocusable } from '@noriginmedia/norigin-spatial-navigation';

import Sidebar from '@components/Sidebar/Sidebar.index';
import ContentIndex from '@components/Content/Content.index';

init({
  debug: false,
  visualDebug: false,
});

const Home: NextPage = () => {
  const { ref, focusKey } = useFocusable();

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref}>
        <Sidebar focusKey='MENU' />
        <ContentIndex />
      </div>
    </FocusContext.Provider>
  );
};

export default Home;

export const getServerSideProps = async () => {
  return { props: {} };
};
