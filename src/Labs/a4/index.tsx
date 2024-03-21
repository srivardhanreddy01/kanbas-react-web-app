import React from "react";
import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
// import EventObject from "./EventObject";
// import Counter from "./Counter";
// import BooleanStateVariables from "./BooleanStateVariables";
// import StringStateVariables from "./StringStateVariables";
// import DateStateVariable from "./DateStateVariable";
// import ObjectStateVariable from "./ObjectStateVariable";
// import ArrayStateVariable from "./ArrayStateVariable";
// import ParentStateComponent from "./ParentStateComponent";
// import ReduxExamples from "./ReduxExamples";
// import TodoList from "./ReduxExamples/todos/TodoList";

function Assignment4() {
  function sayHello() {
    alert("Hello");
  }

    return (
      <div>
       <h2>Assignment 4</h2>
       <ClickEvent/>
       <PassingDataOnEvent/>
       <PassingFunctions theFunction={sayHello} />
       <EventObject />
       <Counter />
       <BooleanStateVariables />
       <StringStateVariables />
       <DateStateVariable />
       <ObjectStateVariable />
       <ArrayStateVariable />
       <ParentStateComponent />
       <ReduxExamples/>
       {/* 
       
       <ArrayStateVariable/>
       <ParentStateComponent/>
       <ReduxExamples/>
       <TodoList/> */}


      </div>
    );
  
  }
  export default Assignment4;
  