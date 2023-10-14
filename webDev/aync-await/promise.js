fakeRequestPromises('yelp.com/api/coffee/page1')
    .then(() => {
        console.log("It works (page 1")
        return fakeRequestPromises('yelp.com/api/coffee/page2')
    })
    .then(() => {
        console.log("It works (page 2")
        return fakeRequestPromises('yelp.com/api/coffee/page3')
    })
    .then(() => {
        console.log("It works (page 3")
    })
    .catch(() => {
        console.log("Oh No, a request failed!")
    })