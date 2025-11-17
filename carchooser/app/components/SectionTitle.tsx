export default function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mt-16 mb-10 text-white">
      {children}
    </h2>
  );
}
