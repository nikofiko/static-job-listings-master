import React from 'react';

const Announcement = ({ job, onTagClick }) => {
  if (!job) {
    return null;
  }

  return (
    <div className="mt-5 bg-white lg:flex justify-between font-league px-7 py-8 shadow-custom max-w-[350px] lg:max-w-none">
      <div className="lg:flex gap-5">
        <div className='pb-6 lg:pb-0'>
          <img src={`/assets/images/${job.logo}`} alt={job.company} />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-3">
            <h3 className="font-semibold text-desaturatedcyan">{job.company}</h3>
            {job.new && (
              <h4 className="bg-desaturatedcyan text-white rounded-full px-2">NEW!</h4>
            )}
            {job.featured && (
              <h4 className="bg-darkgrayish text-white rounded-full px-2">FEATURED</h4>
            )}
          </div>
          <div>
            <h2 className="text-[19px] font-semibold hover:text-desaturatedcyan cursor-pointer">
              {job.position}
            </h2>
          </div>
          <div className="flex text-grayishcyan gap-2.5">
            <h4>{job.postedAt}</h4>
            <p>•</p>
            <h4>{job.contract}</h4>
            <p>•</p>
            <h4>{job.location}</h4>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-4 lg:mt-0 lg:items-center justify-start">
        {[job.role, job.level, ...job.languages, ...job.tools].map((tag, index) => (
          <p
            key={index}
            onClick={() => onTagClick(tag)}
            className="bg-filtercyan px-2.5 py-1 font-semibold text-desaturatedcyan hover:text-white hover:bg-desaturatedcyan cursor-pointer"
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Announcement;