import React, { useState } from "react";

const MultiSelectDropdown = () => {
  const options = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions((prev) => [...prev, option]);
    }
    setIsDropdownOpen(false);
  };

  const removeOption = (option) => {
    setSelectedOptions((prev) => prev.filter((item) => item !== option));
  };

  return (
    <div style={{ position: "relative", width: "200px" }}>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "10px",
          cursor: "pointer",
          background: "#fff",
        }}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        {selectedOptions.length === 0
          ? "Select Options"
          : selectedOptions.join(", ")}
      </div>

      {isDropdownOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            right: "0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            background: "#fff",
            zIndex: 10,
            maxHeight: "150px",
            overflowY: "auto",
          }}
        >
          {options
            .filter((option) => !selectedOptions.includes(option))
            .map((option) => (
              <div
                key={option}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid #f1f1f1",
                }}
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
        </div>
      )}

      <div style={{ marginTop: "10px" }}>
        {selectedOptions.map((option) => (
          <div
            key={option}
            style={{
              display: "inline-block",
              padding: "5px 10px",
              margin: "5px",
              background: "#007bff",
              color: "#fff",
              borderRadius: "15px",
              cursor: "pointer",
            }}
            onClick={() => removeOption(option)}
          >
            {option} <span style={{ marginLeft: "5px" }}>×</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
