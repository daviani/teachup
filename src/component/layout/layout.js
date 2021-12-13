import HeaderNav from './header-nav'
import FooterNav from './footer-nav'

const Layout = ({ children }) => {

    return (
        <div className="h-full mt-3 ">
                <HeaderNav />
            <div className="m-3 ">
                {children}
            </div>
            <div style={{ height: '50px' }}/>
                <FooterNav/>
        </div>
    )
}

export default Layout
