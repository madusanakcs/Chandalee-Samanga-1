/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorksItems from './WorksItems';

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0); // Track active filter
  const [visibleCount, setVisibleCount] = useState(3); // Initially show 3 items

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
    setVisibleCount(3); // Reset visible count when filter changes
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  const handleViewMore = () => {
    if (visibleCount === 3) {
      setVisibleCount(projects.length); // Show all items
    } else {
      setVisibleCount(3); // Collapse to 3 items
    }
  };

  return (
    <div>
      {/* Filters */}
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? 'active-work' : ''} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      {/* Projects */}
      <div className="work__container container grid">
        {projects.slice(0, visibleCount).map((item) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>

      {/* View More Button */}
{projects.length > 3 && (
  <div className="work__view-more">
    <button className="view-more-button" onClick={handleViewMore}>
      {visibleCount === 3 ? (
        <>
          View More <i className="uil uil-arrow-right"></i>
        </>
      ) : (
        <>
          View Less <i className="uil uil-arrow-left"></i>
        </>
      )}
    </button>
  </div>
)}
    </div>
  );
};

export default Works;
