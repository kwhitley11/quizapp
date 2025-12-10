import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8">
      <h3 className="text-center">Question Here</h3>
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="h-32 p-4 border-4 border-gray-500 bg-red-100">
          Option 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="h-32 p-4 border-4 border-gray-500 bg-green-100">
          Option 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="h-32 p-4 border-4 border-gray-500 bg-blue-100">
          Option 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="h-32 p-4 border-4 border-gray-500 bg-yellow-100">
          Option 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  );
}
