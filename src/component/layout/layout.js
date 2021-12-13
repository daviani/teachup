import HeaderNav from './header-nav'
import FooterNav from './footer-nav'

const Layout = ({ children }) => {

    return (
        <div className="h-full mt-3 ">
            <div className="bg-light">
                <HeaderNav />
            </div>
            <div className="m-3 bg-light">
                {children}
            </div>
            <div className="bg-light" style={{ height: '50px' }}/>
            <div className="bg-light">
                <FooterNav/>
            </div>
        </div>
    )
}

export default Layout
