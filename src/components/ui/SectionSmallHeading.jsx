const SectionSmallHeading = ({ text = "empty text" }) => {
  return (
    <div className="flex items-center pb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="12"
        viewBox="0 0 36 12"
        fill="none"
      >
        <path
          d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM35.7735 6L30 0.226497L24.2265 6L30 11.7735L35.7735 6ZM6 7H30V5H6V7Z"
          fill="#9C7066"
        />
      </svg>
      <p className="text-center text-sm ml-1">{text}</p>
    </div>
  );
};

export default SectionSmallHeading;
