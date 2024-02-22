import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoList from './todos/TodoList';
import TodoItem from './todos/TodoItem';

function Assignment3() {
    return (
      <div className="container" style={{marginLeft: "0px"}}
      >
        <h1>Assignment 3</h1>
        <TodoList />
        <hr />
            <TodoItem />
            <hr />
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <PathParameters/>
        <JavaScript/>
        <Add a={3} b={4} />
        <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>

      </div>
    );
  }
  export default Assignment3;
  
  