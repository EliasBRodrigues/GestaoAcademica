import React from "react";
const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div class="flex flex-row gap-2">
          <div class="w-4 h-4 rounded-full bg-[#709BEF] animate-bounce"></div>
          <div class="w-4 h-4 rounded-full bg-[#709BEF] animate-bounce [animation-delay:-.3s]"></div>
          <div class="w-4 h-4 rounded-full bg-[#709BEF] animate-bounce [animation-delay:-.5s]"></div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Loader;
