import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  //---- BehaviorSubject--------------//
  // data=new BehaviorSubject([100,14])
  // currentData=this.data.asObservable();
  // changeData(list:any){
  //   this.data.next(list)
  // }

  subject_below

  //---------Subject-----------------//
  hideSubject=new Subject<any>()
  openLogicService=new Subject<any>()
  cartSubject=new Subject<any>();
  

  products=[
    {
      img:"../../../assets/img/java.jpeg",
      name:"JavaFull-Stack",
      description:"Java Full Stack development refers to building both the front-end (client-side) and back-end (server-side) of web applications using Java-based technologies for the back-end and various front-end technologies.",
      off:"50% off",
      oldprice:"4500",
      newprice:"2500",
      id:1
    },
    {
      img:"../../../assets/img/python.jpg",
      name:"PythonFull-Stack",
      description:"Python Full Stack development involves creating both the front-end (client-side) and back-end (server-side) of web applications using Python-based frameworks for the back-end and various front-end technologies.",
      off:"50% off",
      oldprice:"4500",
      newprice:"2500",
      id:2
    },
    {
      img:"../../../assets/img/cloud.jpg",
      name:"Cloud Computing",
      description:"loud computing delivers scalable computing resources and services over the internet, enabling on-demand access to data storage.Cloud computing can also be thought of as utility computing or on-demand computing.",
      off:"50% off",
      oldprice:"4500",
      newprice:"2500",
      id:3
    },
    {
      img:"../../../assets/img/str.jpg",
      name:"Data Structures",
      description:"A data structure is an organized way to store, manage, and retrieve data efficiently for various computational tasks.There are several basic and advanced types of data structures, all designed to arrange data to specific purpose.",
      off:"50% off",
      oldprice:"4500",
      newprice:"2500",
      id:4
    },
    {
      img:"../../../assets/img/data.jpg",
      name:"Data Analysis",
      description:"Data analysis involves examining, cleaning, and transforming raw data to extract valuable insights and support decision-making. It uses statistical methods, algorithms, and visualizations to uncover trends, patterns, and correlations in data.",
      off:"50% off",
      oldprice:"4500",
      newprice:"2500",
      id:5
    },
    {
      img:"../../../assets/img/cyber.jpg",
      name:"Cybersecurity",
      description:"Cybersecurity is the practice of protecting systems, networks, and data from digital attacks, unauthorized access, and damage. It involves implementing technologies, processes, and controls to safeguard information and mitigate the risks.",
      off:"50% off",
      oldprice:"4500",
      newprice:"2500",
      id:6
    },
    {
      img:"../../../assets/img/devops.avif",
      name:"Devops",
      description:"DevOps is a set of practices and tools designed to improve collaboration between development and operations teams, streamline the software development lifecycle, accelerate the delivery of high-quality software and enhance efficiency.",
      off:"50% off",
      oldprice:"4500",
      newprice:"2500",
      id:7
    },
    {
      img:"../../../assets/img/block.png",
      name:"Blockchain Technology",
      description:"Blockchain technology is a decentralized and distributed digital ledger system that securely records transactions across a network of computers, ensuring transparency, immutability, and trust without relying on a central authority, It uses cryptographic techniques",
      off:"50% off",
      oldprice:"4500",
      newprice:"2500",
      id:8
    },
    {
      img:"../../../assets/img/robotics.jpg",
      name:"Introduction to Robotics",
      description:"ntroduction to robotics involves studying the design, construction, and operation of robots. It covers fundamental concepts such as robotics systems, sensors, actuators, and control algorithms, as well as the integration of hardware and software.",
      off:"50% off",
      oldprice:"4500",
      newprice:"2500",
      id:9
    },
    {
      img:"../../../assets/img/fundamentals.jpg",
      name:"Programming fundamentals",
      description:"Programming fundamentals refer to the core concepts and principles that form the basis of writing software. Key components include understanding data types, variables, control structures like loops, and functions or methods for modular coding.",
      off:"50% off",
      oldprice:"4500",
      newprice:"2500",
      id:10
    },
    {
      img:"../../../assets/img/web.jfif",
      name:"Web Development",
      description:"Web development encompasses the creation and maintenance of websites and web applications. It involves both front-end development, which focuses on the design and user interface of a website using HTML, CSS, and JavaScript, back-end development.",
      off:"50% off",
      oldprice:"4500",
      newprice:"2500",
      id:11
    },
    {
      img:"../../../assets/img/machinelearning.jpg",
      name:"Machine Learning",
      description:"Machine learning is a subset of artificial intelligence that involves training algorithms to recognize patterns, make predictions, and improve from experience without being explicitly programmed. It uses statistical techniques to analyze data.",
      off:"50% off",
      oldprice:"4500",
      newprice:"2500",
      id:12
    }
    
  ]
}
