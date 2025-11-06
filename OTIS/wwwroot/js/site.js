window.scrollToBottom = (element) => {
    if (element) {
        element.scroll({
            top: element.scrollHeight,
            behavior: 'smooth'
        });
    }
};
