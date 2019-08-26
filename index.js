console.log('before');
// Promise-based approach
// getUser(1)
//     .then(user => getRepos(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => console.log('Error', err.message));

// Async and Await approach
// The awaited functions are wrapped by an async function
// 'try/catch' blocks are used for error handling
async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepos(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch (err) {
        console.log('Error', err.message);
    }
}
displayCommits();

console.log('after');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'breno'});
        }, 2000);
    });
}

function getRepos(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching ${username}'s repositories...`);
            resolve(['repo1','repo2','repo3']);
            //reject(new Error('something went wrong'));
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching the commits on ${repo}...`);
            resolve(['commit']);
        }, 2000);
    });
}