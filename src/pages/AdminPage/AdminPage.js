import {useState} from 'react';

import {AdminForm, ImageForm} from '../../components';

const AdminPage = () => {
    const [trigger, setTrigger] = useState();

    return (
        <div>
            {!trigger && <AdminForm setTrigger={setTrigger}/>}
            {trigger && <ImageForm/>}
        </div>
    );
};

export {AdminPage};
