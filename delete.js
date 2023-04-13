
async function getTodos() {
  try {
    console.log('requesting server');
    const response = await fetch(
      'http://localhost:4000/todos/?filterValue=completed'
    );
    console.log('got data');

    if (response.status !== 200) {
      throw new Error('>>>>>get error');
    }
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
// getTodos();

const sendingData = {
  text: 'Text_5123125',
};

async function addTodo() {
  try {
    console.log('requesting server');
    const response = await fetch('http://localhost:4000/todos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendingData),
    });
    console.log('sent data');

    if (response.status !== 200) {
      throw new Error('>>>>>post error');
    }
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

// addTodo();

const deletingTodoId = '6437c2c485d6f71c9533642e';

async function deleteTodo() {
  try {
    console.log('requesting server');
    const response = await fetch(
      `http://localhost:4000/todos/${deletingTodoId}`,
      {
        method: 'DELETE',
      }
    );
    console.log('deleted data');

    if (response.status !== 200) {
      throw new Error('>>>>>post error');
    }
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

// deleteTodo();

const updatingTodoId = '6437cd29b5008db5c35c7a6b'

const updatingData = {
  prop: 'text',
  value: '2'
}


async function updateTodo() {
  try {
    console.log('requesting server');
    const response = await fetch(`http://localhost:4000/todos/${updatingTodoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatingData),
    });
    console.log('sent updated data');

    if (response.status !== 200) {
      throw new Error('>>>>>post error');
    }
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

// updateTodo();


async function deleteAllCompletedTodos() {
  try {
    console.log('requesting server');
    const response = await fetch(`http://localhost:4000/todos/`, {
      method: 'DELETE',
    });
    console.log('deleting data');
    console.log(response);
    if (response.status !== 200) {
      throw new Error('>>>>>delete error');
    }
    console.log('deleting sucsessful');
  } catch (e) {
    console.log(e);
  }
}


// deleteAllCompletedTodos();

async function updateAllCompletedTodos() {
  try {
    console.log('requesting server');
    const response = await fetch(`http://localhost:4000/todos/`, {
      method: 'PATCH',
      // headers: {
      //   'Content-Type': 'application/json'
      // },
    });
    console.log('deleting data');
    console.log(response);
    if (response.status !== 200) {
      throw new Error('>>>>>delete error');
    }
    console.log('deleting sucsessful');
  } catch (e) {
    console.log(e);
  }
}


updateAllCompletedTodos();