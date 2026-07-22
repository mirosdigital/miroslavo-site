type BlogPostBodyProps = {
  html: string;
};

export default function BlogPostBody({ html }: BlogPostBodyProps) {
  if (!html.trim()) {
    return null;
  }

  return (
    <div
      className="wp-content mt-10 max-w-none text-base font-light leading-[1.85] text-muted"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
