import { Octokit } from "@octokit/core";
const octokit = new Octokit();

export const requestRepoApi = (querySearch, page) => octokit.request('GET /search/repositories', {
  q: querySearch,
  sort: "stars",
  order: "desc",
  per_page: 50,
  page,
})