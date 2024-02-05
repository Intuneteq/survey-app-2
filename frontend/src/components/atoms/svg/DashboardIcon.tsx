export default function DashboardIcon({ className, fill }: Svg) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="24" height="24" rx="3" fill={fill} />
            <rect x="5" y="12" width="2.1" height="7" rx="1" fill="white" />
            <rect x="11" y="5" width="2.1" height="14" rx="1" fill="white" />
            <rect x="17" y="10" width="2.1" height="9" rx="1" fill="white" />
        </svg>
    );
}