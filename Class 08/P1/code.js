function greet(name, callback) {
  const message = `Hello ${name};`;
  callback(message);
}
function showGreeting(greetingMessage) {
  console.log(greetingMessage);
}

greet("Filip", showGreeting);

/*
 Callback Hell
 Scenario:
    1) get user data
    2) fetch user comments
    3) update the UI
    4) log a succsess mesage
*/

function getUser(userId, callback) {
  setTimeout(() => {
    console.log(`Fetched user with ID: ${userId}`);
    // callback(["Comment A", "Comment B"])
  }, 1000);
}

function getUserComments(user, callback) {
  // Simulate fetching user comments
  setTimeout(() => {
    console.log(`Fetched comments for user ${user.name}`);
    callback(["Comment A", "Comment B"]);
  }, 1000);
}

function updateUI(user, comments, callback) {
  // Simulate fetching user comments
  setTimeout(() => {
    console.log(`UI update with data for ${user.name} and their comments`);
    callback(["Comment A", "Comment B"]);
  }, 1000);
}

getUser(101, (user) => {
  getUserComments(user, (comments) => {
    updateUI(user, comments, () => {
      console.log("We are Nominal!");
    });
  });
});

function getUser(userID, onSuccsess, onError) {
  setTimeout(() => {
    const foundUser = { userID: userID, name: "Bob" };
    if (!userID || userID < 0) {
      onError("Invalid user id!");
      return;
    }
    onSuccsess(foundUser);
  }, 500);
}

function handleUserData(user) {
  console.log(`User found ${user.name}`);
}
function handleError(error) {
  console.error(`ERROR: ${error}`);
}

getUser(123, handleUserData, handleError);

// Status: pending, fulfiled, rejected
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const succsess = true;
      if (succsess) {
        resolve("Data fetched successfully");
      } else {
        reject("Failed to fetch data!");
      }
    }, 1000);
  });
}

fetchDataPromise()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

function step1(result) {
  console.log("Step 1 complete", result);
  return "Result from step 1";
}
function step2(result) {
  console.log("Step 2 complete", result);
  return "Result from step 2";
}
function step3(result) {
  console.log("Step 3 complete", result);
  return "Result from step3";
}

fetchDataPromise()
  .then(step1)
  .then(step2)
  .then(step3)
  .then((finalResult) => {
    console.log("Final result:", finalResult);
  })
  .catch((error) => {
    console.error("Error in chain", error);
  });

// https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json

function getDocument() {
  return new Promise((resolve, reject) => {
    fetch(
      "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json"
    )
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
}
/*
function getImportantDocuments(documents) {
  const ImportantDocuments = documents.filter((document) => document.important);

  return new Promise((resolve, reject) => {
    if (ImportantDocuments.length === 0) {
      reject("Nothing important here!! ;)");
    }
    setTimeout(() => {
      resolve(ImportantDocuments);
    }, 3000);
  });
}

function checkDocs(documents) {
  if (!documents || typeof documents !== "object") {
    throw new Error("Problem with docs!");
  }
  if (documents.length === 0) {
    throw new Error("No docs here!");
  }
}

function showDocs(documents) {
  documents.forEach((document) => {
    console.log(`${document.name}.${document.type} (${document.size}mb)`);
  });
}
getDocument()
  .then((data) => {
    //data = documents from the server
    console.log("We got them!");
    checkDocs(data);

    return getImportantDocuments(data);
  })
  .then((data) => {
    return showDocs(data);
  })
  .catch((error) => {
    console.error(error);
  });
*/
async function getData() {
  const result = await fetchDataPromise();
  console.log(result);
}

function anotherAsyncOpp() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Second Opp!");
    }, 3000);
  });
}

getData();
