window.scrollToBottom = (element) => {
    if (element) {
        element.scroll({
            top: element.scrollHeight,
            behavior: 'smooth'
        });
    }
};

window.resizeInput = (element) => {
    element.style.height = '';
    element.style.height = element.scrollHeight + 'px';
};
