const submitNewComment = async (event) => {
    event.preventDefault();
    const content = document.querySelector('#content').value;
    const post_id = document.querySelector('#post-card').getAttribute('data-postId')


    await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({content, post_id}),
        headers: { 'Content-Type': 'application/json'},
    })
    console.log(content)
    document.location.replace(`/posts/${post_id}`)
}

document
    .querySelector('#new-comment-submit')
    .addEventListener('click', submitNewComment);