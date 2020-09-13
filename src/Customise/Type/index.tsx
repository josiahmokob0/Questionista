import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Input, AutoComplete } from "antd";
import Utils from "../../utils/js";
import "./index.css";

const Type = () => {
  const typeOptions = [
    { name: "multiple", id: 1 },
    { name: "boolean", id: 2 },
  ];
  const data = Utils.format(typeOptions, "Type");
  const [type, setType] = useState("");

  const onChange = () => {
    setType(type);
  };

  const selectType = () => {
    return type;
  };

  return (
    <main className="content">
      <h2 className="content-title">Customise your questions</h2>

      <div className="content-form">
        <label htmlFor="type" className="content-label">
          Select <strong> type </strong> of questions
        </label>
        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          options={data}
          onChange={onChange}
          id="type"
        >
          <Input.Search size="large" placeholder="Select Type" />
        </AutoComplete>
      </div>
      <div className="content-btn__container">
        <div className="content-next">
          <Link to={{ pathname: "/topic" }} className="btn btn-ghost">
            Previous
          </Link>
        </div>
        <div className="content-next">
          <Link
            to={{ pathname: "/level" }}
            onClick={selectType}
            className="btn btn-ghost"
          >
            Next
          </Link>
        </div>
      </div>
    </main>
  );
};

export default withRouter(Type);