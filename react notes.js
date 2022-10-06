AXIOS "o.26.o"

   const login = (email, password) => {
        setIsLoading(true);
      console.log(email);
      console.log(password);
      
          axios.post('https://oceaniot.io/public/api/login', {
            "email":email,
             "password":password,
          },{
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer aldkfjladkjflkajdlkfj'
          },      
      })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

    let json = {"token":"aldksfajld kflk"};
               
                console.log(json);
                alert(json.token);
                // setUserToken(json["token"]);
                // AsyncStorage.removeItem('userToken');
                // AsyncStorage.setItem('userToken', json.token);
           

        setIsLoading(false);
    }
