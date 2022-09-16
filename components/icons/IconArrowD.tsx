const IconArrowD = ({
    iWidth,
    iHeight,
    className,
}: {
    iWidth: string | number | undefined;
    iHeight: string | number | undefined;
    className: string
}) => {
    return (
        <svg className={className}
            width={iWidth}
            height={iHeight}
            viewBox={`0 0 ${iWidth} ${iHeight}`} xmlns="http://www.w3.org/2000/svg">
            <path d="M18.267 11.656 12.54 17.38l-5.725-5.725" stroke="#BCC2D6" strokeWidth="1.6" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};
export default IconArrowD;
