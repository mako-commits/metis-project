import React from "react";
import DashNav from "../../components/DashNav";

const History = () => {
  return (
    <>
      <DashNav />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex flex-col items-center justify-center">
              <h1 className="italic text-xl">
                Your name shall be written in the history book
              </h1>
              <p>All you have to do is make a purchase</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default History;
