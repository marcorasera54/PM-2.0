"use client";

export default function WhiteboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center">
      <div className="w-full h-full overflow-hidden overflow-y-auto">{children}</div>
    </div>
  );
}
