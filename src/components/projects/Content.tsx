import { ReactNode } from "react";

export default function Content({
  children,
  aside,
}: {
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-[18rem_minmax(0,56rem)_18rem] gap-10 mt-6 justify-center">
      <div className="hidden xl:block" aria-hidden />
      <div className="min-w-0 max-w-[1000px]">{children}</div>
      {aside && (
        <aside className="xl:sticky xl:top-36 xl:self-start">{aside}</aside>
      )}
    </div>
  );
}