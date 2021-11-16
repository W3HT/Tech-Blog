function newPostForm() {
    console.log('New Post')
    document.location.replace('/newPost');

}

document
    .querySelector('#newPostBtn')
    .addEventListener('click', newPostForm);