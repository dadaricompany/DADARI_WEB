const IconSearch = ({
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
      <defs>
        <path id="z5rl5doppa" d="M0 0h24v24H0z" />
      </defs>
      <g transform="translate(4 4)" fill="none" fillRule="evenodd">
        <mask id="b5ig7y6jgb" fill="#fff">
          <use xlinkHref="#z5rl5doppa" />
        </mask>
        <path
          d="M17.242 15.544a8.53 8.53 0 0 0 1.736-5.156c0-4.736-3.854-8.589-8.589-8.589C5.653 1.8 1.8 5.653 1.8 10.389c0 4.735 3.853 8.589 8.589 8.589a8.533 8.533 0 0 0 5.156-1.736l4.607 4.607a1.196 1.196 0 0 0 1.697-.001 1.201 1.201 0 0 0 0-1.697l-4.607-4.607zM10.389 4.2a6.195 6.195 0 0 1 6.188 6.188 6.195 6.195 0 0 1-6.188 6.188A6.194 6.194 0 0 1 4.2 10.389 6.196 6.196 0 0 1 10.389 4.2z"
          fill="#FFF"
          mask="url(#b5ig7y6jgb)"
        />
      </g>
    </svg>
  );
};
export default IconSearch;
