import Link from "next/link";
import { usePathname } from "next/navigation";
import './Breadcrumb.css';

const Breadcrumb = ({ isDisabled }) => {
    const pathname = usePathname();
    const paths = pathname.split("/").filter(x => x);

    return (
        <div className={`breadcrumb ${isDisabled ? 'disabled' : ''}`}>
            <Link href="/">Home</Link>
            {paths.map((path, index) => {
                const href = `/${paths.slice(0, index + 1).join("/")}`;
                return (
                    <span key={index}>
                        {" > "}
                        {index === paths.length - 1 ? (
                            <span>{path}</span>
                        ) : (
                            <Link href={href}>{path}</Link>
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export default Breadcrumb;
