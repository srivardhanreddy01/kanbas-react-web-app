import React, { useState } from "react";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { courses } from "./Database";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const imageFolder = "../images/";
  const imageFiles = [ "green.png","blue.png", "purple.png", "red.png"];
  const [course, setCourse] = useState<any[]>(courses);
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    console.log(imageFolder + imageFiles[randomIndex]);
    return imageFolder + imageFiles[randomIndex];
  };

  const [coursea, setCoursea] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: getRandomImage(),
  });

  

  const addNewCourse = () => {
    const updatedCourses = [...course, { ...coursea, _id: new Date().getTime().toString() }];
    setCourse(updatedCourses);
  };

  const deleteCourse = (courseId: string) => {
    setCourse(course.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourse(course.map((c) => {
      if (c._id === coursea._id) {
        return coursea;
      } else {
        return c;
      }
    }));
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <div>
          <KanbasNavigation />
        </div>
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={course}
                  course={{ ...coursea, image: getRandomImage() }}
                  setCourse={setCoursea}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                  
                />
              }
            />
            <Route
              path="Courses/*"
              element={
                <Dashboard
                  courses={course}
                  course={{ ...coursea, image: getRandomImage() }}
                  setCourse={setCoursea}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={course} />}
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;
