export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span className="flex -space-x-2" aria-hidden="true">
        <span className="pearl-green size-6 rounded-[50%_50%_48%_48%/58%_58%_42%_42%] shadow-sm ring-2 ring-background" />
        <span className="pearl-gold size-6 rounded-[50%_50%_48%_48%/58%_58%_42%_42%] shadow-sm ring-2 ring-background" />
        <span className="pearl-cream size-6 rounded-[50%_50%_48%_48%/58%_58%_42%_42%] shadow-sm ring-2 ring-background" />
      </span>
      <span className="font-serif text-xl font-semibold tracking-tight">
        Little Squish <span className="text-primary">Co.</span>
      </span>
    </span>
  )
}
