export default function SectionSeparator() {
  return (
    <div className="section-breathing relative w-full overflow-hidden pointer-events-none">
      {/* Visual Silence Transition */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
      </div>
      
      {/* Soft Fog Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-wine-cinema/[0.03] blur-[150px]" />
    </div>
  )
}
