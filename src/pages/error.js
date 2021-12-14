import Layout from '../component/layout/layout';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <Layout>
            <div>
                <p>Error</p>
                <Link to='/' className='text-primary font-bold'>Home</Link>
            </div>
        </Layout>
    );
};

export default Error;
