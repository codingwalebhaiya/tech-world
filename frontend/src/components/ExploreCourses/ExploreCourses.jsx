
// import { course_list } from "@/assets/assets.js";

const ExploreCourses = ( ) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold font-serif text-center mb-6">Explore our courses</h1>
      <p className="text-center max-w-3xl mx-auto mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
      </p>



      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {course_list.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-md cursor-pointer transform transition-transform hover:scale-105"
           
          >
            <img
              src={item.course_image}
              alt={item.course_name}
              className="rounded-md mb-2"
            />
            <p className="text-lg font-semibold text-center">{item.course_name}</p>
          </div>
        ))}
      </div> */}


    </div>
  );
};


export default ExploreCourses;
