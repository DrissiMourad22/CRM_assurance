 import React from 'react';

const SourceList = ({ sources,deleteSource, viewSource }) => {
  return (
    <div className="w-full flex flex-col">
      {sources.map((source, index) => (
        <div key={index} className="source-item">
          {/* Display source details */}
          <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-[60px] gap-[10px]">
            <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/eye.svg"
                onClick={() => viewSource(viewSource)}
              />
            </div>
            <div className="h-[30px] rounded-lg bg-others-blue hidden flex-row items-center justify-center py-2.5 px-[7px] box-border">
              <img className="h-4 w-4 relative" alt="" />
            </div>
            <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
              <img
                className="h-4 w-4 relative"
                alt=""
                src="/trash.svg"
                onClick={() => deleteSource(deleteSource)} 
              />
            </div>
          </div>
          <div className="self-stretch h-px bg-greyscale-200" />
        </div>
      ))}
    </div>
  );
};

export default SourceList;
