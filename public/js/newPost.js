const submitNewPost = async () => {
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    // console.log(title, content)
    await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, content}),
        headers: { 'Content-Type': 'application/json'},
    })

    document.location.replace('/dashboard')
}
document
    .querySelector('#new-post-submit')
    .addEventListener('click', submitNewPost);