import { Link, useHistory } from 'react-router-dom';

import { ReactComponent as Leaf } from '../../icons/leaf.svg';
import { ReactComponent as Shopping } from '../../icons/shopping-bag.svg';
import { ReactComponent as User } from '../../icons/user.svg';

const FooterNav = () => {
    let router = useHistory();
    const path = router.location.pathname;

    const items = [
        {
            id: 1,
            name: '/',
            svg: <Leaf/>,
            alt: 'leaf page',
            href: '/',
        },
        {
            id: 2,
            name: '/card',
            svg: <Shopping/>,
            alt: 'shopping page',
            href: 'card',
        },
        {
            id: 3,
            name: '/user',
            svg: <User/>,
            alt: 'user page',
            href: 'user',
        },
    ];

    return (
        <div className='fixed bottom-0 flex flex-row pb-3 pt-3 bg-light w-full'>
            {items.map((item) => {
                const activeItem = path;
                const listOfItem = item.name.toLowerCase();
                const isEqual = (listOfItem === activeItem);
                return (
                    <div key={item.id}
                        className='w-1/3 text-center'>
                        <Link to={item.href}>
                            <div className={`w-8 marginauto rounded-2xl p-1 ${isEqual && 'bg-primary '}`}>
                                {item.svg}
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default FooterNav;
