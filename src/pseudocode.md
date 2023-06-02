# Goosechase Take-home

## Goal 

Create, display, and update games and missions and their details as accessed through the provided API

## Components and Routes

### /
- Home (display list of games, show links to other pages)
- GameList (list of games)
- GameListItem (each item in the list of games)

### /game-detail
- GameDetail (display game details and MissionList)
- MissionList (display list of missions)
- Nub (show points)
- Tag (show various info)
- MissionIcon (displays icon related to mission)
- Link (display clickable link)

### /create-game
- GameForm (create or update game)
- TextField

### /update-game
- GameForm (create or update game)


## State

## Tests

## If there is time

- Delete game/mission
- Easter eggs

## Pseudocode

### / home
When page is loaded:
- fetch data from server
- transform data as needed
- store data in state
- display list of games on list page:
    - access saved games in state
    - loop through each game object
    - render each as a GameListItem component
- allow user to click on each GameListItem and be taken to the GameDetail component

### / game-detail
When page is loaded:
- display details of the game
- render a list of Mission components for the game
- display an "Update Game" button that takes the user to the update-game page

### / create-game
When page is loaded:
- display a GameForm component with which the user can create a game
- provide a submit button to allow the user to submit the game to the server
When the user clicks the submit button:
- submit a post request to the server to add the new game

### / update-game
When page is loaded:
- display a GameForm component with which the user can update a game
- the game details should be pre-populated in the form
When the user clicks the update button:
- submit a patch request to the server to update the game




