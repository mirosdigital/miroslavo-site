type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
};

export default function Container({
  children,
  className = "",
  wide = false,
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 sm:px-10 lg:px-16 ${wide ? "max-w-[120rem]" : "max-w-6xl"} ${className}`}
    >
      {children}
    </div>
  );
}
