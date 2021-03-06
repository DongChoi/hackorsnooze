"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  evt.preventDefault();
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  evt.preventDefault();
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/** Show submit form on click on "submit" */

function navSubmitClick(evt) {
  evt.preventDefault();
  console.log("navSubmit works");
  console.debug("navSubmitClick", evt);
  hidePageComponents();
  $allStoriesList.show();
  $submitForm.show();
}
// const $navSubmit = $("#nav-submit");
$navSubmit.on("click", navSubmitClick);

/** show favorited stories on click of Favorites */
function navFavClick(evt) {
  evt.preventDefault();
  console.log("navFavClicked");
  hidePageComponents();
  putFavoritesOnHTML();
  $favStoriesList.show();
}

$navFavs.on("click", navFavClick);
