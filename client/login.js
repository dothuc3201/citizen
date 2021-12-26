const submit = () => {
  var username = document.querySelector('input[name ="username"]').value;
  var password = document.querySelector('input[name ="password"]').value;
  console.log(username, password);
  // Example POST method implementation:
  async function postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
  }

postData('http://localhost:3001/api/account/login', { username, password})
  .then(data => {
    console.log(data)
    if(data.message == "đăng nhập thành công"){
     
      //logic, chuyển trang về trang admin

      window.location.href = './admin-index.html';

      localStorage.setItem('token', data.token);
      console.log(localStorage.getItem('token'));
      
    }
    if(data.message == "tên đăng nhập hoặc mật khẩu không đúng") {
      alert("Tài khoản hoặc mật khẩu không đúng!")
    }
    // JSON data parsed by `data.json()` call
  });

  

}