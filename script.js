const taskInput = document.querySelector('.task_input')
const addTaskButton = document.querySelector('.add_task_button')
const taskList = document.querySelector('.task_list')

const taskLoader = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    taskList.innerHTML = ''
    tasks.forEach(task => {
        const li = document.createElement('li')
        li.textContent = task.text
        li.style.textDecoration = task.completed ? 'line-through' : 'none'
        li.addEventListener('click', () => toggleTask(task.text))
        taskList.appendChild(li)
    })
}

const taskSaves = tasks => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim()
    if (taskText) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || []
        tasks.push({ text: taskText, completed: false })
        taskSaves(tasks)
        taskLoader()
        taskInput.value = ''
    }
})

const toggleTask = taskText => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const task = tasks.find(t => t.text === taskText)
    if (task) task.completed = !task.completed
    taskSaves(tasks)
    taskLoader()
}

taskLoader()


























const userForm = document.querySelector('.user_form')
const usernameInput = document.querySelector('.username')
const passwordInput = document.querySelector('.password')

document.addEventListener('DOMContentLoaded', () => {
    const saved = JSON.parse(localStorage.getItem('userData')) || {}
    if (saved.username) usernameInput.value = saved.username
    if (saved.password) passwordInput.value = saved.password
})

userForm.addEventListener('submit', e  => {
    e.preventDefault()
    const userData = {
        username: usernameInput.value.trim(),
        password: passwordInput.value.trim()
    }
    localStorage.setItem('userData', JSON.stringify(userData))
    alert('Дані збережено!')
})

































const inputName = document.querySelector('.input_name')
const inputUrl = document.querySelector('.input_url')
const btn = document.querySelector('.btn')
const list = document.querySelector('.list')

const loadBookmarks = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
    list.innerHTML = ''
    bookmarks.forEach(({ name, url }) => {
        const li = document.createElement('li')
        li.innerHTML = `<a href="${url}" target="_blank">${name}</a>
            <button onclick="removeBookmark('${url}')">Видалити</button>`
        list.appendChild(li)
    })
}

btn.addEventListener('click', () => {
    const name = inputName.value.trim()
    const url = inputUrl.value.trim()
    if (name && url) {
        const bookmarks = JSON.parse(localStorage.getItem('закладки')) || []
        bookmarks.push({ name, url })
        localStorage.setItem('закладки', JSON.stringify(bookmarks))
        loadBookmarks()
        inputName.value = ''
        inputUrl.value = ''
    }
})

const removeBookmark = url => {
    const bookmarks = JSON.parse(localStorage.getItem('закладки')) || []
    const filter = bookmarks.filter(bookmark => bookmark.url !== url)
    localStorage.setItem('закладки', JSON.stringify(filter))
    loadBookmarks()
}

loadBookmarks()