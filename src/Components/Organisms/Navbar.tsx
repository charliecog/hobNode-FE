import CustomLink from "../Utilities/CustomLink";

const Navbar = () => {
    return (
        <nav className="flex items-center bg-slate-900 p-4">
            <div className="w-1/2 flex justify-center items-center">
                <CustomLink to="/">Home</CustomLink>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <CustomLink to="/vote">Vote</CustomLink>
            </div>
        </nav>
    )
}

export default Navbar;