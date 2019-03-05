console.log("Sanity Check: JS is working!");
let allGames = [];
let $gameList;

$(document).ready(function(){
    $gameList = $('#game-list');

    //list all games on index page
    $.ajax({
        method: 'GET',
        url: '/api/games',
        success: gameListSuccess,
        error: gameListError
    });

    //HTML to append when new game is added
    function getGameHtml(game) {
        return `<p>
            <b class="game-title">${game.title}</b>, ${game.avatar}
            <span class="edit-input" style="display: none">
                <input type="text" value="${game.title}" />
                <button
                    class="editSubmitBtn"
                    data-id="${game._id}">
                    Save
                </button>
            </span>
            <button 
                type="delete" 
                class="deleteBtn"
                data-id=${game._id}>
                Delete
            </button>
            <button 
                type="button"
                class="editBtn"
                data-id=${game._id}>
                Edit
            </button>
         </p>`;
    }

    //maps through array of games and returns it as a string
    function getAllGamesHtml(games) {
        return games.map(getGameHtml).join("");
    }

    //renders all games to index page
    function render () {
        $gameList.empty();
        let gameHtml = getAllGamesHtml(allGames);
        $gameList.append(gameHtml);
    }

    //lists all games on index page
    function gameListSuccess(games) {
        allGames = games;
        render();
    }

    function gameListError() {
        console.log('something went wrong');
        $('#game-list').text('Failed to load books, is the server working?');
    }

    //create a new game
    function newGameSuccess(json) {
        $('#game-form input').val('');
        allGames.push(json);
        render();
    }

    function newGameError() {
        console.log('There was an error with adding a new game.');
    }

    //event listener for new game submit form
    $('#game-form').on('submit', function(e){
        e.preventDefault();
        console.log('you clicked');
        $.ajax({
            method: 'POST',
            url: '/api/games',
            data: $(this).serialize(),
            success: newGameSuccess,
            error: newGameError
        });
    });
    //delete a games
    function deleteGameSuccess(json) {
        let game = json;
        let gameId = game._id;
        for (i = 0; i < allGames.length; i++){
            if (allGames[i]._id === gameId) {
                allGames.splice(i, 1);
                break;
            }
        }
        render();
    }

    function deleteGameError() {
        console.log("deleting game was not successful")
    }

    //event listener for delete game button
    $gameList.on('click', '.deleteBtn', function() {
        $.ajax({
            method: 'DELETE',
            url: '/api/games/'+$(this).attr('data-id'),
            success: deleteGameSuccess,
            error: deleteGameError
        })
    })

    $gameList.on('click', '.editBtn', function() {
        $(this).parent().find(".edit-input").show();
    })

    //changes HTML inside title with new title
    // function editGameSuccess(game) {
    //     $(this).parent().parent().find(".game-title").html(game.title);
    // }

    function editGameError() {
        console.log("There was an error with editing a game.")
    }

    //event listener for edit game button
    $gameList.on('click', '.editSubmitBtn', function() {
        $(this).parent().hide();
        let newTitle = $(this).parent().find("input").val();
        let dataId = `${ $(this).attr('data-id') }`;
        $.ajax({
            method: "PUT",
            url: `/api/games/${ $(this).attr('data-id') }`,
            data: { title: newTitle },
            success: (game) => {
                $(this).parent().parent().find(".game-title").html(game.title);
            },
            error: editGameError
        })
    })

});
