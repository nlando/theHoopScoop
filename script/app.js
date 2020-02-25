$(() => {

  //ideas:

  // - put name of searched park into review name
  //when clicking #search-review-btn, input the value into #review-park-name




  // - give all buttons actions

  // $(document).on('click', '.page', (event) => {
  //   $('#nav-overlay').hide();
  // });

  $(document).on('click', '#menu-hamburger', (event) => {
    console.log('working');
    $('#nav-overlay').show();
    $('#nav-page').show();
  });

  $(document).on('click', '#find-btn', (event) => {
    console.log('working');
    $('html, body').animate({
      scrollTop: $('#find-page').offset().top
    }, 500)
  });

  $(document).on('click', '#review-btn', (event) => {
    console.log('working');
    $('html, body').animate({
      scrollTop: $('#review-page').offset().top
    }, 500)
  });

  $(document).on('click', '#add-btn', (event) => {
    console.log('working');
    $('html, body').animate({
      scrollTop: $('#add-page').offset().top
    }, 500)
  });

  $(document).on('click', '#nav-overlay', (event) => {
    $('#nav-overlay').hide();
  });





  // - make add page fill-in options with an array
  //when clicking #final-add-hoop-btn, populate the first submission input field
  //when each input field has at least one letter, add the next field
  //only make #final-add-hoop-btn clickable when all field are filled

  let addForm = ['Park/Location Name', 'Address', 'First Name', 'Last Name', 'Email Address'];
  let textElement = '';
    for (let i = 0; i < addForm.length; i++) {
      let inputElement = `<input class= 'add-hoop-info border' type = 'text'
            name = ${addForm[i]}
            placeholder = ${addForm[i]}></input>`;
      $('#add-form').append(inputElement);
    };




});
