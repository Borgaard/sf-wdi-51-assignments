console.log("Sanity Check: JS is working!");

$(document).ready(function(){
    // array to hold videogames 
    let allVideogames = [];
    // empty div container to render videogames
    let $videogameList;
    $videogameList = $('#listview');

    // render = videogame => {
    //     let videogameHtml = 
    //     `<hr>
    //             <p> 
    //                 <b class="videogame-title>${videogame.title}, with the Superhero:${videogame.avatar}</b>
    //                 <button type="button" name="button" class="videogame-button-delete btn btn-danger pull-right" data-id=${videogame._id}>Delete</button>
    //                 <button class="videogame-button-edit btn btn-secondary pull-right">Edit</button>              
    //                 <span class="edit-input" style="display: none">
    //                     <input type="text" value="${videogame.title}" />
    //                     <button type="button" class="videogame-button-submit btn btn-secondary" data-id="${videogame._id}">Save</button>
    //                 </span>
    //             </p> `
    //             $videogameList.append(videogameHtml);        
    // }
    ///////////////////////////////////////////////////////////////////////////
    /// GET
    ///////////////////////////////////////////////////////////////////////////
    
    //Read all Videogames
    $.ajax({
        method: 'GET',
        url: '/api/videogames',
        success: handleSuccess,
        error: handleError
    })


    ///////////////////////////////////////////////////////////////////////////
    /// POST
    ///////////////////////////////////////////////////////////////////////////

    // create a new Videogame, listen for submit on form
    $('#videogame-form').on('submit', function(event) {
        event.preventDefault();
        // console.log('new game serializesd',  $(this).serializeArray())
        console.log('create clicked');

        let newVideogameData = $(this).serialize();
        // create a new videogame
        $.ajax({
            method: 'POST',
            url: '/api/videogames',
            data: newVideogameData,
            success: handleCreateSuccess,
            error: handleCreateError
        });
    });

    //////////////////////////////////////////////////////////////////////////
    /// DELETE
    ///////////////////////////////////////////////////////////////////////////
    $videogameList.on('click', '.videogame-button-delete',() => {
        console.log(`clicked delete, /api/videogames/${ $(this).attr('data-id') }`);

        $.ajax({
            method: 'DELETE',
            url: "/api/videogames/"+$(this).attr('data-id'),
            success: deleteSuccess,
            error: deleteError,
        });
    });

    ///////////////////////////////////////////////////////////////////////////
    /// PUT
    ///////////////////////////////////////////////////////////////////////////

    $videogameList.on('click', '.videogame-button-edit', function() {
        console.log('clicked edit button');
        $(this).parent().find("#edit-input").show();
    });

    $videogameList.on('click', '.videogame-button-edit-submit', function(){
        console.log('clicked edit submit button');
        $(this).parent().hide();

        let newVideogame = $(this).parent().find('.input').val();

        $.ajax({
            method: "PUT",
            url: "/api/videogames/"+$(this).attr('.data-id'),
            // serialize form data to json
            // data: $(this).serialize(),
            data: { title: newVideogame},
            success: editSuccess,
            error: (err) => {
                console.log('edit went wrong')
            }
        });
    });

    ///////////////////////////////////////////////////////////////////////////
    /// FUNCTIONS
    ///////////////////////////////////////////////////////////////////////////

    // function render() {
    //     $('#listview').append( ` <hr>
    //         <li> Videogame: ${this.title}, Avatar: ${this.avatar}</li>`);
    // }

    // function handleSuccess(videogame) {
    //     for (i = 0; i < videogame.length; i++) {
    //         $('#listview').prepend( ` <hr><b <strong>Videogame:</strong> ${videogame[i].title}, <strong>Avatar:</strong> ${videogame[i].avatar}</b>
    //         <span>
    //             <button type="button" name="button" class="videogame-button-delete btn btn-danger pull-right" data-id=${videogame[i]._id}>Delete</button>
    //             <button class="videogame-button-edit btn btn-secondary pull-right" data-id=${videogame[i]._id}>Edit</button>
    //         </span>
    //         <span id="edit-input" style="display: none">
    //             <input type="text" value="${videogame.title}" />
    //             <input type="text" value="${videogame.avatar}" />
    //             <button type="button" class="videogame-button-edit-submit btn btn-secondary" data-id="${videogame._id}">Save</button>
    //         </span>`);
    //         // render();
    //     }
    // }

    function getVideogameHtml(videogame) {
        return ` <hr><p><b  class="videogame-title" <strong>Videogame:</strong> ${videogame.title}, <strong>Avatar:</strong> ${videogame.avatar}"</b>
            <button type="button" name="button" class="videogame-button-delete btn btn-danger pull-right" data-id=${videogame._id}>Delete</button>
            <button class="videogame-button-edit btn btn-secondary pull-right" >Edit</button>
            <span id="edit-input" style="display: none">
                <input type="text" value="${videogame.title}" />
                <input type="text" value="${videogame.avatar}" />
                <button class="videogame-button-edit-submit btn btn-secondary" data-id="${videogame._id}">Save</button>
            </span></p>`;
    }
    
    //maps through array of videogames and returns it as a string
    function getAllVideogamesHtml(videogames) {
        return videogames.map(getVideogameHtml).join("");
    }

    // we empty and re-render the collection each time our post data changes
    function render() {
        $videogameList.empty();
        // pass allVideogames into the template function
        let videogameHtml = getAllVideogamesHtml(allVideogames);
        $videogameList.append(videogameHtml);
    }

    // // note: we empty and re-render the collection each time our todo data changes
    // const renderAll = () => {
    //     // empty existing videogames from view
    //     $videogameList.empty();
    //     // pass in all videogames into template function
    //     allVideogames.forEach( videogame => render(videogame));
    // }

    function handleSuccess(json) {
        allVideogames = json;
        render();
    }

    function  handleError() {
        console.log('something went wrong when rendering Videogames');
        // $('#listview').text('Failed to load books, is the server working?');
    }

    function handleCreateSuccess(json) {
        $('input').val('');
        // console.log(json)
        // add new videogame to all Videogames
        allVideogames.push(json);
        //render one videogame to view
        render(); 
    }

    function handleCreateError() {
        console.log('something went wrong when trying to create');
        // $('#listview').text('Failed to load books, is the server working?');
    }

    // replace videogame with newly updated version (json)
    function editSuccess (videogame) {
        $(this).parent().parent().find(".videogame-title").html(videogame.title);
        console.log(videogame);
        render();
    }

    function deleteSuccess(json) {
        let videogame = json;
        console.log('this is json', json)
        let videogameId = videogame._id;
        console.log('delete this videogame with Id:', videogameId);
        // find the videogame with the correct ID and remove it from our allVideogames array
        for(var i = 0; i < allVideogames.length; i++) {
            if(allVideogames[i]._id === videogameId) {
                allVideogames.splice(i, 1);
                break;  // we found our videogame - no reason to keep searching (this is why we didn't use forEach)
            }
        }
        render();
    }

    function deleteError () {
        console.log('delete went wrong');
    }
});
