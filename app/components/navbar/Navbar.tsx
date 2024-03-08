import CardCount from "./CardCount"
import HamburgerMenu from "./HamburgerMenu"
import Logo from "./Logo"
import Search from "./Search"
import User from "./User"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between gap-3 md:gap-10 px-3 md:px:10 h-16 bg-orange-200 text-slate-900">
            <Logo />
            <Search />
            <CardCount />
            <User />
            <HamburgerMenu />
        </div>
    )
}

export default Navbar
