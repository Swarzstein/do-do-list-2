import './style.css';

const element = document.querySelector('#todolist');
const toDoList = [
  {
    description: 'wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'complete To Do list project',
    completed: false,
    index: 1,
  },
];

const getToDoList = () => {
  if (toDoList === null) {
    return [];
  }
  return toDoList;
};

// eslint-disable-next-line consistent-return
const printList = () => {
  const list = toDoList;
  let tasks = '';
  for (let i = 0; i < list.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    list.forEach((task) => {
      if (task.index === i) {
        tasks += `
        <li id = "${task.index}" class="item">
          <label>
            <input class="checked" type="checkbox" name="chk${task.index}" id="chk${task.index}">
            <input class="edit borderless fit hidden" type="text" name="edit${task.index}" id="edit${task.index}" placeholder="Edit task...">
            <p id="task${task.index}">${task.description}</p>
          </label>
          <div class="kebab-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </li>
      `;
      }
    });
  }

  element.innerHTML = tasks;
};

if (getToDoList() !== []) {
  printList();
}