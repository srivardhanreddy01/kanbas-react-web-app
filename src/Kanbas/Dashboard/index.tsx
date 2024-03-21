import React , { useState }from "react";
import { Link } from "react-router-dom";
// import { courses } from "../Database";
 
import { FaFilePen } from "react-icons/fa6";

function Dashboard( {
  courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse}: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })


   


  {
    console.log(courses)
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      
      <h2>Published Courses ({courses.length})</h2> <hr />

      <h5>Course</h5>
      <div className="list-group mb-2">
      <div className="list-group-item" style={{"border":"10px"}}>
      <input  
      value={course.name} 
       className="form-control" 
      onChange={(e) => setCourse({ ...course, name: e.target.value })} 
        style={{ marginBottom: "10px" }} 
        />

      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) }
             style={{ marginBottom: "10px" }}  />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }
             style={{ marginBottom: "10px" }} />
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } 
             style={{ marginBottom: "10px" }} />
      <button type="button" className="btn btn-success" style={{"margin":"20px"}}onClick={addNewCourse}  >
        Add

      </button>
      <button  className="btn btn-primary" onClick={updateCourse} >
        Update
      </button>
      </div>
      </div>


      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img
                  src={`/images/${course.image}`}
                  className="card-img-top"
                  style={{ height: 150 }}
                />
                
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                    
                  >
                    
                
              {course.name}{" "}
                  </Link>

                  <p className="card-text">
                  <button onClick={(event) => {
                event.preventDefault();
                setCourse(course);
                 }} className="btn btn-success" style={{    "marginRight": "10px",}} >
                   Edit
                </button>

                    <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} className="btn btn-danger">
                      Delete
              </button>

                    {/* {course.name} */}
                    <br />
                    {course.number}
                    <br />
                    {'Start Date: '+ course.startDate}
                    <br />
                    {'End Date: '+course.endDate}
                    {'524141_1 Spring 2024 Semester Full Term'}
                  </p>

                  <FaFilePen className="wd-icon" />
                </div>
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
