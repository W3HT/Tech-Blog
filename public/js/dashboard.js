function newPostForm() {
    console.log('New Post')
    document.location.replace('/singlePost');

}

document
    .querySelector('#newPostBtn')
    .addEventListener('click', newPostForm);