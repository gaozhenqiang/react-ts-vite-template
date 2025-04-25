import { RouterProvider } from 'react-router/dom';

import { useLoadingStore } from '@/store';

import router from './router';
import Loading from '@/components/loading';

function App() {
  const { isLoading } = useLoadingStore();
  return (
    <>
      <RouterProvider router={router} />
      {isLoading && <Loading />}
      {/* ...其他需要全局管理的，如Modal弹窗等 */}
    </>
  );
}

export default App;
