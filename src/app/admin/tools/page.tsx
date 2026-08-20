import { PdfGenerator } from "@/components/admin/PdfGenerator";

export const metadata = {
  title: "Admin Tools - Eighty-Two Limited",
};

export default function AdminToolsPage() {
  return (
    <main className="min-h-screen pt-[120px] pb-[80px] md:pt-[160px] md:pb-[120px] px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="mb-16">
        <h1 className="text-3xl md:text-5xl font-serif text-white mb-4">
          ADMIN TOOLS
        </h1>
        <p className="text-muted tracking-widest text-xs uppercase max-w-xl leading-relaxed">
          Secure generation utilities and document tools. 
        </p>
      </div>
      
      <div className="border-t border-faint pt-16">
        <h2 className="text-xl text-white font-serif mb-8 flex items-center gap-4">
          <span className="w-4 h-px bg-copper" />
          PDF DOCUMENT GENERATOR
        </h2>
        <PdfGenerator />
      </div>
    </main>
  );
}
