const updatePost = async () => {
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const post_id = document.querySelector('#post-card').value;

    await fetch(`/api/post/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({title, content}),
        headers: { 'Content-Type': 'application/json'},

    })

    document.location.replace(`/dashboard`)
}

const deletePost = async () => {
    const post_id = document.querySelector('#post-card').attribute('data-postId');

    await fetch(`/api/post/${post_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'},
    })
    document.location.replace('/dashboard')
}
document
    .querySelector('#update-post-btn')
    .addEventListener('click', updatePost);

document
    .querySelector('#delete-post-btn')
    .addEventListener('click', deletePost);