type OtherPagesTitleProps = {
  title: string;
};

export default function OtherPagesTitle({ title }: OtherPagesTitleProps) {
  return (
    <div className="flex flex-row gap-3 items-center">
      <div className="relative flex size-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-20" />
        <span className="relative inline-flex size-3 rounded-full bg-accent-30" />
      </div>
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  );
}
