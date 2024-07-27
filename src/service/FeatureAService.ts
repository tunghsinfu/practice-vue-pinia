export const fetchOptionsFromEndpoint1 = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
      ]);
    }, 500);
  });
};

export const fetchOptionsFromEndpoint2 = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { value: 'optionA', label: 'Option A' },
        { value: 'optionB', label: 'Option B' },
        { value: 'optionC', label: 'Option C' }
      ]);
    }, 500);
  });
};
