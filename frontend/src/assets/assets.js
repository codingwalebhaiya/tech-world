import frontend from "./frontend.png"
import backend from "./backend.png"
import devops from "./devops.png"
import blockchain from "./blockchain.png"
import dsa from "./dsa.png"
import machineLearning from "./machinelearning.png"



// course categories list -  

export const course_list = [

    {
        course_name: "Frontend Development",
        course_image: frontend,
        
    },
    {
        course_name: "Backend Development",
        course_image: backend,
        
    },
    {
        course_name: " DevOps",
        course_image: devops,
        
    },
    {
        course_name: "Blockchain Development",
        course_image: blockchain,
        
    },
    {
        course_name: "Data Structure Algorithm",
        course_image: dsa,
        
    },
    {
        course_name: "Machine Learning",
        course_image: machineLearning,
       
    }
]



// video course list 

export const video_list = [
  {
    _id: 1,
    name: "React With JavaScript",
    category: "Frontend",
    subcategory: "React",
    url: "https://youtu.be/F627pKNUCVQ?si=PjDKCMDU1kzd2IJ9"
  },
  {
    _id: 2,
    name: "Advanced Angular",
    category: "Frontend",
    subcategory: "Angular",
    url: "https://youtu.be/f7BJFTEbc10?si=xv3m9JRHGJbucGc7"
  },
  {
    _id: 3,
    name: "Vue.js Course",
    category: "Frontend",
    subcategory: "Vue.js",
    url: "https://youtu.be/1GNsWa_EZdw?si=roDeFswgMhZtOo_G"
  },
  {
    _id: 4,
    name: "Node.js & Express.js",
    category: "Backend",
    subcategory: "Node.js",
    url: "https://youtu.be/ekRpc5YgVZU?si=hau8Z-Ifw1aFtXId"
  },
  {
    _id: 5,
    name: "Backend Development with Java",
    category: "Backend",
    subcategory: "Java",
    url: "https://youtu.be/Uh-N_6Lccr4?si=BQHCGvAYCiOPbYsW"
  },
  {
    _id: 6,
    name: "Docker Course",
    category: "DevOps",
    subcategory: "Docker",
    url: "https://youtu.be/OhnTMWmfTBE?si=hrU7qjpAClA8aLQq"
  },
  {
    _id: 7,
    name: "Kubernetes Course",
    category: "DevOps",
    subcategory: "Kubernetes",
    url: "https://youtu.be/rBeyHDKLVqM?si=KWR32NldOBOoQ-IW"
  },
  {
    _id: 8,
    name: "Terraform Course",
    category: "DevOps",
    subcategory: "Terraform",
    url: "https://youtu.be/dX-sbUs9Sk0?si=p_OUpxHJn3KZAD42"
  },
  {
    _id: 9,
    name: "Blockchain Development",
    category: "Blockchain",
    subcategory: "Ethereum",
    url: "https://youtu.be/Wn_Kb3MR_cU?si=IQlBOu7EXR7gwwD2"
  },
  {
    _id: 10,
    name: "Python Full Course",
    category: "Machine Learning",
    subcategory: "Python",
    url: "https://youtu.be/-hh6raHUUvk?si=VLqCtjt0OJT_B7F2"
  },
  {
    _id: 11,
    name: "AWS Course",
    category: "Cloud Engineering",
    subcategory: "AWS",
    url: "https://youtu.be/V04FvpXSFS8?si=0ja-b0tRQBXeR0GI"
  },
  {
    _id: 12,
    name: "React Advanced Course",
    category: "Frontend",
    subcategory: "React",
    url: "https://youtu.be/lAFbKzO-fss?si=2MU3mxRXtDrcEjdp"
  },
  // {
  //   _id: 13,
  //   name: "Angular Course",
  //   category: "Frontend",
  //   subcategory: "Angular",
  //   url: "https://www.example.com/angular-reactive-forms"
  // },
  // {
  //   _id: 14,
  //   name: "Vue.js State Management",
  //   category: "Frontend",
  //   subcategory: "Vue.js",
  //   url: "https://www.example.com/vuejs-state-management"
  // },
  // {
  //   _id: 15,
  //   name: "Express.js and MongoDB",
  //   category: "Backend",
  //   subcategory: "Node.js",
  //   url: "https://www.example.com/expressjs-mongodb"
  // },
  // {
  //   _id: 16,
  //   name: "Spring Boot and Microservices",
  //   category: "Backend",
  //   subcategory: "Java",
  //   url: "https://www.example.com/spring-boot-microservices"
  // },
  // {
  //   _id: 17,
  //   name: "Advanced Docker",
  //   category: "DevOps",
  //   subcategory: "Docker",
  //   url: "https://www.example.com/advanced-docker"
  // },
  // {
  //   _id: 18,
  //   name: "Kubernetes Deep Dive",
  //   category: "DevOps",
  //   subcategory: "Kubernetes",
  //   url: "https://www.example.com/kubernetes-deep-dive"
  // },
  // {
  //   _id: 19,
  //   name: "Terraform for AWS",
  //   category: "DevOps",
  //   subcategory: "Terraform",
  //   url: "https://www.example.com/terraform-aws"
  // },
  // {
  //   _id: 20,
  //   name: "Solidity Smart Contracts",
  //   category: "Blockchain",
  //   subcategory: "Ethereum",
  //   url: "https://www.example.com/solidity-smart-contracts"
  // },
  // {
  //   _id: 21,
  //   name: "Deep Learning with TensorFlow",
  //   category: "Machine Learning",
  //   subcategory: "TensorFlow",
  //   url: "https://www.example.com/deep-learning-tensorflow"
  // },
  // {
  //   _id: 22,
  //   name: "Azure Cloud Engineering",
  //   category: "Cloud Engineering",
  //   subcategory: "Azure",
  //   url: "https://www.example.com/azure-cloud-engineering"
  // },
  // {
  //   _id: 23,
  //   name: "React Hooks in Depth",
  //   category: "Frontend",
  //   subcategory: "React",
  //   url: "https://www.example.com/react-hooks-depth"
  // },
  // {
  //   _id: 24,
  //   name: "Angular Material Design",
  //   category: "Frontend",
  //   subcategory: "Angular",
  //   url: "https://www.example.com/angular-material-design"
  // },
  // {
  //   _id: 25,
  //   name: "Vue.js with TypeScript",
  //   category: "Frontend",
  //   subcategory: "Vue.js",
  //   url: "https://www.example.com/vuejs-typescript"
  // },
  // {
  //   _id: 26,
  //   name: "Node.js Performance Tuning",
  //   category: "Backend",
  //   subcategory: "Node.js",
  //   url: "https://www.example.com/nodejs-performance-tuning"
  // },
  // {
  //   _id: 27,
  //   name: "Java Concurrency",
  //   category: "Backend",
  //   subcategory: "Java",
  //   url: "https://www.example.com/java-concurrency"
  // },
  // {
  //   _id: 28,
  //   name: "CI/CD with Jenkins and Docker",
  //   category: "DevOps",
  //   subcategory: "Docker",
  //   url: "https://www.example.com/cicd"
  // },
  // {
  //   _id: 29,
  //   name: "Power BI with john dev",
  //   category: "Data Science",
  //   subcategory: "Power BI",
  //   url: "https://www.example.com/cicd"
  // },
  // {
  //   _id: 30,
  //   name: "C++ with john dev",
  //   category: "Programming Language",
  //   subcategory: "C++",
  //   url: "https://www.example.com/cicd"
  // },
  // {
  //   _id: 31,
  //   name: "Python with john dev",
  //   category: "Programming Language",
  //   subcategory: "Python",
  //   url: "https://www.example.com/cicd"
  // },
  // {
  //   _id: 32,
  //   name: "Solidity with john dev",
  //   category: "Programming Language",
  //   subcategory: "Solidity",
  //   url: "https://www.example.com/cicd"
  // },
  // {
  //   _id: 33,
  //   name: "Java with john dev",
  //   category: "Programming Language",
  //   subcategory: "Java",
  //   url: "https://www.example.com/cicd"
  // },
  // {
  //   _id: 34,
  //   name: "JavaScript with john dev",
  //   category: "Programming Language",
  //   subcategory: "JavaScript",
  //   url: "https://www.example.com/cicd"
  // },

]