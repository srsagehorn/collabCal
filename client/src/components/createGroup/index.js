import React from "react";
import firebase from '../firebase'
import { useUserContext } from '../firebase/userContext'

export default function () {
  const [user] = useUserContext()
  console.log(user)
  return (
    <main>
      <form id="login" class="col-md-4 center">
        <h1 class="textCenter">Create a Group</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Group Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Add members</label>
          <div class="row">
            <div class="col-md-10">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="col-md-2">
              <div class="add center">
                <p id="plus" class="textCenter">
                  +
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="addedMembers"></div>
        <div class="textCenter">
          <button type="submit" id="createBtn" class="btn center">
            Create Group
          </button>
        </div>
      </form>
    </main>
  );
}
