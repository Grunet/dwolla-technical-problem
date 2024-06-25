exports.handler = () => {
    const currentTime = handlerInternal(new Date());

    return JSON.stringify({
        currentTime
    });
}

exports.handlerInternal = function handlerInternal(date) {
    return date.toISOString().slice(0, 19).replace("T", " ");
}