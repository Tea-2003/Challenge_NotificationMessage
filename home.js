

const unReadMessages = document.querySelectorAll('.unread');
const unReadMessagesCount = document.getElementById('num-of-notify');
const markAll = document.getElementById('mark-read-all');

unReadMessagesCount.innerText = unReadMessages.length;

unReadMessages.forEach((message) => {
    message.addEventListener('click', () => {
        message.classList.remove('unread');
        const newUnReadMessages = document.querySelectorAll('.unread');
        unReadMessagesCount.innerText = newUnReadMessages.length;

        // Remove the btn-notify element
        const btnNotify = message.querySelector('.btn-notify');
        if (btnNotify) {
            btnNotify.remove();
        }
        // Remove the background color
        message.style.backgroundColor = '#FFF';
    });
})

//Mark all as read
markAll.addEventListener('click', () => {
    unReadMessages.forEach((message) => {
        message.classList.remove('unread');

        // Remove the btn-notify element
        const btnNotify = message.querySelector('.btn-notify');
        if (btnNotify) {
            btnNotify.remove();
        }
        message.style.backgroundColor = '#FFF';
    });

    unReadMessagesCount.innerText = 0;
})