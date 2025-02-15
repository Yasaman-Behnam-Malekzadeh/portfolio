import React, { useState } from "react";

function Blog() {
  const [activeTab, setActiveTab] = useState("Health & Fitness");
  return (
    <div className="blog ">
      <div className="blog__nav container p-5">
        <h1 className="mt-5">my blog</h1>
        <ul className="nav nav-tabs p-10">
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "Health & Fitness" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Health & Fitness")}
              href="#"
            >
              Health & Fitness
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "React" ? "active" : ""
              }`}
              onClick={() => setActiveTab("React")}
              href="#"
            >
              React
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "Vue" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Vue")}
              href="#"
            >
              Vue
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "Test" ? "active" : ""}`}
              onClick={() => setActiveTab("Test")}
              href="#"
            >
              Test
            </button>
          </li>
        </ul>
      </div>

      <div className="blog__content container p-5">
        {activeTab==="Health & Fitness" && <div> Health & Fitness</div>}
        {activeTab==="React" && <div> React</div>}
        {activeTab==="Vue" && <div>Vue</div>}
        {activeTab==="Test" && <div> Test</div>}
      </div>
    </div>
  );
}

export default Blog;
