const postData = async (url, data) => { //заставляет ждать пока не выполнится код
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
            },
        body: data
    });

    return await res.json();
};

const getResource = async (url) => { //заставляет ждать пока не выполнится код
    let res = await fetch(url);

    if(!res.ok) {
        throw new Error (`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
};

export {postData};
export {getResource};