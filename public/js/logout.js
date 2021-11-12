const inoutBtn = document.querySelector('#inout');
const logout = async function() {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/');

    }
};

inoutBtn.addEventListener('click', logout);