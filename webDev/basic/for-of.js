const subreddits = ['finance', 'accounting', 'computer science', 'math']

// if using for-loop
for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

// if using for-of
for (let subreddit of subreddits) {
    console.log(`Visit reddit.com/r/${subreddit}`)
}