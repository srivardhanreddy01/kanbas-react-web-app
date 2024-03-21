import React, { useState } from "react";
import "./index_list.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { RxDragHandleDots2 } from "react-icons/rx";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  // const [moduleList, setModuleList] = useState(modules);

  // const modulesList = moduleList.filter((module) => module.course === courseId);

  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  ).filter((module) => module.course === courseId);

  const [selectedModule, setSelectedModule] = useState(null);
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  // const [module, setModule] = useState<{
  //   _id: string;
  //   name: string;
  //   description: string;
  //   course: string;
  //   lessons: {
  //     _id: string;
  //     name: string;
  //     description: string;
  //     module: string;
  //   }[];
  // }>({
  //   _id: "0",
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId || "",
  //   lessons: [],
  // });

  const openAlert = () => {
    const modal = document.getElementById("myModal");
    if (modal) modal.style.display = "block";
    dispatch(setModule({
      _id: "0",
      name: "New Module",
      description: "New Description",
      course: "",
      lessons: []
    }))
  };

  const closeAlert = () => {
      const modal = document.getElementById("myModal");
      if (modal) modal.style.display = "none";
  };

  const closeEditAlert = () => {
    const modal = document.getElementById("myEditModal");
    if (modal) modal.style.display = "none";
  };

  // const addModule = (module: any) => {
  //   const newModule = { ...module, _id: new Date().getTime().toString() };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };

  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId
  //   );
  //   setModuleList(newModuleList);
  // };

  const openEditModule = (module: any) => {
    const modal = document.getElementById("myEditModal");
    if (modal) modal.style.display = "block";
    dispatch(setModule(module));
  };
  // const updateModule = (module: any) => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  //   closeEditAlert();
  // };

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
        <div className="top-b123">
          <div className="wd-title12" style={{ marginRight: "30px" }}>
            <div className="d-flex float-end" style={{ width: "600px" }}>
              <button
                type="button"
                className="btn btn-light btn-primary ms-3"
                style={{ width: "400px" }}
              >
                Collapse All
              </button>
              <button
                type="button"
                className="btn btn-light btn-primary ms-3"
                style={{ width: "400px" }}
              >
                View Progress
              </button>
              <button
                type="button"
                className="btn btn-light btn-primary ms-3"
                style={{ width: "400px" }}
              >
                <i
                  className="fas fa-check-circle"
                  style={{ color: "#0daf7e", marginRight: "10px" }}
                ></i>
                Publish All
              </button>
              <button
                type="button"
                className="btn btn-danger ms-3"
                style={{ width: "400px" }}
                onClick={openAlert}
              >
                <i className="fas fa-plus" style={{ marginRight: "10px" }}></i>
                Module
              </button>

              <div id="myModal" className="modal">
                <div
                  className="modal-content"
                  style={{ width: "800px", position: "relative" }}
                >
                  <span className="close" onClick={closeAlert}>
                    &times;
                  </span>
                  <h2>Add Module</h2>
                  <input
                    style={{ marginBottom: "20px" }}
                    value={module.name}
                    placeholder="Module Name"
                    onChange={(e) =>
                      dispatch(
                        setModule({
                          ...module,
                          name: e.target.value,
                        })
                      )
                    }
                  />
                  <textarea
                    value={module.description}
                    placeholder="Module Description"
                    onChange={(e) =>
                      dispatch(
                        setModule({
                          ...module,
                          description: e.target.value,
                        })
                      )
                    }
                  ></textarea>
                  <div>
                    <button
                      className="btn btn-success"
                      // className="btn btn-light btn-primary"
                      // onClick={() => {
                      //   addModule(module);
                      // }}
                      onClick={() => {
                        dispatch(addModule({ ...module, course: courseId }));
                        closeAlert();
                      }}
                    >
                      Add
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ margin: "20px" }}
                      onClick={() => {
                        closeAlert();
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>

              <div id="myEditModal" className="modal">
                <div
                  className="modal-content"
                  style={{ width: "800px", position: "relative" }}
                >
                  <span className="close" onClick={closeEditAlert}>
                    &times;
                  </span>
                  <h2>Edit Module</h2>
                  <input
                    style={{ marginBottom: "20px" }}
                    value={module.name}
                    placeholder="Module Name"
                    onChange={(e) =>
                      dispatch(
                        setModule({
                          ...module,
                          name: e.target.value,
                        })
                      )
                    }
                  />
                  <textarea
                    value={module.description}
                    placeholder="Module Description"
                    onChange={(e) =>
                      dispatch(
                        setModule({
                          ...module,
                          description: e.target.value,
                        })
                      )
                    }
                  ></textarea>
                  <div>
                    {/* <button onClick={() => { addModule(module) }}>Add</button> */}

                    <button
                      className="btn btn-success"
                      // onClick={() => {
                      //   updateModule(module);
                      // }}
                      onClick={() => {
                        dispatch(updateModule(module));
                        closeEditAlert();
                      }}
                    >
                      Update
                    </button>

                    <button
                      className="btn btn-danger"
                      style={{ margin: "20px" }}
                      onClick={() => {
                        closeEditAlert();
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>

              <button type="button" className="btn btn-light ms-3">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <ul className="list-group wd-modules12" style={{ maxWidth: "1150px" }}>
        {moduleList.map((module, index) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module._id)}
            style={{
              marginRight: "12px",
              backgroundColor: "#EAEDED",
              marginBottom: "30px",
            }}
          >
            <button
              className="btn btn-primary"
              style={{ margin: "20px" }}
              onClick={() => openEditModule(module)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteModule(module._id))}
            >
              Delete
            </button>
            <div>
              <i
                className="fa fa-grip-vertical"
                style={{ color: "gray", marginRight: "12px" }}
              ></i>

              {selectedModule === module._id ? (
                <FaCaretDown className="me-2" />
              ) : (
                <FaCaretRight className="me-2" />
              )}
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success-circles" />
                <FaCaretDown />
                <FaPlus className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule === module._id && (
              <ul className="list-group">
                {/* {module.lessons?.map((less=son))} */}
                {module.lessons?.map((lesson: any) => (
                  <li className="list-group-item">
                    <RxDragHandleDots2 />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success-circles" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}{" "}
              </ul>
            )}{" "}
          </li>
        ))}{" "}
      </ul>
    </>
  );
}
export default ModuleList;
