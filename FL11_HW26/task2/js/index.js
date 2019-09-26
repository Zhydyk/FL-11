const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");

const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];
const StorageCtrl = (function () {
  return {
    storeTask: function (task) {
      let tasks;
      if (localStorage.getItem('tasks') === null) {
          tasks = [];
          tasks.push(task);
          localStorage.setItem('tasks', JSON.stringify(tasks));
      } else {
          tasks = JSON.parse(localStorage.getItem('tasks'));
          tasks.push(task);
          localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    },
    logAllTasksFromStorage: function () {
      let tasks;
      if (localStorage.getItem('tasks') === null) {
          tasks = [];
      } else {
          tasks = JSON.parse(localStorage.getItem('tasks'));
      }
      return tasks;
    },
    deleteTaskFromStorage: function (id) {
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.forEach((task, index) => {
          if (parseFloat(id) === task.id) {
              tasks.splice(index, 1);
          }
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    },
    setDoneStateIntoStorage: function (id) {
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.forEach(task => {
          if (parseFloat(id) === task.id) {
            task.isDone = !task.isDone;
          }
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
})();

const TaskCtrl = (function () {
  const Task = function (id, description) {
    this.id = id;
    this.description = description;
    this.isDone = false;
  }

  return {
    createNewTask: function (description) {
      const tasks = StorageCtrl.logAllTasksFromStorage();
      let id;
      if (tasks.length > 0) {
          const ids = tasks.map(task => {
              return task.id;
          })
          id = Math.max(...ids) + 1;
      } else {
          id = 0;
      }
      const newTask = new Task(id, description);
      return newTask;
    },
    countAmount: function (tasks = StorageCtrl.logAllTasksFromStorage()) {
      const numbers = {
        total: tasks.length,
        progress: 0,
        done: 0
      };
      tasks.forEach(task => task.isDone ? numbers.done++ : numbers.progress++);
      return numbers;
    }
  }
})();

const UICtrl = (function () {
  const UISelectors = {
    taskList: '.list',
    input: '#add-input',
    form: 'form',
    alert: '.alert',
    search: '#search-input',
    total: '.total',
    done: '.total-done',
    progress: '.in-progress'
  }

  return {
    getTaskInput: function () {
      return $(UISelectors.input).val();
    },
    getSearchInput: function () {
      return $(UISelectors.search).val();
    },
    clearInput: function () {
      $(UISelectors.input).val(''); 
    },
    renderNewTask: function (task) {
      const li = $('<li></li>');
      li.addClass('item');
      li.attr('id', `${task.id}`);
      li.html(`<span class="item-text">${task.description}</span>
        <button class="item-remove">Remove</button>
        <button class="item-complete">Complete</button>`);
      $(UISelectors.taskList).append(li);
    },
    renderAllTasks: function (tasks) {
      let output = '';
      tasks.forEach(task => {
          output += `
            <li class="item" id="${task.id}">
              <span class="item-text ${task.isDone ? 'done' : ''}">
                ${task.description}
              </span>
              <button class="item-complete">Complete</button>
              <button class="item-remove">Remove</button>
            </li>`;
      });
      $(UISelectors.taskList).html(output);
    },
    renderDoneState: function (id) {
      $(`#${id}`).children('.item-text').addClass('done');
    },
    renderAlertMessage: function () {
      const alert = $('<div></div>').text('Input field cannot be empty. Please enter a new task.');
      alert.addClass('alert');
      $(UISelectors.form).append(alert);
    },
    renderAmount: function (amount) {
      $(UISelectors.done).text(amount.done);
      $(UISelectors.progress).text(amount.progress);
      $(UISelectors.total).text(amount.total);
    },
    clearAlertMessage: function () {
      $(UISelectors.alert).remove();
    },
    clearTask: function (id) {
      $(`#${id}`).remove();
    },
    logAllSelectors: function () {
      return UISelectors;
    }
  }
})();

const AppCtrl = (function () {
  const loadEventListeners = function () {
    const UISelectors = UICtrl.logAllSelectors();

    $(UISelectors.form).on('submit', (e) => addBtnClick(e));
    $(UISelectors.taskList).on('click', clicks);
    $(UISelectors.search).on('keyup', search);
  }

  const addBtnClick = function (e) {
    e.preventDefault();
    const input = UICtrl.getTaskInput()
    if (input === '') {
      UICtrl.renderAlertMessage();
      setTimeout(() => UICtrl.clearAlertMessage(), 4000);
    } else {
      const newTask = TaskCtrl.createNewTask(input);
      StorageCtrl.storeTask(newTask);
      UICtrl.renderNewTask(newTask);
      UICtrl.renderAmount(TaskCtrl.countAmount());
      UICtrl.clearInput();
    }
  }

  const clicks = function () {
    if ($(event.target).hasClass('item-remove')) {
      StorageCtrl.deleteTaskFromStorage($(event.target).parent().attr('id'));
      UICtrl.clearTask($(event.target).parent().attr('id'));  
      UICtrl.renderAmount(TaskCtrl.countAmount());   
    }

    if ($(event.target).hasClass('item-complete') && 
          !$(event.target).parent().children('span').hasClass('done')) {
      UICtrl.renderDoneState($(event.target).parent().attr('id'));
      StorageCtrl.setDoneStateIntoStorage($(event.target).parent().attr('id'));
      UICtrl.renderAmount(TaskCtrl.countAmount());
    }
  }

  const search = function () {
    const input = UICtrl.getSearchInput();
    const tasks = StorageCtrl.logAllTasksFromStorage().filter(task => task.description.toLowerCase()
      .indexOf(input.toLowerCase()) != -1);
    UICtrl.renderAllTasks(tasks);
    UICtrl.renderAmount(TaskCtrl.countAmount(tasks));
  }

  return {
    init: function () {
      UICtrl.renderAllTasks(StorageCtrl.logAllTasksFromStorage());
      UICtrl.renderAmount(TaskCtrl.countAmount());
      loadEventListeners();
    }
  }
})();

AppCtrl.init();