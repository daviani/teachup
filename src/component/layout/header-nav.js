import { useHistory, Link } from 'react-router-dom';
import { ReactComponent as Chevron } from '../../icons/navChevron.svg';

const HeaderNav = () => {
    let router = useHistory();
    const path = router.location.pathname;

    let title = 'Discovers';

    if (path !== '/') {
        title = router.location.pathname;
    }

    return (
        <div className='m-3'>
            {path === '/'
                ?
                <h1 className='font-bold text-t-primary'>
                    {title}
                </h1>
                :
                <Link to='/'>
                    <div className='flex'>
                        <div className='h-6'>
                            <Chevron/>
                        </div>
                        <h1 className='font-bold text-t-primary ml-2 '>
                            {title.substr(1)}
                        </h1>
                    </div>
                </Link>
            }
        </div>
    );
};

export default HeaderNav;
