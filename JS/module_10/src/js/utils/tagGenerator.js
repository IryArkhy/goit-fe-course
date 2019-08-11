export  const createTag = ({
    tag,
    className,
    text = '',
    dataSetAction = '',
    id = ''
  }) => {
    const createdElement = document.createElement(tag);
    createdElement.classList.add(className);
    createdElement.textContent = text;
    createdElement.dataset.action = dataSetAction;
    createdElement.dataset.id = id;
    return createdElement;
  
  };