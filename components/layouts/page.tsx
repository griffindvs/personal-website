export default function PageLayout({ children, title }: any) {
  const pageClass = title + ' container mx-auto max-w-5xl px-2 sm:px-6 lg:px-8';

  return (
    <>
      <div className={pageClass}>
        <main className="max-w-prose">{children}</main>
      </div>
    </>
  );
}
