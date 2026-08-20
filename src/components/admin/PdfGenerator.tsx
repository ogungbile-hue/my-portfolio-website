"use client";

import React, { useState, useRef } from 'react';
import { EightyTwoBadge } from '@/components/ui/EightyTwoBadge';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export function PdfGenerator() {
  const [text, setText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const pdfContentRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (!pdfContentRef.current) return;
    setIsGenerating(true);
    
    try {
      await document.fonts.ready;
      
      const element = pdfContentRef.current;
      
      const canvas = await html2canvas(element, {
        scale: 2, 
        useCORS: true,
        backgroundColor: '#141c2e', 
        logging: false,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
        letterRendering: true
      } as any);
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width / 2, canvas.height / 2]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save('EightyTwo_Document.pdf');
    } catch (error) {
      console.error("Error generating PDF", error);
      alert("Failed to generate PDF. Check console for details.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 max-w-2xl w-full">
      <div className="flex flex-col gap-4">
        <label className="text-sm tracking-widest text-muted uppercase">Document Text</label>
        <textarea 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type your document text here..."
          className="w-full h-64 bg-[#0a0f1c] border border-faint p-4 text-white text-sm focus:border-copper outline-none transition-colors resize-y font-light leading-relaxed"
        />
      </div>
      
      <button 
        onClick={handleGenerate}
        disabled={isGenerating || !text.trim()}
        className="btn-main self-start disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? "GENERATING PDF..." : "GENERATE PDF DOCUMENT"}
      </button>

      {/* Hidden PDF Canvas Container - Rendered offscreen */}
      <div className="absolute left-[-9999px] top-[-9999px]">
        <div 
          ref={pdfContentRef}
          className="bg-[#141c2e] text-white p-16 flex flex-col relative overflow-hidden z-0"
          style={{ 
            width: '794px', 
            minHeight: '1123px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontVariantLigatures: 'none',
            textRendering: 'optimizeSpeed',
            letterSpacing: '0px',
            fontKerning: 'none',
            wordSpacing: '0px'
          }} 
        >
          {/* WATERMARK */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none z-0">
            <EightyTwoBadge size={650} isStatic={true} />
          </div>

          {/* Header with Logo */}
          <div className="flex justify-between items-center border-b border-faint pb-8 mb-12 relative z-10">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-copper uppercase" style={{ fontFamily: 'Arial, sans-serif' }}>Official Document</span>
              <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>Eighty-Two Limited</span>
            </div>
            {/* Use static badge to ensure html2canvas captures it perfectly without mid-animation frame issues */}
            <EightyTwoBadge size={100} isStatic={true} />
          </div>
          
          {/* Body Text */}
          <div 
            className="text-base leading-[2] text-[#b4c5e5] whitespace-pre-wrap flex-grow relative z-10"
            style={{ wordBreak: 'break-word', fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            {text}
          </div>
          
          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-faint flex justify-between items-center relative z-10">
            <EightyTwoBadge size={40} isStatic={true} />
            <span className="text-[10px] text-muted" style={{ fontFamily: 'Arial, sans-serif' }}>{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
