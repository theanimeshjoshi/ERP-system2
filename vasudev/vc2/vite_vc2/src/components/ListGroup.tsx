import { useState } from "react";



function ListGroup() {
  let list = ["vasu", "john", "giorno", "james", "sura", "mogger"];
  const [SelectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List 123</h1>
      <ul className="list-group">
        {list.map((list,index) => (
          <li
            className={SelectedIndex===index ? "list-group-item active" : "list-group-item "}
            key={list}
            onClick={() => setSelectedIndex(index)}
          >
            {list}
          </li>
        ))}
        ;
      </ul>
    </>
  );
}
export default ListGroup;
