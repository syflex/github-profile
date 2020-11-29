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
      'Authorization': 'bearer 1cc459aac6f86fd7f53fdfce4e4bfe35e37f46ae'
    },
    body: body
  })
    .then(response => response.json())
    .then(data => {
      // document.body.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      // console.log(data.data.viewer);
      const data2 = data.data.viewer
      console.log(data2.repositories.nodes);

      document.getElementById("profile-img").src = data2.avatarUrl; 
      document.getElementById("name").innerHTML = data2.name;
      document.getElementById("description").innerHTML = data2.bio;


      var repos = document.getElementById('repos');
           
      var i;
      for (i = 0; i < data2.repositories.nodes.length; i++) {
        
        var span = document.createElement("p");
        span.textContent = (data2.repositories.nodes[i].description);

        
        var a = document.createElement('a');
        var link = document.createTextNode(data2.repositories.nodes[i].name); 
        a.appendChild(link);  
        a.title = data2.repositories.nodes[i].name;
        a.href = data2.repositories.nodes[i].url; 

        var langSpan = document.createElement("forkCount");
        var t = document.createTextNode(data2.repositories.nodes[i].primaryLanguage.name);
        langSpan.appendChild(t);

        var forkSpan = document.createElement("forkCount");
        var t = document.createTextNode(data2.repositories.nodes[i].forkCount);
        forkSpan.appendChild(t);

        var stargazerSpan = document.createElement("forkCount");
        var t = document.createTextNode(data2.repositories.nodes[i].stargazerCount);
        stargazerSpan.appendChild(t);

        repos.appendChild(a);
        repos.appendChild(langSpan);
        repos.appendChild(span);
        repos.appendChild(forkSpan);
        repos.appendChild(stargazerSpan);
      }

    });