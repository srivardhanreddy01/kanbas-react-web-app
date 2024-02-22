import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import "./index_grades.css";
import { FaKeyboard } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.2/css/all.css"
        rel="stylesheet"
      />
      <link
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        rel="stylesheet"
      />

      <div className="col-10 col-sm-10 col-md-10 col-lg-10">
        <div className="row">
          <div className="top-buttons">
            <div className="wd-title" style={{display: "flex", justifyContent: "flex-start"}}>
              <div>
                <p style={{ color: "rgb(172, 23, 23)" }}>
                  Gradebook
                  <FaCaretDown /> <FaKeyboard style={{ marginLeft: "310px" }} />
                </p>
              </div>
              <div style={{marginLeft: "230px"}}>
                <button type="button" className="btn btn-light ms-2">
                  <i className="fa-solid fa-file-import"></i>
                  Import
                </button>
                <button
                  type="button"
                  className="btn btn-light ms-2 dropdown-toggle"
                >
                  <i className="fa-solid fa-file-export"></i>
                  Export
                </button>
                <button type="button" className="btn btn-light ms-2">
                  <i className="fa-solid fa-gear"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <div className="row align-items-center">
              <div className="col-auto">
                <label className="form-check-label">
                  <b>Student Names</b>
                </label>
              </div>
              <div className="col">
                <label
                  className="form-check-label"
                  style={{ marginLeft: "450px" }}
                >
                  <b>Assignment Names</b>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="col">
                  <div className="input-group">
                    <select className="form-select" style={{ width: "260px" }}>
                      <option selected>🔍 Search Students</option>
                      <option>Tony Stark</option>
                      <option>Bruce Wayne</option>
                      <option>Steve Rogers</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="col">
                  <div className="input-group">
                    <select
                      className="form-select"
                      style={{ marginLeft: "80px", width: "450px" }}
                    >
                      <option selected>🔍 Search Assignments</option>
                      <option>Assignment 1</option>
                      <option>Assignment 2</option>
                      <option>Assignment 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <button
              type="button"
              className="btn btn-light mx-2"
              style={{ backgroundColor: "rgba(79, 74, 74, 0.178)" }}
            >
              <i className="fas fa-filter"></i>
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      <div className="table-responsive  ">
        <table
          className="table table-striped table-bordered table-hover"
          // style={{ width: "935px" }}
          style={{width: "1000px", height: "200px"}}
          >
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {es.map((enrollment, index) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td style={{ color: "rgb(227, 41, 41) " }}>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {assignments
                    .filter((assignment) => assignment.course === courseId)
                    .map((assignment) => {
                      const grade = grades.find(
                        (grade) =>
                          grade.student === enrollment.user &&
                          grade.assignment === assignment._id
                      );
                      return <td key={assignment._id}>{grade?.grade || ""}</td>;
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
