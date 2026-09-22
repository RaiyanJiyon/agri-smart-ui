export function Heading({ title, copy }: { title: string; copy?: string }) {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-semibold text-[#132A1D] sm:text-4xl">
        {title}
      </h1>
      {copy && (
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[#68756B]">
          {copy}
        </p>
      )}
    </div>
  );
}
