console.log('before');

getUser(1)
    .then(user => getRepos(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits', commits))
    .catch(err => console.log('Error', err.message));

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