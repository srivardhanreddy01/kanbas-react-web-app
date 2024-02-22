import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
  return (
    <>
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
      <div className="d-flex">
        <div className="col-12 col-sm-8 col-md-10 col-lg-8">
          <ModuleList />
        </div>
        <div className="col-2 col-sm-1 col-md-2 col-lg-2 d-none d-lg-block">
          <div className="course-status ">
            <button type="button" className="btn btn-light mb-1">
              <i className="fa-solid fa-file-import"></i>
              &nbsp;Import Existing Content
            </button>

            <button type="button" className="btn btn-light mb-1">
              <i className="fa-solid fa-cloud-arrow-up"></i>
              &nbsp;Import From Commons
            </button>

            <button type="button" className="btn btn-light mb-1">
              <i className="fa-solid fa-record-vinyl"></i>
              &nbsp;Choose Home Page
            </button>

            <button type="button" className="btn btn-light mb-1">
              <i className="fa-solid fa-chart-simple"></i>
              &nbsp;View Course Stream
            </button>

            <button type="button" className="btn btn-light mb-1">
              <i className="fa-solid fa-bullhorn"></i>
              &nbsp; New Announcement
            </button>

            <button type="button" className="btn btn-light mb-1">
              <i className="fa-solid fa-chart-simple"></i>
              &nbsp;New Analytics
            </button>
            <button type="button" className="btn btn-light mb-1">
              <i className="fa-regular fa-bell"></i>
              &nbsp;View Course Notifications
            </button>

            <p>
              <b>To Do</b>
            </p>
            <hr />
            <a href="javascript:void(0);">
              <i className="fas fa-check-circle"></i>
              <i className="fa-solid fa-1"></i>
              Grade - ANV + HTML
            </a>
            <p>100 points Jan 23 at 11:59pm</p>

            <a href="javascript:void(0);">
              <i className="fas fa-check-circle"></i>
              <i className="fa-solid fa-1"></i>
              Grade - ANV + CSS
            </a>
            <p>100 points Feb 05 at 11:59pm</p>

            <a href="javascript:void(0);">
              <i className="fas fa-check-circle"></i>
              <i className="fa-solid fa-1"></i>
              Grade - ANV + JS
            </a>
            <p>100 points Feb 05 at 11:59pm</p>

            <div className="row">
              <div className="col">
                <p>
                  <b>Coming Up</b>
                </p>
              </div>
              <div className="col">
                <i className="fa-solid fa-calendar-days"></i>
                <a href="javascript:void(0);">View Calendar</a>
              </div>
            </div>

            <hr />
            <ul>
              <li>
                <a href="javascript:void(0);">Lecture</a>
              </li>
              <p>CS5610.12631.202410 Sep 11 at 12:30am</p>
              <li>
                <a href="javascript:void(0);">CS5610 06 SP24 Lecture</a>
              </li>
              <p>CS5610.12631.202410 Sep 11 at 12:30am</p>
              <li>
                <a href="javascript:void(0);">CS5610 Web Development</a>
                <a href="javascript:void(0);">Summer 1 2023 - LECTURE</a>
              </li>
              <p>CS5610.12631.202410 Sep 11 at 12:30am</p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
