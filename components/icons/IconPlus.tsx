const IconPlus = ({
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
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path id="gbs59i2pha" d="M0 0h32v32H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z" />
        <g>
          <mask id="b996tyqt5b" fill="#fff">
            <use xlinkHref="#gbs59i2pha" />
          </mask>
          <path
            d="M17.6 15.2v-7a1.2 1.2 0 0 0-2.4 0v7h-7a1.2 1.2 0 1 0 0 2.4h7v7a1.2 1.2 0 1 0 2.4 0v-7h7a1.2 1.2 0 0 0 0-2.4h-7z"
            fill="#FFF"
            mask="url(#b996tyqt5b)"
          />
        </g>
      </g>
    </svg>
  );
};
export default IconPlus;
