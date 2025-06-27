const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="bg-gray-light hover:bg-primary dark:hover:bg-primary mr-3 mb-3 inline-flex items-center justify-center rounded-xs px-4 py-2 text-sm text-black duration-300 hover:text-white dark:bg-[#2C303B] dark:text-white"
    >
      {text}
    </a>
  );
};

export default TagButton;
