interface SectionHeaderProps {
  heading?: string;
  description?: string;
  headingCss?: string;
  descriptionCss?: string;
}
const SectionHeader = ({
  heading,
  description,
  headingCss,
  descriptionCss,
}: SectionHeaderProps) => {
  return (
    <div className="">
      {heading && (
        <h2
          className={`${
            headingCss
              ? `${headingCss}`
              : "text-[40px] font-semibold mb-4 leading-[1.5] tracking-[2%] align-middle text-black"
          }`}
        >
          {heading}
        </h2>
      )}

      {description && (
        <p
          className={`${
            descriptionCss
              ? `${descriptionCss}`
              : "text-[18px] leading-[1.5] font-medium tracking-[2%] align-middle text-black"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
