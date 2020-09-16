/* eslint-disable no-undef */
module.exports = {
  "**/*.+(ts|js|tsx|md|ts|css|sass|less|graphql|yml|yaml|scss|json|vue)": [
    "eslint --fix",
    "prettier --write",
    "jest --test",
  ],
}
