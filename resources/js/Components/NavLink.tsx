import { Link, InertiaLinkProps } from '@inertiajs/react';
import classNames from 'classnames';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={classNames("px-8 font-bold text-sm", { "text-red-500": active }, className)}
        >
            {children}
        </Link>
    );
}
