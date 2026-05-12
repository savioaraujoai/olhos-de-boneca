export default function SectionSeparator() {
  return (
    <div className="w-full flex justify-center items-center py-12 md:py-16 bg-deep-black opacity-80">
      <div className="w-[30%] max-w-[250px] h-px bg-gradient-to-r from-transparent to-champagne/40" />
      <div className="w-1.5 h-1.5 rounded-full bg-champagne/60 mx-4 shadow-[0_0_8px_rgba(235,213,186,0.4)]" />
      <div className="w-[30%] max-w-[250px] h-px bg-gradient-to-l from-transparent to-champagne/40" />
    </div>
  )
}
