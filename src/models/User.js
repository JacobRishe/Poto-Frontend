const url = `http://localhost:4000/api/user`


class UserModel {
  // the "static" keyword allows us to invoke the method without an instance of the class
  static all = () => {
    return fetch(`${url}/users`).then(res => res.json())
  }

  static show = (userId) => {
    return fetch(`${url}/users/${userId}`).then(res => res.json())
  }

  static create = (userData) => {
    return fetch(`${url}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
  }
}

export default UserModel