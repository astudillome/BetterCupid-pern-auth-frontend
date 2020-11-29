const REACT_APP_API_URL = "http://localhost:4000/api/v1"

export default class RelationshipModel {
  static likeUser(data, recipientId) {
    // console.log(data)
    return fetch(`${REACT_APP_API_URL}/relationship/${recipientId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
  static unlikeUser(data, recipientId) {
    return fetch(`${REACT_APP_API_URL}/relationship/${recipientId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
}