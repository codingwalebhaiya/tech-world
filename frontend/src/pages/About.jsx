const About = () => {
  return (
    <div className="flex flex-col px-8 bg-slate-200">
      <h2 className="text-center justify-center py-5 font-extrabold">
        About Us
      </h2>
      <div className=" flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="font-medium">Welcome to Tech World</h2>
          <p>
            At Tech World, we are dedicated to providing top-notch, free tech
            education to anyone eager to learn. Our goal is to make advanced
            technology skills accessible to everyone, regardless of their
            financial situation.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="font-medium">Who We Are</h2>
          <p>
            We are a passionate team of developers, educators, and tech
            visionaries committed to democratizing tech education. With
            extensive experience in web development, machine learning, AI, and
            blockchain, we bring real-world knowledge to our courses.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="font-medium">Our Vision</h2>
          <p>
            To create a world where high-quality tech education is freely
            available to everyone, empowering individuals to innovate and
            succeed.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="font-medium">Our Mission</h2>
          <p>
            To provide comprehensive, free courses in the latest tech fields,
            fostering a community of learners who support and inspire each
            other.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="font-medium">Join Us</h2>
          <p>
            Whether you're starting your tech journey or looking to enhance your
            skills, Tech World is here to help you every step of the way.
          </p>
        </div>



      </div>

      <div className=" text-center justify-center  mt-5 mb-5 font-semibold w-[80%]">
        <p >"We believe in the power of free education to transform lives. Thank you for choosing Tech World as your learning partner."</p>
      </div>
    </div>
  );
};

export default About;
