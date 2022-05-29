import {Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import {AdminPage, ImagePage, NotFoundPage} from './pages';
import {Layout} from './components';

export default function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route index element={<ImagePage/>}/>
                <Route path={'admin'} element={<AdminPage/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>

            </Route>
        </Routes>
    );
}
