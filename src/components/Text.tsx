"use client";

export default function TestPage() {
  return (
    <div className="bg-black">
      {[1, 2, 3].map((item, index) => (
        <div
          key={item}
          className="h-screen sticky flex items-center justify-center"
          style={{
            top: `${index * 80}px`,
            zIndex: 3 - index,
          }}
        >
          <div className="w-[80%] h-[70vh] bg-white rounded-3xl shadow-2xl flex items-center justify-center text-5xl font-bold">
            Card {item}
          </div>
        </div>
      ))}
    </div>
  );
}
