# GIT QC REVIEW
### What is version control?
Version control is a system of tracking and managing changes to documents, code, and files. It allows us to keep track of any modificaitons, review changes, revert to previous versions and collaborate with others more effectively

### List the git commands you know and what they do
- **push**, to update the remote repository with changes to the local repo. **checkout**, to switch branches. **branch** to check the current branch as well as create new ones. **pull** to update the local repo with changes to the remote. **status** to check current changes and modified files. **stash** to temporarily save changes in the working directory without commiting them. **revert** will undo the changes of a commit. **reset** used to undo changes by moving the current banch to a specific state or commit. **add** to move files and their changes to the staging area. **restore** to restore the files to their former commit state.

### How would you prevent a file from being tracked by git?
Add the file extension, or the directory location pattern to the .gitignore

### What is a branch? What are some common branching strategies?
A branch is a path that deviates from the main branch. Common branching strategies involve isolating features or layers to respective branches, as well as giving specific teams or members their own branches. This is a good measure to protect the main branch from merge conflicts, data loss, destructive updates...

### How to create a new branch?
- We can create a branch using `git branch <new-branch-name>`
- Alternatively we can switch to a branch and create one in a single command with the branch flag `git checkout -b <new-branch-name>`

### What is a merge conflict? How do you prevent these and resolve if it happens?
- A merge conflict is what occurs when two or more changes toa file or set of files are incompatible with eachother.
- Merge conflicts can be avoided by:
  - Frequent pulls and updates
  - Communicating
  - Consistent workflow
  - Testing before merging
  - Avoiding large updates or refactors
  - Working on separate features/files
  - Clear commit messages/comments/documentation
- Merge conflicts can be resolved by manually reviewing the conflicting changes and deciding how to combine or integrate the changes. 

### What is a GitHub pull request?
A github pull request is a way to propose changes and discussion, or review changes made to a repository. 
- a way to have the main/master branch adopt the changes made from the branch making the request.
- a way to allow team members to review the changes
- a way to introduce or utilize CI tools to test updates

### What is the git workflow for editing code and saving changes?
A common work-flow for editing and saving code would be git add, git commit, git pull, git push.
- If we're working in a branch we can add a few more steps like git checkout [branch-name], git stash, git fetch origin, git checkout main, git pull origin main, git checkout [branch-name], git pull

### What is a commit?
A commit will take whatever changes have been added to the staging area and commit those changes to the local repository. These changes of course would still need to be pushed to the remote repository. 

### How would you go back in your commit history if you make a mistake?
There are a few ways depending on the intention. Revert, and reset are two commands to handle this with the usage of commit ids as arguments.