export interface CommitAuthor {
  name: string;
  email: string;
  date: string;
}

export interface Commit {
  author: CommitAuthor;
  message: string;
}

export interface GitCommit {
  commit: Commit;
}
