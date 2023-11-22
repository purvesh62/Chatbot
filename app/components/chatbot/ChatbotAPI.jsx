const LAMBDA_URL = process.env.LEX_URL;

const API = {
  GetChatbotResponse: async (message) => {
    return new Promise(function (resolve, reject) {
      if (message === "hi") {
        setInterval(() => {}, 1000);
        resolve("🤖 Hi, I'm Jarvis Purvesh's personal AI assistant.");
      } else {
        function sleep(time) {
          return new Promise((resolve) => setTimeout(resolve, time));
        }

        // Usage!
        sleep(1000).then(() => {});

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
          text: message,
        });

        let requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        fetch(LAMBDA_URL, requestOptions)
          .then((response) => response.json())
          .then((result) => resolve(result.messages[0].content + " 🤠"))
          .catch((error) => {
            return resolve(
              "Error while handling your request. Backend team is fixing the error."
            );
          });
      }
    });
  },
};

export default API;
