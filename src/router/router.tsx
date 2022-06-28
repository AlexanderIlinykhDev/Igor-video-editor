import { Route, Routes, HashRouter } from 'react-router-dom';
import Layout from '../components/layout';
import Step1 from '../pages/step-1';
import EmaleChosing from '../pages/emale-chosing';
import Step2 from '../pages/step-2';
import Finish from '../pages/finish';
import FilenamesSetting from '../pages/filenames-setting';
import Step from '../pages/step';
import UserInfo from '../pages/user-info';
import { GeneralInfo } from '../pages/general-info';

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<EmaleChosing />} />
          <Route path='general-info' element={<GeneralInfo />} />
          <Route path='/filenames-setting' element={<FilenamesSetting />} />
          <Route path='step-:id' element={<Step />} />
          <Route path='/step-1' element={<Step1 />} />
          <Route path='/step-2' element={<Step2 />} />
          <Route path='/finish' element={<Finish />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Router;
