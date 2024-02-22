import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaFilePen } from "react-icons/fa6";
function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h2>Published Courses (12)</h2> <hr />
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
                    {course.name}
                    <br />
                    524141_1 Spring 2024 Semester Full Term
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
