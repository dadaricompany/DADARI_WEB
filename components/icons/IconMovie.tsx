const IconMovie = ({
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
      <g fill="none" fillRule="evenodd">
        <path
          d="M9.607 0a9.607 9.607 0 1 1 0 19.213A9.607 9.607 0 0 1 9.607 0zM6.084 10.887a2.242 2.242 0 1 0 0 4.483 2.242 2.242 0 0 0 0-4.483zm7.045 0a2.242 2.242 0 1 0 0 4.483 2.242 2.242 0 0 0 0-4.483zM9.607 8.326a1.28 1.28 0 1 0 0 2.561 1.28 1.28 0 0 0 0-2.561zM6.084 3.843a2.242 2.242 0 1 0 0 4.483 2.242 2.242 0 0 0 0-4.483zm7.045 0a2.242 2.242 0 1 0 0 4.483 2.242 2.242 0 0 0 0-4.483z"
          fill="#FFF"
        />
        <path
          d="M14.235 15.84c1.408 2.688 3.33 3.388 5.765 2.098"
          stroke="#FFF"
          strokeWidth="2.2"
        />
      </g>
    </svg>
  );
};
export default IconMovie;
