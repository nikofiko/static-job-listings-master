import React, { useState, useEffect } from 'react';
import Announcement from './Announcement';
import Header from './Header'; // Dodajemy import Header
import data from '../data.json';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]); // Stan dla filtrów

  useEffect(() => {
    setJobs(data);
  }, []);

  // Funkcja dodająca filtr
  const addFilter = (tag) => {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag]);
    }
  };

  // Funkcja usuwająca filtr
  const removeFilter = (tag) => {
    setFilters(filters.filter((f) => f !== tag));
  };

  // Funkcja czyszcząca wszystkie filtry
  const clearFilters = () => {
    setFilters([]);
  };

  // Filtrowanie ogłoszeń
  const filteredJobs = jobs.filter((job) => {
    const allTags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every((filter) => allTags.includes(filter));
  });

  return (
    <div>
      {/* Przekazujemy filtry i funkcje do Header */}
      <Header filters={filters} removeFilter={removeFilter} clearFilters={clearFilters} />
      <div className="container mx-auto mt-15 lg:block flex flex-col items-center">
        {filteredJobs.map((job) => (
          <Announcement key={job.id} job={job} onTagClick={addFilter} />
        ))}
      </div>
    </div>
  );
};

export default JobList;