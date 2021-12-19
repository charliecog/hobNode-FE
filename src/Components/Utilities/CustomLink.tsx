import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <Link
          to={to}
          {...props}
          className={"bg-rose-400 text-white text-lg w-40 flex justify-center p-3 rounded" + (match ? " ring-offset-2 ring-4 ring-yellow-500 after:content-['🍪']" : "")}
        >
          {children}
        </Link>
    );
  }

export default CustomLink