import HeaderNav from './header-nav'
import FooterNav from './footer-nav'

const Layout = ({children}) => {

    return (
            <div className="h-full bg-light mt-3 ">
                <HeaderNav/>
                <div className='m-3'>
                    {children}
                </div>
                <FooterNav />
            </div>
    )
}

export default Layout
