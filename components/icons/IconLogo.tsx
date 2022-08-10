const IconLogo = ({
  iWidth,
  iHeight,
}: {
  iWidth: string | number | undefined;
  iHeight: string | number | undefined;
}) => {
  return (
    <svg
      width={iWidth}
      height={iHeight}
      viewBox={`0 0 ${iWidth} ${iHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#FFF" fillRule="evenodd">
        <path d="M6.125 26.217 0 26.261 4.746 5.109l6.126-.044zM26 14.276l-8.002.052-5.11-9.276L20.89 5zM16.217 26.158l-8.002.052 9.173-9.906 8.002-.052z" />
      </g>
    </svg>
  );
};
export default IconLogo;
