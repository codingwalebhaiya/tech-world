import ReactPlayer from "react-player";
import { video_list } from "../assets/assets.js";
import { useState } from "react";
import ExploreCourses from "@/components/ExploreCourses/ExploreCourses.jsx";

const Courses = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
   const [filteredCategory, setFilteredCategory] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

//   const handleCategoryClick = (category) => {
//    setFilteredCategory(category);
//  };

  const filteredVideos = video_list.filter(video => 
    (filteredCategory ? video.category === filteredCategory : true) &&
    (searchTerm ? video.category.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );





  return (
    <>
       <div>
        <ExploreCourses/>
       </div>

       <div className="container mx-auto px-4 py-8 ">
        <div className="mb-4 ">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by category"
            className="p-2 border border-gray-300 rounded-md w-[70%] items-center relative "
          />
        </div>

     
       



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredVideos.map((video) => (
          <div key={video._id} className="border border-gray-300 p-4 rounded-md transform transition-transform hover:scale-105">
            <h3 className="text-lg font-semibold mb-2">{video.name}</h3>
            <p className="text-sm text-gray-600">Category: {video.category}</p>
            {/* Use ReactPlayer to render the video */}
            <div className="aspect-w-16 aspect-h-9 relative "  style={{ paddingTop: '56.25%' }}>
              <ReactPlayer
                url={video.url}
                controls={true}
                width="100%"
                height="100%"
                className="absolute top-0 left-0"
              />
            </div>
          </div>
        ))}
      </div>
      </div>

    

    </>
    
  );
};

export default Courses
