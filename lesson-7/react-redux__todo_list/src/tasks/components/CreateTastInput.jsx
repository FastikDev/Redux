import React, { useState } from 'react';

const CreateTaskInput = ({ onCreate }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleTaskCreate = () => {
    if (!value.trim()) {
      return;
    }

    onCreate(value);
    setValue('');
  };

  return (
    <div className="create-task">
      <input type="text" value={value} className="create-task__input" onChange={handleChange} />
      <button className="btn create-task__btn" onClick={handleTaskCreate}>
        Create
      </button>
    </div>
  );
};

export default CreateTaskInput;
