export  const createTag = ({
    tag,
    classesName,
    text = '',
    dataSetAction,
    id,

  }) => {
    const createdElement = document.createElement(tag);
    const addClasses = (classes) => classes.split(' ').map(e => createdElement.classList.add(e));
    addClasses(classesName)
    createdElement.textContent = text;
    if (dataSetAction) {
      createdElement.dataset.action = dataSetAction;
    }
    if (id) {
      createdElement.dataset.id = id;
    }
    return createdElement;
  
  };