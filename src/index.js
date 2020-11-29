import "./scss/index.scss";

// const axios = require('axios').default;

// // Make a request for a user with a given ID
// axios.post('https://api.github.com/graphql',{
//   method: 'post',  
//   query: `
//   viewer{
//     name
//   }
//     `
// },
// {headers: {
//   'Authorization': 'bearer 3b65fe1a47a0123121c857e08063af5adc24f033'
// }}
      
// )
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

//   axios({
//     url: 'https://1jzxrj179.lp.gql.zone/graphql',
//     method: 'post',
//     data: {
//       query: `
//         query PostsForAuthor {
//           author(id: 1) {
//             firstName
//               posts {
//                 title
//                 votes
//               }
//             }
//           }
//         `
//     }
//   }).then((result) => {
//     console.log(result.data)
//   });





  let content = {
    "query": `{
      viewer{
        name,    
        email,
        avatarUrl,
        bio,    
        repositories(last: 20) {
           nodes {
               name,
              url,
              description,
              updatedAt,
              stargazerCount,
              forkCount
              primaryLanguage{
                name,
                color
              }
           }
         }   
      }
    }
  `};
  
  let body = JSON.stringify(content);
  
  fetch('https://api.github.com/graphql', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer 3b65fe1a47a0123121c857e08063af5adc24f033'
    },
    body: body
  })
    .then(response => response.json())
    .then(data => {
      document.body.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    });